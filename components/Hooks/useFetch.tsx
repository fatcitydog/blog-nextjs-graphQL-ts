import { useQuery } from "@apollo/client";

export const useFetch = (gql: any) => {
  return useQuery(gql);
};
