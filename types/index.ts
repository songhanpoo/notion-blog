import { ITitle } from './index';
export interface ICreatedBy {
  object: string;
  id: string;
}

export interface ILastEditedBy {
  object: string;
  id: string;
}

export interface IParent {
  type: string;
  database_id: string;
}

export interface ILink {
  url: string;
}
// Types for rich_text
export interface IRichText {
  type: string;
  text: IText;
  annotations: IAnnotations;
  plain_text: string;
  href: string;
}

export interface IText {
    content: string;
    link: ILink;
}

export interface IAnnotations {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
}

// Type for multi_select
export interface IMultiSelect {
    id: string;
    name: string;
    color: string;
}

export interface ITitle {
  type: string;
  text: IText;
  annotations: IAnnotations;
  plain_text: string;
  href?: any;
}

export interface ITitles {
  titles : ITitle[]
}

export interface IProperties {
  img  : IImg;
  Tags : ITags;
  Brief: IBrief;
  Name : IName;
}

export interface IPost {
    object          : string;
    id              : string;
    created_time    : Date;
    last_edited_time: Date;
    created_by      : ICreatedBy;
    last_edited_by  : ILastEditedBy;
    cover?          : any;
    icon?           : any;
    parent          : IParent;
    archived        : boolean;
    properties      : IProperties;
    url             : string;
}

export interface IPosts {
  posts : IPost[]
}

// Type main objects *
export interface IImg {
  id: string;
  type: string;
  rich_text: IRichText[];
}

// Type main objects *
export interface ITags {
  id: string;
  type: string;
  multi_select: IMultiSelect[];
}

// Type main objects *
export interface IBrief {
  id: string;
  type: string;
  rich_text: IRichText[];
}

// Type main objects *
export interface IName {
  id: string;
  type: string;
  title: ITitle[];
}