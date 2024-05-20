import { default as React } from 'react';
import { NoteProps } from './Components/Notes';

interface Cue {
    direction: string;
    snapToLines: boolean;
    linePosition: string;
    lineAlign: string;
    textPosition: string;
    positionAlign: string;
    size: number;
    alignment: string;
    id: string;
    startTime: number;
    endTime: number;
    pauseOnExit: boolean;
    text: string;
    tree: {
        children: {
            type: string;
            value: string;
        }[];
    };
}
export declare function dispSeconds(seconds: number): string;
export declare const PlayerContext: React.Context<{
    setSetTime: (time: number) => void;
    setTime: number;
    curTime: number;
    setCurTime: (time: number) => void;
    maxTime: number;
    setMaxTime: (time: number) => void;
    curAnnotation: string;
    setCurAnnotation: (note_id: string) => void;
    annotations: NoteProps[];
    addAnnotation: (props: Omit<NoteProps, 'note_id'>) => void;
    editAnnotation: (props: Partial<NoteProps> & {
        note_id: string;
    }) => void;
    deleteAnnotation: (note_id: string) => void;
    playerState: "uninit" | "init" | "ready";
    setPlayerState: (state: 'uninit' | 'init' | 'ready') => void;
    vttContent: Cue[];
    curCue: string;
    setCurCue: (id: string) => void;
}>;
declare function App(): import("react/jsx-runtime").JSX.Element;
export default App;
