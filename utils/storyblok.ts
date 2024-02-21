import crypto from 'crypto'
import type { RouteLocation } from 'vue-router'

export function getStoryblokVisualEditorUrlParams(route: RouteLocation) {
  const spaceId = route.query['_storyblok_tk[space_id]'] as string | undefined
  const timestamp = route.query['_storyblok_tk[timestamp]'] as string | undefined
  const token = route.query['_storyblok_tk[token]'] as string | undefined

  return {
    spaceId,
    timestamp,
    token
  }
}

export function hasStoryblokVisualEditorUrlParams(route: RouteLocation) {
  const {
    spaceId,
    timestamp,
    token
  } = getStoryblokVisualEditorUrlParams(route)

  return !(!spaceId || !timestamp || !token);
}

export function validatePreviewRequest(previewAccessToken: string, spaceId?: string, timestamp?: string, token?: string, maxDuration = 3600) {
  if (!previewAccessToken || !spaceId || !timestamp || !token) {
    return false
  }

  const validationToken = crypto.createHash('sha1')
    .update(`${spaceId}:${previewAccessToken}:${timestamp}`)
    .digest('hex')

  if (validationToken !== token) {
    return false
  }

  return parseInt(timestamp) > Math.floor(Date.now() / 1000) - maxDuration
}

interface FetchFuncParams {
  per_page?: number,
  page?: number,
}
interface FetchFuncReturns {
  total: number,
}
export async function scanPagination<ParamT extends FetchFuncParams, RetT extends FetchFuncReturns>(
  fetchFunc: (param: ParamT) => Promise<RetT>,
  param: ParamT,
  maxCount?: number
): Promise<RetT[]> {
  const perPage = maxCount ? Math.min(100, maxCount) : 100

  // Perform initial request
  const first = await fetchFunc({
    ...param,
    per_page: perPage,
    page: 1,
  })

  // Enumerate remaining page numbers - I know this is also possible with Array.from, but that's even less readable
  const total = maxCount ? Math.min(first.total, maxCount) : first.total
  const pages: number[] = []
  for (let i = 2; i <= Math.ceil(total / perPage); i++) {
    pages.push(i)
  }

  // Perform fetch of remaining pages in parallel
  const more = await Promise.all(pages.map((page) => fetchFunc({
    ...param,
    per_page: perPage,
    page,
  })))
  return [first, ...more]
}

export function fromStoryblokDate(storyblokDate?: string): Date | undefined {
  if (!storyblokDate) {
    return undefined
  }
  try {
    return new Date(storyblokDate.replace(' ', 'T') + ':00Z')
  } catch (e) {
    return undefined
  }
}

export function toStoryblokDate(dt: Date): string {
  const YYYY = dt.getUTCFullYear().toString()
  const MM = (dt.getUTCMonth() + 1).toString().padStart(2, '0')
  const DD = dt.getUTCDate().toString().padStart(2, '0')
  const hh = dt.getUTCHours().toString().padStart(2, '0')
  const mm = dt.getUTCMinutes().toString().padStart(2, '0')
  return `${YYYY}-${MM}-${DD} ${hh}:${mm}`
}
