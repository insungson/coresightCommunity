import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

// https://react-native-async-storage.github.io/async-storage/docs/usage
//AsyncStorage 사용법이 위와 같이 바뀌었으므로 위와 같이 사용해야 한다.
// https://medium.com/humanscape-tech/redux-persist-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-2077c9e566d9
// 위의 링크에서 보면 ..토큰만 저장하는게 좋다.. (그래서 니코도 그냥 id만 가져오나보다...)
// https://github.com/rt2zz/redux-persist  여기를 보면 세팅방법이 나와있다.

// 아래의 redux 세팅은 잘못되었다...  AsyncStorage 를 사용하려면... 따로 구현을 하거나
// 아래와 같이 redux-persist에 있는 Storage 를 사용해야 한다.
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//아래의 store 는 reduxpersist
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const tempStore = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
export default store;
