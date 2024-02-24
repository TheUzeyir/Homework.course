import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICart {
  items: any[]
}

const initialState: ICart = {
  items: [], 
}

export const cardSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
        state.items.push(action.payload);
      },
  },
})

export const {addItem} = cardSlice.actions
export default cardSlice.reducer