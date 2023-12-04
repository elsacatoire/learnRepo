/* import { createSlice, configureStore } from '@reduxjs/toolkit'
import { AppState } from '@/types'

const initialState: AppState = {
    title: 'initial title',
    descirption: "initial description"
};

const valueSlice = createSlice({
    name: 'appName',
    initialState,
    reducers: {
        updateName: (state: any, inputName) => {
            state.title = inputName
        },
        updateDescritpion: (state: any, inputDescription) => {
            state.descirption = inputDescription
        },
    }
})


export const { updateName, updateDescritpion } = valueSlice.actions

export const store = configureStore({
    reducer: valueSlice.reducer
})

 */

import { configureStore } from '@reduxjs/toolkit'
