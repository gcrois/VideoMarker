import React from "react"
import TextareaAutosize from "react-textarea-autosize"
import { dispSeconds, PlayerContext } from "../App"

export interface NoteListProps {
    annotations: NoteProps[]
}

export function NoteList(props: NoteListProps) {
    const { curTime, addAnnotation } = React.useContext(PlayerContext)

    const formRef = React.useRef<HTMLFormElement>(null)

    return (
    <div className='notes-col'>
        <div className='notes-list'>
            {[...props.annotations, { note: '', start: curTime, note_id: 'spawner', spawner: true }]
            .sort((a, b) => a.start - b.start)
            .map((note, i) => {
                return (
                    <Note key={i} {...note} />
                )
            })}
        </div>
        <form className="event-select" onSubmit={(e) => e.preventDefault()} ref={formRef}>
            <div className="event-modifiers">
                <div><input
                    type="radio"
                    id="intro"
                    name="tool"
                    value="intro"
                />Intro</div>

                <div><input
                    type="radio"
                    id="deckflow"
                    name="tool"
                    value="deckflow"
                />DeckFlow</div>

                <div><input
                    type="radio"
                    id="chatflow"
                    name="tool"
                    value="chatflow"
                />ChatFlow</div>
            </div>

            <div className="event-type">
                {/* hard task 1 */}
                <div><input
                    type="radio"
                    name="event"
                    value="hard-task"
                    id="hard-task"
                />Hard Task </div>

                {/* soft task */}
                <div><input
                    type="radio"
                    name="event"
                    value="soft-task"
                    id="soft-task"
                />Soft Task</div>

                {/* n/a */}
                <div><input
                    type="radio"
                    name="event"
                    value="na"
                    id="na"
                />N/A</div>
            </div>

            <div className="event-type">
                <div><input
                    type="radio"
                    id="duringtask"
                    name="notetype"
                    value="duringtask"
                />During Task</div>

                <div><input
                    type="radio"
                    id="interview"
                    name="notetype"
                    value="interview"
                />Interview</div>
            </div>

            <div className="event-modifiers">
                <div><input
                    type="radio"
                    name="condition"
                    value="a"
                    id="a"
                />A</div>
                <div><input
                    type="radio"
                    name="condition"
                    value="b"
                    id="b"
                />B</div>
                <div><input
                    type="radio"
                    name="condition"
                    value="na"
                    id="na"
                />N/A</div>
            </div>

            <div className="event-boundary">
                <button
                    onClick={() => {
                        addAnnotation({ note: JSON.stringify({
                            event: formRef.current?.event.value,
                            type: formRef.current?.notetype.value,
                            tool: formRef.current?.tool.value,
                            condition: formRef.current?.condition.value,
                            boundary: 'start'
                        }), start: curTime, focus: true })
                    }}
                >
                    Start
                </button>
                <button
                    onClick={() => {
                        addAnnotation({ note: JSON.stringify({
                            event: formRef.current?.event.value,
                            type: formRef.current?.notetype.value,
                            tool: formRef.current?.tool.value,
                            condition: formRef.current?.condition.value,
                            boundary: 'end'
                        }), start: curTime, focus: true })
                    }}
                >
                    End
                </button>
            </div>

            <div className="event-boundary">
                {/* how many images? */}
                <input
                    type="number"
                    id="nimages"
                    name="nimages"
                    placeholder="Images"
                />

                <button
                    onClick={() => {
                        addAnnotation({ note: JSON.stringify({
                            event: 'generated_images',
                            num_images: formRef.current?.nimages.value || 0
                        }), start: curTime, focus: true })
                    }}
                >
                    Generated Images
                </button>
                <div className="divider"/>
                <button
                    onClick={() => {
                        addAnnotation({ note: JSON.stringify({
                            event: 'goal_card',
                        }), start: curTime, focus: true })
                    }}
                >
                    Used Goal Card
                </button>
                <div className="divider"/>
                <button
                    onClick={() => {
                        addAnnotation({ note: JSON.stringify({
                            event: 'cluster',
                        }), start: curTime, focus: true })
                    }}
                >
                    Used Cluster
                </button>
            </div>
        </form>
    </div>)
}

export interface NoteProps {
    note: string
    start: number
    end?: number
    spawner?: boolean
    focus?: boolean
    note_id: string
}

function Note(props: NoteProps) {
    const context = React.useContext(PlayerContext)
    
    const ref = React.useRef<HTMLTextAreaElement>(null)
    
    React.useEffect(() => {
        if (props.focus) {
            console.log('focusing')
            if (ref.current) {
                ref.current.focus()
                ref.current.setSelectionRange(props.note.length, props.note.length)
                context.editAnnotation({ note_id: props.note_id, note: props.note, focus: false })
            }
        }
    })
    
    return (
        <div
            className={`note-container ${context.curAnnotation === props.note_id ? 'highlight' : ''} ${props.spawner ? ' spawner' : ''}`}
            onMouseOver={() => context.setCurAnnotation(props.note_id)}
            onMouseLeave={() => context.setCurAnnotation('')}
            onBlur={() => {
                // if empty, delete self
                if (props.note === '') {
                    context.deleteAnnotation(props.note_id)
                }
            }}
            {...props.spawner && {
                id: 'note-spawner'
            }}
        >
        <div
            className='note-time'
            onClick={() => {
                context.setSetTime(props.start)
                console.log('set time', props.start)
            }}
        >
        {dispSeconds(props.start)}
        {props.end && <span> - {dispSeconds(props.end)}</span>}
        </div>
        <TextareaAutosize
            className='note-content'
            value={props.note}
            ref={ref}
            onChange={
                (props.spawner) ?
                (e) => {
                    context.addAnnotation({ note: e.target.value, start: props.start, focus: true })
                }
                :
                (e) => {
                    context.editAnnotation({ note_id: props.note_id, note: e.target.value })
                }
            }
        />
        </div>
    )
}