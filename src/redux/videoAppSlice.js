import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    toggleMenu: false,
    selectedCategory: 'web development'
}


const videoAppSlice = createSlice({
    name: 'videoApp',
    initialState,
    reducers: {
        toggleMenuHandler(state,action){
            state.toggleMenu = action.payload;
        },
        selectedCategoryHandler(state,action){
            state.selectedCategory = action.payload;
        }
    }
})

export const {toggleMenuHandler,selectedCategoryHandler} = videoAppSlice.actions;

export default videoAppSlice.reducer;