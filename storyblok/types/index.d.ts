import {StoryblokStory} from 'storyblok-generate-ts'

export interface AllPostsStoryblok {
  header?: string;
  _uid: string;
  component: "all-posts";
  [k: string]: any;
}

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

export interface ConfigStoryblok {
  menu?: MenuLinkStoryblok[];
  footer_about?: string;
  footerMenus?: FooterMenuStoryblok[];
  buttons?: ButtonStoryblok[];
  copyright?: string;
  _uid: string;
  component: "config";
  [k: string]: any;
}

export interface FooterMenuStoryblok {
  header?: string;
  menu?: MenuLinkStoryblok[];
  _uid: string;
  component: "footer-menu";
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
  body?: (
    | AllPostsStoryblok
    | ButtonStoryblok
    | ConfigStoryblok
    | FooterMenuStoryblok
    | HeroStoryblok
    | HomeStoryblok
    | HomeHeroStoryblok
    | LogoStoryblok
    | LogoGridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | PictureStoryblok
    | PostStoryblok
    | SimpletextStoryblok
    | SnippetStoryblok
  )[];
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
  menu?: MenuLinkStoryblok[];
  _uid: string;
  component: "home";
  [k: string]: any;
}

export interface HomeHeroStoryblok {
  header?: string;
  bodytext?: string;
  image?: AssetStoryblok;
  buttons?: ButtonStoryblok[];
  logos?: LogoGridStoryblok[];
  _uid: string;
  component: "home-hero";
  [k: string]: any;
}

export interface LogoStoryblok {
  image: AssetStoryblok;
  link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "logo";
  [k: string]: any;
}

export interface LogoGridStoryblok {
  header?: string;
  logos?: LogoStoryblok[];
  _uid: string;
  component: "logoGrid";
  [k: string]: any;
}

export interface MenuLinkStoryblok {
  label?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "asset"}>;
  _uid: string;
  component: "menu_link";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (
    | AllPostsStoryblok
    | ButtonStoryblok
    | ConfigStoryblok
    | FooterMenuStoryblok
    | HeroStoryblok
    | HomeStoryblok
    | HomeHeroStoryblok
    | LogoStoryblok
    | LogoGridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | PictureStoryblok
    | PostStoryblok
    | SimpletextStoryblok
    | SnippetStoryblok
  )[];
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

export interface PictureStoryblok {
  image: AssetStoryblok;
  note?: string;
  class?: "" | "narrow";
  _uid: string;
  component: "picture";
  [k: string]: any;
}

export interface PostStoryblok {
  title?: string;
  publishedAt?: string;
  teaser?: AssetStoryblok;
  intro?: string;
  content?: (
    | AllPostsStoryblok
    | ButtonStoryblok
    | ConfigStoryblok
    | FooterMenuStoryblok
    | HeroStoryblok
    | HomeStoryblok
    | HomeHeroStoryblok
    | LogoStoryblok
    | LogoGridStoryblok
    | MenuLinkStoryblok
    | PageStoryblok
    | PictureStoryblok
    | PostStoryblok
    | SimpletextStoryblok
    | SnippetStoryblok
  )[];
  _uid: string;
  component: "Post";
  [k: string]: any;
}

export interface SimpletextStoryblok {
  header?: string;
  subheader?: string;
  bodytext?: string;
  class?: "" | "narrow";
  _uid: string;
  component: "simpletext";
  [k: string]: any;
}

export interface SnippetStoryblok {
  title?: string;
  language: string;
  code?: string;
  class?: "" | "narrow";
  _uid: string;
  component: "snippet";
  [k: string]: any;
}
