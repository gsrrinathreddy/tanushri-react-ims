import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/Icecream/IcecreamSlice';
import GiftReducer from '../features/Gifts/GiftSlice';
import FlowerReducer from '../features/flowers/FlowerSlice';
const store=configureStore({
    reducer:{
       
        cake:cakeReducer,
        icecream:icecreamReducer,
        gift:GiftReducer,
        flower:FlowerReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
})
export default store;