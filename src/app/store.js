import { configureStore } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";

import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/iceCreamSlice";
import userReducer from "../features/user/userSlice";
// import logger from "redux-logger".createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
