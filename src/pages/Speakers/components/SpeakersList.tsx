import { useContext } from "react";
import ReactPlaceholder from "react-placeholder";
import { data } from "../../../speaker-data";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import Speaker from "./Speaker";
import SpeakerAdd from "./SpeakerAdd";

const SpeakersList = (props: any) => {
    const {
        data: speakersData,
        requestStatus,
        error,
        updateRecord,
        insertRecord,
        deleteRecord
      } = useRequestDelay(2000, data);
      const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

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
                <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
                <div className="row">
                    {
                        speakersData.filter((speaker: any) => (
                            speaker.first.toLowerCase().includes(searchQuery) ||
                            speaker.last.toLowerCase().includes(searchQuery)
                        ))
                        .filter((speaker: any) => (
                            speaker.sessions.find((session: any) => (
                                session.eventYear === eventYear
                            ))
                        ))
                        .map((speaker: any) => 
                            <Speaker
                                key={speaker.id}
                                speaker={speaker}
                                updateRecord={updateRecord}
                                insertRecord={insertRecord}
                                deleteRecord={deleteRecord}
                            />
                        )
                    }
                </div>
            </ReactPlaceholder>
        </div>
    );
}

export default SpeakersList;