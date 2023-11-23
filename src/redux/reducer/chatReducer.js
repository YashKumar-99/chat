import { createSlice } from "@reduxjs/toolkit";

import moment from 'moment';

const initialState = {
    data: []
}

const ChatAppSlice = createSlice({
    name: 'chat',

    initialState,

    reducers: {

        AddMessage: (state, action) => {

            console.log('entered')

            const { text, image, user,profilePicStatus } = action.payload;

            const timestamp = moment().format();

            if (text && image) {
                state.data = [...state.data, { title: text, image: image, user: user, timestamp,profilePicStatus }]

            } else if (text) {
                state.data = [...state.data, { title: text, user: user, timestamp,profilePicStatus }]

            }
            else if (image) {
                state.data = [...state.data, { image: image, user: user, timestamp ,profilePicStatus}]

            }

        },

        

    }


});



export const { AddMessage } = ChatAppSlice.actions;

export default ChatAppSlice.reducer;