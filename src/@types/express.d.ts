declare namespace Express {
  export interface Request {
    user: {
      id: string;
    },
    movie: {
      id: string;
    }
  }
}
