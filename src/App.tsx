import React from 'react';
import './App.css';
import { Villager } from './common/types';

import { useAppSelector, useAppDispatch } from './app/hooks';
import {
    add,
    remove,
    selectCount,
    getList,
    getHobbies
} from './store/villagers';

import villagersJSON from './data/villagers.json';

import { PieChart, Pie, Cell } from 'recharts';



const villagers: Villager[] = JSON.parse(JSON.stringify(villagersJSON));

function App() {
    const count = useAppSelector(selectCount);
    const list = useAppSelector(getList);
    const hobbies = useAppSelector(getHobbies);

    const dispatch = useAppDispatch();
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
        <div className="App">
            <div className='w-100'>
                <PieChart width={730} height={250}>
                    <Pie data={hobbies} 
                    dataKey="count" 
                    nameKey="name" 
                    label={({name, value}) => `${name}: ${value}`} 
                    innerRadius={50} 
                    outerRadius={80} 
                    paddingAngle={5}
                    labelLine={false} >
                        {hobbies.map((hobby, i) => (
                            <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <ol>
                {
                    Object.keys(list).map((k, i) => {
                        let villager = list[k];
                        return <li key={i}>
                            {villager.name}
                            <button
                                onClick={() => dispatch(remove(villager.id))}
                            >x</button>
                        </li>
                    })
                }
            </ol>
            <ul>
                {
                    villagers.map((villager, i) => {
                        return <li key={i}>
                            {villager.name}
                            <button
                                onClick={() => dispatch(add(villager))}
                                disabled={count >= 10 || list[villager.id] != null}
                            >add</button>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default App;
