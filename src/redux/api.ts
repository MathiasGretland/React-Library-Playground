import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GithubRepo } from "./@types/GtihubRepo";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: (builder) => ({
    // Endpoint to get repository details by owner and repo name
    getRepoDetails: builder.query<GithubRepo, { owner: string; repo: string }>({
      query: ({ owner, repo }) => `repos/${owner}/${repo}`,
    }),
  }),
});

// Export hooks
export const { useGetRepoDetailsQuery } = githubApi;
