import { createStore, applyMiddleware, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import characters from "./characters/reducer";

const combinedReducer = combineReducers({
  characters,
});

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const storeMaker = () => {
  const { persistStore, persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;
  const persistConfig = {
    key: "nextjs",
    whitelist: ["characters"],
    storage: storage,
  };

  const persistedReducer = persistReducer(persistConfig, combinedReducer);

  const store = createStore(
    persistedReducer,
    bindMiddleware([thunkMiddleware])
  );

  store.__persistor = persistStore(store);

  return store;
};

export const wrapper = createWrapper(storeMaker);
