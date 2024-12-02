import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

const persistConfigCounter = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['key1', 'key2'], // Things to persist
    // blacklist: ['key3', 'key4'], // Things to not persist
  };
  const persistConfigUser = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['key1', 'key2'], // Things to persist
    // blacklist: ['key3', 'key4'], // Things to not persist
  };
// const persistConfigOther = {
//     key: 'root',
//     storage: AsyncStorage,
//     // whitelist: ['key1', 'key2'], // Things to persist
//     // blacklist: ['key3', 'key4'], // Things to not persist
// };

const persistedReducerCounter = persistReducer(persistConfigCounter, counterReducer);
const persistedReducerUser = persistReducer(persistConfigUser, userReducer);
// const persistedReducerOther = persistReducer(persistConfigOther, otherReducer);

  const allReducers = combineReducers({
    counter: persistedReducerCounter,
    user: persistedReducerUser,
    // otherStore:: persistedReducerOther,
  })

  export const store = configureStore({
    reducer: allReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }), // Check that If I want to save infomation of Profile pic or some file.
  });


  export const persistor = persistStore(store);