import { useState } from "react";
import { data } from "../../speaker-data";
import Speaker from "./Speaker";

const SpeakersList = (props: any) => {
    const { showSessions } = props;
    const [speakersData, setSpeakersData] = useState(data);

    const onFavoriteToggle = (speakerId: string) => {
        const speakersRecPrevious = speakersData.find((rec) => rec.id === speakerId);
        const speakersRecUpdated = {
            ...speakersRecPrevious,
            favorite: !speakersRecPrevious?.favorite
        };
        const speakersDataNew: any = speakersData.map((rec) => 
            rec.id === speakerId ? speakersRecUpdated : rec
        );
        setSpeakersData(speakersDataNew);
    };

    return (
        <div className="container speakers-list">
            <div className="row">
                {
                    speakersData.map(
                        (speaker: any) =>(
                            <Speaker 
                                key={speaker.id} 
                                speaker={speaker} 
                                showSessions={showSessions}
                                onFavoriteToggle={() => {onFavoriteToggle(speaker.id)}}
                            />
                        )
                    )
                }
            </div>
        </div>
    );
}

export default SpeakersList;