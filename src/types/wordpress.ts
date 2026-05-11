/**
 * WordPress REST API type definitions for blog posts
 */

export interface WordPressFeaturedImage {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  comment_status: string;
  ping_status: string;
  description: string;
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details?: {
    width: number;
    height: number;
    file: string;
    image_meta: object;
  };
  source_url: string;
}

export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: object;
  categories: number[];
  tags: number[];
  class_list: string[];
  _embedded?: {
    "wp:featuredmedia"?: WordPressFeaturedImage[];
  };
}

export interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  link: string;
  date: string;
  featured_image?: string;
  alt_text?: string;
}
