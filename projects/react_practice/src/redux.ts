import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export interface StateType {
	count: number;
}

const InitialState: StateType = { count: 0 };

const rootSlice = createSlice({
	name: "counter",
	initialState: InitialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		incrementByValue: (state, actions: PayloadAction<number>) => {
			state.count += actions.payload;
		},
	},
});

export const { increment, decrement, incrementByValue } = rootSlice.actions;

export const store = configureStore({ reducer: rootSlice.reducer });
