export interface IBlog {
  title: string;
  content: string;
  image: string;
  publishedDate: Date;
  author: {
    name: string;
    image: string;
  };
}
