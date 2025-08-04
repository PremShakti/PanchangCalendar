import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/actions/reducers";
import monthNavigationReducer from "@/store/actions/monthNavigationSlice";

import { authApi } from "./api/auth";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      monthNavigation: monthNavigationReducer,

      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["setModuleFile", "setModuleDetails"],
          ignoredPaths: ["cart.moduleFile", "cart.moduleDetails"],
        },
      }).concat(authApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
