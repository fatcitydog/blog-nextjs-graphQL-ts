export interface postType {
  id: string;
  title: string;
  url: string;
  description: string;
  author: string;
  createdAt: number;
  updatedAt: number;
  score: number;
  text: string;
  type: string;
}

export interface OwnPostType {
  title: string;
  url: string;
  description: string;
  author: string;
  createdAt: number;
}

export interface handleFunction {
  handleSavePost: Function;
}
