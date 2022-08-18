import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Villager } from '../common/types';

export interface VillagersState {
    list: Record<string, Villager>
    full: Boolean;
}

//todo: load from localstorage
const initialState: VillagersState = {
    list: {},
    full: false,
};

// todo unit testing
export const villagersSlice = createSlice({
    name: 'villagers',
    initialState,
    reducers: {
        add: (state, { payload }) => {
            let villager = payload;
            state.list[villager.id] = villager;
            console.log(`The list has ${Object.keys(state.list).length} entries.`);
            if(Object.keys(state.list).length >= 10) {
                state.full = true;
            }
        },
        remove: (state, { payload }) => {
            let id = payload;
            delete state.list[id];
            state.full = false;
        }
    }
});

export const { add, remove } = villagersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => Object.keys(state.villagers.list).length;
export const getList = (state: RootState) => state.villagers.list;

export default villagersSlice.reducer;
