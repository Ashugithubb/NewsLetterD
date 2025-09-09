import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CradState {
    id: number
}

const initialState = {
    id: -1,
}

const cardSlice = createSlice({
    name: 'clickedCardState',
    initialState,
    reducers: {
        setCardId(state, action: PayloadAction<number>) {
            state.id = action.payload
        },
    },
})

export const { setCardId } = cardSlice.actions
export default cardSlice.reducer