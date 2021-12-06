import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const studentsApi = createApi({
    reducerPath: "studentsApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3001/",
    }),
    endpoints: (builder) => ({
        getStudents: builder.query({
          query: () => "students",
          transformResponse: (res) => res.reverse(),
          providesTags: ["Student"],
        }),
         getStudentById: builder.query({
       query: (id) => `students/id=${id}`,
     }),
})
})
export const{useGetStudentsQuery,useLazyGetStudentByIdQuery}=studentsApi