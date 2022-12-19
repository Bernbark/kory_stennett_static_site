import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import Checkbox from './Checkbox';

function Todo(props) {
    const [checkedOne, setChecked] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [checkedThree, setCheckedThree] = useState(false);

    const handleChangeOne = () => {
        setChecked(!checkedOne);
    };

    const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo)
    }
    const handleChangeThree = () => {
        setCheckedThree(!checkedThree)
    }
    //Getting ready to remember the current state of the webapp (is the modal open/closed etc.)
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteThis() {
        setModalIsOpen(true);
    }
    function closeModalHandler() {
        setModalIsOpen(false);
    }
    /*{ modalIsOpen ? <Modal /> : null }*/
    return(
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <Checkbox
                    label="1"
                    value={checkedOne}
                    onChange={handleChangeOne}
                />
                <Checkbox
                    label="2"
                    value={checkedTwo}
                    onChange={handleChangeTwo}
                />
                <Checkbox
                    label="3"
                    value={checkedThree}
                    onChange={handleChangeThree}
                />
                <button className="btn" onClick={deleteThis}>Delete</button>
            </div>
            
            {modalIsOpen && <Modal onClick={closeModalHandler} />}
            {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
    );
}

export default Todo;