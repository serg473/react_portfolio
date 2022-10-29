import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='App'>
            <button onClick={() => setOpen(true)} className='open_modal_btn'>Open modal-window</button>
            {
                open && (
                    <div className='overlay'>
                        <div className="modal">
                            <div onClick={() => setOpen(false)} className='close'><img
                                src="https://img.icons8.com/ios/344/cancel.png" alt=""/></div>
                            <div><img
                                src="https://media2.giphy.com/media/hUL5gdlvDgtRbOElZS/giphy.gif?cid=6c09b952ouig7kj7que9462ddztke6n5gyavk3bnruvxu2nx&rid=giphy.gif&ct=s"
                                alt=""/></div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default App;
