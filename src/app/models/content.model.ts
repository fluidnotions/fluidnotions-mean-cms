export class ContentItem {
  constructor(public contentType: string, public title: string, public content: string, public featuredImg?: string) { }
}

export class MenuItem extends ContentItem {
  constructor(public url: string,  contentType: string,  title: string,  content: string) { 
      super(contentType, title, content)
  }
}

export class ContentRequest {
  public arguments: {type: "category" | "single"};
  public contentType: string;
}
