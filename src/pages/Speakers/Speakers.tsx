import SpeakersList from "./components/SpeakersList";
import SpeakersToolbar from "./components/SpeakersToolbar";
import { SpeakerFilterProvider } from "./contexts/SpeakerFilterContext";

const Speakers = (props: any) => {
    
    return (
        <SpeakerFilterProvider startingShowSessions={false}>
            <SpeakersToolbar />
            <SpeakersList />
        </SpeakerFilterProvider>
    );
}

export default Speakers;