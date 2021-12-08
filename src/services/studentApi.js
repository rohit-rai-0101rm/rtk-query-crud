import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  tagTypes:["Student"],
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "students",
      //transformResponse: (res) => res.reverse(),
      providesTags: ["Student"],
    }),
    getStudentById: builder.query({
      query: (id) => `students/id=${id}`,
    }),
    addStudent: builder.mutation({
      query: (student) => ({
        url: "students",
        method: "POST",
        body: student,
      }),
      invalidatesTags: ["Student"],

    }),
    updateStudent: builder.mutation({
      query: ({ id, ...student }) => ({
        url: `students/${id}`,
        method: "PUT",
        body: student,
      }),
      invalidatesTags: ["Student"],
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Student"],
    }),
  }),
});
export const { useGetStudentsQuery, useGetStudentByIdQuery,useAddStudentMutation,useUpdateStudentMutation,
  useDeleteStudentMutation } = studentsApi;
