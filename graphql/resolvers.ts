import { getMovies } from "./db";

type props = {
  limit: number;
  rating: any;
};

const resolvers = {
  Query: {
    movies: (_: any, { limit, rating }: props) => getMovies(limit, rating),
  },
};

export default resolvers;
