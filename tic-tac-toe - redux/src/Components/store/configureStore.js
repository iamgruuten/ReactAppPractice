import { configureStore } from "@reduxjs/toolkit";
import entitiesReducer from "./entities";

//For future implementation, which requires more features
export default configureStore({
  entities: entitiesReducer
});
