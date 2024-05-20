export interface NoteListProps {
    annotations: NoteProps[];
}
export declare function NoteList(props: NoteListProps): import("react/jsx-runtime").JSX.Element;
export interface NoteProps {
    note: string;
    start: number;
    end?: number;
    spawner?: boolean;
    focus?: boolean;
    note_id: string;
}
