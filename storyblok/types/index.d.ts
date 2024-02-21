import {StoryblokStory} from 'storyblok-generate-ts'

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  label: string;
  variant: "" | "primary" | "outlined" | "ghost";
  link?: Exclude<MultilinkStoryblok, {linktype?: "asset"}>;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface HeroStoryblok {
  header?: string;
  bodytext?: string;
  image?: AssetStoryblok;
  buttons?: ButtonStoryblok[];
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface HomeStoryblok {
  body?: (ButtonStoryblok | HeroStoryblok | HomeStoryblok | HomeHeroStoryblok | PageStoryblok | SimpletextStoryblok)[];
  metatags?: {
    _uid?: string;
    title?: string;
    plugin?: string;
    og_image?: string;
    og_title?: string;
    description?: string;
    twitter_image?: string;
    twitter_title?: string;
    og_description?: string;
    twitter_description?: string;
    [k: string]: any;
  };
  _uid: string;
  component: "home";
  [k: string]: any;
}

export interface HomeHeroStoryblok {
  header?: string;
  bodytext?: string;
  image?: AssetStoryblok;
  buttons?: ButtonStoryblok[];
  _uid: string;
  component: "home-hero";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (ButtonStoryblok | HeroStoryblok | HomeStoryblok | HomeHeroStoryblok | PageStoryblok | SimpletextStoryblok)[];
  metatags?: {
    _uid?: string;
    title?: string;
    plugin?: string;
    og_image?: string;
    og_title?: string;
    description?: string;
    twitter_image?: string;
    twitter_title?: string;
    og_description?: string;
    twitter_description?: string;
    [k: string]: any;
  };
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface SimpletextStoryblok {
  header?: string;
  subheader?: string;
  bodytext?: string;
  _uid: string;
  component: "simpletext";
  [k: string]: any;
}
