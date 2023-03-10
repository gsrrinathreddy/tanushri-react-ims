import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/Icecream/IcecreamSlice';
import GiftReducer from '../features/Gifts/GiftSlice';
import FlowerReducer from '../features/flowers/FlowerSlice';
import cartReducer from '../features/cart/cartSlice';
const store=configureStore({
    reducer:{
       
        cake:cakeReducer,
        icecream:icecreamReducer,
        gift:GiftReducer,
        flower:FlowerReducer,
        cart:cartReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
})
export default store;