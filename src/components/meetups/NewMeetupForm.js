/**import { useRef } from 'react';


import Card from '../UI/Card';
import css from './NewFormMeetups.module.css';

function NewMeetupForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){
        // Stops the browser from refreshing during submission, gives us 
        // control over what happens on submission
        event.preventDefault();
        
        // .current.value is where the current text of the input field is    
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription   
        };

        props.onAddMeetup(meetupData);
    
    }
    return (
        <Card>
            <form className={css.form} onSubmit={submitHandler}>
                <div className={css.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id ="title" ref={titleInputRef}/>
                </div>
                <div className={css.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id ="image" ref={imageInputRef}/>
                </div>
                <div className={css.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" required id ="address" ref={addressInputRef}/>
                </div>
                <div className={css.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id="description" required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={css.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;*/