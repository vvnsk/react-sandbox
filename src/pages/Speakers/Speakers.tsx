import { useState } from "react";
import SpeakersList from "./components/SpeakersList";
import SpeakersToolbar from "./components/SpeakersToolbar";

const Speakers = (props: any) => {
    const [showSessions, setShowSessions] = useState(true);
    
    return (
        <>
            <SpeakersToolbar 
                showSessions={showSessions}
                setShowSessions={setShowSessions}
            />
            <SpeakersList 
                showSessions={showSessions}
            />
        </>
    );
}

export default Speakers;