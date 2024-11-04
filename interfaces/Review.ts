export interface Review {
  slug: string;
  data: ReviewMetadata;
  content: string;
}

export interface ReviewMetadata {
  title: string;
  month: string;
  author: string[];
  genre: string[];
  summary: string;
  pageCount: number;
  rating: number;
}
