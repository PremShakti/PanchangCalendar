import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include",
  }),

  endpoints: (builder) => ({
    // Signup API call
    signup: builder.mutation<any, any>({
      query: (newUser) => ({
        url: "/auth/signup",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
  refetchOnMountOrArgChange: true,
});

export const { useSignupMutation } = authApi;
