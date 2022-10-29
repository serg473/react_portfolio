import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
    const [count, setCount] = React.useState(0);
    const onclickPlus = () =>{
        setCount(count + -1);//increment
    }
    const onClickMinus = () =>{
        setCount(count - 1);
    }
    return (
        <div className="App">
            <div>
                <h2>Счетчик:</h2>
                <h1>{count}</h1>
                <div className='block_button'>
                    <button onClick = {onClickMinus} className='minus'>- Minus</button>
                    <button onClick={onclickPlus} className='plus'>+ Plus</button>
                </div>
            </div>
        </div>
    );
}

export default App;
