import { createContext } from "react";

const SpeakerContext = createContext({} as any);

const SpeakerProvider = (props: any) => {
    const { children, speaker, updateRecord, insertRecord, deleteRecord } = props;
    return (
        <SpeakerContext.Provider value={{ speaker, updateRecord, insertRecord, deleteRecord }}>
            {children}
        </SpeakerContext.Provider>
    );
}

export { SpeakerContext, SpeakerProvider };