import * as React from "react";

declare class Gallery extends React.Component<Props> {}

declare type ImageOptions = {
  src:               string;
  height:            number;
  width:             number;
  thumbnail:         string;
  thumbnailWidth:    number;
  thumbnailHeight:   number;
  thumbnailCaption?: number;
  tags?:             string[];
  isSelected?:       boolean;
  caption?:          string;
  srcSet?:           string[];
  customOverlay?:    any;
  orientation?:      number;
};

declare type Props = {
  images:                ImageOptions[];
  id?:                   string;
  enableImageSelection?: boolean;
  onSelectImage?:        () => void;
  rowHeight?:            number;
  maxRows?:              number;
  margin?:               number;
  enableLightbox?:       boolean;
  onClickThumbnail?:     () => void;
  lightboxWillOpen?:     () => void;
  lightboxWillClose?:    () => void;
  tagStyle?:             object;
  tileViewportStyle?:    () => void;
  thumbnailStyle?:       () => void;
}

export = Gallery;







export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    image2?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    categories: string[];
    author: string;
    tags: string[];
    date?: string;
    draft?: boolean;
  };
  slug?: string;
  content?: string;
};

export type Author = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    social: [
      {
        name: string;
        icon: string;
        link: string;
      },
    ];
  };
  content?: string;
  slug?: string;
};

export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Testimonial = {
  name: string;
  designation: string;
  avatar: string;
  content: string;
};

export type Call_to_action = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};