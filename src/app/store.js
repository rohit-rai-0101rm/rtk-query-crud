import { configureStore } from "@reduxjs/toolkit";
import { studentsApi } from "../services/studentApi";
console.log(studentsApi)
const store = configureStore({
  reducer: {
    [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (gDM) => gDM().concat(studentsApi.middleware),

});
export default store;
