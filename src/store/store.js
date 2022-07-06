import {configureStore} from '@reduxjs/toolkit';

import mentorsReducer from './reducers/mentors/mentors';

const store = configureStore({
    reducer: {
        mentors: mentorsReducer
    }
})


export default store;