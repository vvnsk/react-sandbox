import ReactPlaceholder from "react-placeholder";
import { data } from "../../../speaker-data";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import Speaker from "./Speaker";

const SpeakersList = (props: any) => {
    const {
        data: speakersData,
        requestStatus,
        error,
        updateRecord,
      } = useRequestDelay(2000, data);
    const { showSessions } = props;

    if(requestStatus === REQUEST_STATUS.FAILURE) {
        return (
            <div className="text-danger">
                ERROR: <b>Loading Speaker Data Failed {error}</b>
            </div>
        );
    }

    return (
        <div className="container speakers-list">
            <ReactPlaceholder 
                type="media"
                rows={15}
                className="speakerslist-placeholder"
                ready={requestStatus === REQUEST_STATUS.SUCCESS}
            >
                <div className="row">
                    {
                        speakersData.map(
                            (speaker: any) =>(
                                <Speaker 
                                    key={speaker.id} 
                                    speaker={speaker} 
                                    showSessions={showSessions}
                                    onFavoriteToggle={(doneUpdating: any) => {
                                        updateRecord({
                                            ...speaker,
                                            favorite: !speaker.favorite,
                                        }, doneUpdating);
                                    }}
                                />
                            )
                        )
                    }
                </div>
            </ReactPlaceholder>
        </div>
    );
}

export default SpeakersList;