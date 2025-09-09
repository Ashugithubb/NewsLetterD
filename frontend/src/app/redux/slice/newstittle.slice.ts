import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface NewsState {
    title: string
    description: string
}

const initialState = {
    title: '',
    description: ''

} satisfies NewsState as NewsState

const newsSlice = createSlice({
    name: 'newsTitleDescription',
    initialState,
    reducers: {

        setTitle(state, action: PayloadAction<NewsState>) {
            state.title = action.payload.title
            state.description = action.payload.description
        },
    },
})

export const { setTitle } = newsSlice.actions
export default newsSlice.reducer