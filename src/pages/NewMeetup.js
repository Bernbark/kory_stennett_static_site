import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        // adding /meetups makes a meetups database in firebase if one doesn't exist
        fetch(
            'https://kory-stennett-front-end-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => { 
            // navigate to home page once the submission succeeds
            navigate("../", { replace: true });
        });
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
}

export default NewMeetupPage;