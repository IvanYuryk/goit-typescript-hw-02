export interface Image {
    id: string;
    alt_description: string;
    description: string;
    likes: number;
    links: {
      download: string;
    };
    urls: {
      regular: string;
      small: string;
    };
    user: {
      location: string | null;
      name: string | null;
    };
  }
  
  export interface SearchValue {
    query: string;
  }