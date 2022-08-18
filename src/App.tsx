import React from 'react';
import './App.css';
import { Villager } from './common/types';

import { useAppSelector, useAppDispatch } from './app/hooks';
import {
    add,
    remove,
    selectCount,
    getList
} from './store/villagers';

import villagersJSON from './data/villagers.json';


const villagers: Villager[] = JSON.parse(JSON.stringify(villagersJSON));

function App() {
    const count = useAppSelector(selectCount);
    const list = useAppSelector(getList);
    const dispatch = useAppDispatch();
    return (
        <div className="App">
        <ul>
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
        </ul>
            <hr/>
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
