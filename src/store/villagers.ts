import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Villager, Hobby } from '../common/types';


export class VillagersState {
    list: Record<string, Villager> = {};
    hobbies: ChartData[] = Object.keys(Hobby).filter((v) => isNaN(parseInt(v))).map((h: string) => new ChartData(h));
    full: Boolean = false;
}; 

class ChartData {
    name: string;
    count: number = 0;

    constructor(label: string){
        this.name = label;
    }
}

//todo: load from localstorage
const initialState: VillagersState = new VillagersState();

// todo unit testing
export const villagersSlice = createSlice({
    name: 'villagers',
    initialState,
    reducers: {
        add: (state, { payload }) => {
            let villager = new Villager(payload);
            state.list[villager.id] = villager;

            let hobby = Hobby[villager.hobby];
            state.hobbies[hobby].count += 1;

            if(Object.keys(state.list).length >= 10) {
                state.full = true;
            }

            return state;
        },
        remove: (state, { payload }) => {
            let id = payload;
            let hobby = Hobby[state.list[id].hobby];
            
            state.hobbies[hobby].count -= 5;
            delete state.list[id];
            state.full = false;

            return state;
        }
    }
});

export const { add, remove } = villagersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => Object.keys(state.villagers.list).length;
export const getList = (state: RootState) => state.villagers.list;
export const getHobbies = (state: RootState) => state.villagers.hobbies.filter(h => h.count > 0);

export default villagersSlice.reducer;
