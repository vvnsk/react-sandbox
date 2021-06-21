import { createContext } from "react";

const SpeakerContext = createContext({} as any);

const SpeakerProvider = (props: any) => {
    const { children, speaker, updateRecord } = props;
    return (
        <SpeakerContext.Provider value={{ speaker, updateRecord }}>
            {children}
        </SpeakerContext.Provider>
    );
}

export { SpeakerContext, SpeakerProvider };