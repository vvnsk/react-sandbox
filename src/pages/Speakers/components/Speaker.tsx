import { useState, useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

const Session = (props: any) => {
    const { title, room } = props;
    return (
        <span className="session w-100">
            {title}{" "}
            <strong>Room: {room.name}</strong>
        </span>
    )
};

const Sessions = (props : any) => {
    const { sessions } = props;
    const { eventYear } = useContext(SpeakerFilterContext);
    return (
        <div className="sessionBox card h-250">
            {sessions
                .filter((session: any) => 
                    session.eventYear === eventYear
                )
                .map((session: any) => (
                    <div className="session w-100" key={session.id}>
                        <Session {...session} />
                    </div>
                ))
            }
        </div>
    )
};

const SpeakerImage = (props: any) => {
    const {first, last} = props;
    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                className="contain-fit"
                src="https://via.placeholder.com/300"
                width="300"
                alt={`${first} ${last}`}
            />
        </div>
    );
}

const SpeakerFavorite = (props: any) => {
    const {favorite, onFavoriteToggle} = props;
    const [inTransition, setInTransition] = useState(false);

    const doneUpdating = () => {
        console.log("Done yaay!");
        setInTransition(false);
    }

    return (
        <div className="action padB1">
            <span
                onClick={() => {
                    setInTransition(true);
                    onFavoriteToggle(doneUpdating);
                }}
            >
                <i className={
                    favorite === true
                        ? "fa fa-star orange"
                        : "fa fa-star-o orange"
                }
                />{" "}
                Favorite{" "}
                {
                    inTransition 
                        ? <span className="fas fa-circle-notch fa-spin"></span> 
                        : null
                }
            </span>
        </div>
    );
}

const SpeakerDemographics = (props: any) => {
    const {
        bio,
        first,
        last,
        twitterHandle,
        company,
        favorite,
        onFavoriteToggle
    } = props;
    return (
        <div className="speaker-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                {first} {last}
                </h3>
            </div>
            <SpeakerFavorite 
                favorite={favorite} 
                onFavoriteToggle={onFavoriteToggle}
            />
            <div>
                <p className="card-description">
                    {bio}
                </p>
                <div className="social d-flex flex-row mt-4">
                    <div className="company">
                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className="twitter">
                        <h5>Twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Speaker = (props: any) => {
    const {speaker, onFavoriteToggle} = props;
    const {showSessions} = useContext(SpeakerFilterContext);
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
                <SpeakerImage first={speaker.first} last={speaker.last} />
                <SpeakerDemographics {...speaker} onFavoriteToggle={onFavoriteToggle}/>
            </div>
            {showSessions 
                ? <Sessions sessions={speaker.sessions} />
                : null
            }
        </div>
    );
}

export default Speaker;