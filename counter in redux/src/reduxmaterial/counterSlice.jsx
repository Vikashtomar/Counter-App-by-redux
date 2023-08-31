import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 5 },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decerement: state => {
            state.value -= 1;
        }
    }
});

export const { increment, decerement } = counterSlice.actions;
export default counterSlice.reducer;
