import { configureStore } from '@reduxjs/toolkit'
import chat from './reducer/chatReducer';
const Store = configureStore({
    reducer: {
        chat: chat
    }
})
export default Store;