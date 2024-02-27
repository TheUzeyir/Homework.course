import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  feedbacks: [],
};

export const cardSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.feedbacks.push({ inputData: action.payload.inputData, textData: action.payload.textData, categoryData: action.payload.categoryData });
    },
    filterFeedBack:(state,action)=>{
      const filterFeedBack=action.payload
      state.feedbacks=state.feedbacks.filter((item)=>item.categoryData==filterFeedBack)
    }
  },
});

export const { setInputValue,filterFeedBack } = cardSlice.actions;
export default cardSlice.reducer;
