import { configureStore } from "@reduxjs/toolkit";
import rootReducre from "./slices";

const store = configureStore({ reducer: { root: rootReducre } });

export default store;
