import {configureStore} from '@reduxjs/toolkit';
import videoAppSliceReducer from './videoAppSlice';
const store = configureStore({
    reducer:{
        videoApp: videoAppSliceReducer,
    }
})

export default store;