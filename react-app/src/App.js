import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'


const Modal = ({open, setOpen}) => {
    return (
        <div id="myModal" className={`modal animated ${open ? 'show' : ''}`}>
            <div className="modal-content">
                <span onClick={() => setOpen(false)} className="close">&times;</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque earum eos, fugit nihil
                    possimus provident quisquam repellat ullam. Alias, amet, aspernatur aut corporis esse eum
                    facilis laudantium libero nam non possimus quam quasi quia, quis sint. Ad animi autem dicta
                    ex optio perspiciatis qui, quibusdam quis recusandae reiciendis sit temporibus.</p>
                <img src="https://media1.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif" alt=""/>
            </div>

        </div>
    );
};

const App = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='App'>
            <button onClick={() => setOpen(true)} className='open_modal_btn'>Open modal-window</button>
            <Modal open = {open} setOpen={setOpen} />
        </div>
    );
}

export default App;
