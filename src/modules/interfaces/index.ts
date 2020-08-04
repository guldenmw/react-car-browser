export interface IFilters {
  manufacturer: string;
  body: string;
  priceFrom: string;
  priceTo: string;
}
export interface IVehicle {
  id: string;
  manufacturer: string;
  model: string;
  price: number;
  body: string;
  wiki: string;
  img: string;
  summary?: string;
}

export interface IVehiclesResponse {
  data: IVehicle[];
  message: string;
}

export interface IWikiResponse {
  type: string;
  title: string;
  displaytitle: string;
  namespace: {
    id: number;
    text: string;
  },
  wikibase_item: string;
  titles: {
    canonical: string;
    normalized: string;
    display: string;
  },
  pageid: number;
  thumbnail: {
    source: string;
    width: number;
    height: number;
  },
  originalimage: {
    source: string;
    width: number;
    height: number;
  },
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  content_urls: {
    desktop: {
      page: string;
      revisions: string;
      edit: string;
      talk: string;
    },
    mobile: {
      page: string;
      revisions: string;
      edit: string;
      talk: string;
    }
  },
  api_urls: {
    summary: string;
    metadata: string;
    references: string;
    media: string;
    edit_html: string;
    talk_page_html: string;
  },
  extract: string;
  extract_html: string;
}