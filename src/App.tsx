/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactPlayer from 'react-player'
import 'flexlayout-react/style/dark.css';
import './App.scss'
import React, { useEffect } from 'react'

import { IoPlayBack, IoPlayForward } from "react-icons/io5";

import { useDrag } from '@use-gesture/react';

import TextareaAutosize from 'react-textarea-autosize';

// @ts-expect-error - no types
import { WebVTTParser } from 'webvtt-parser';

import { v4 as uuidv4 } from 'uuid';

import { Layout, Model, TabNode, IJsonModel } from 'flexlayout-react';

import { Player, Timeline } from './Components/Player'

const json: IJsonModel = {
    global: {
        "tabEnableFloat": true,
    },
    borders: [],
    layout: {
        "type": "row",
        "id": "#32fa37bb-915f-4cee-bf38-96f999d78577",
        "children": [
            {
                "type": "row",
                "id": "#2925f6e2-3add-43eb-8299-15528364c602",
                "weight": 50,
                "children": [
                    {
                        "type": "row",
                        "id": "#3ec42e97-765f-41b6-84f9-ae289ae8dfb7",
                        "weight": 87.8132118451025,
                        "children": [
                            {
                                "type": "tabset",
                                "id": "#75b88ded-c24e-4767-bbb8-65b02812b076",
                                "weight": 50,
                                "children": [
                                    {
                                        "type": "tab",
                                        "id": "#a3f0ffb9-9a9d-4480-86ab-2cb2db5d8c7a",
                                        "name": "Two",
                                        "component": "video"
                                    }
                                ]
                            },
                            {
                                "type": "tabset",
                                "id": "#428ad410-7d99-49d9-b749-377fe3deb18e",
                                "weight": 50,
                                "children": [
                                    {
                                        "type": "tab",
                                        "id": "#ee2001d1-6ac3-4aa5-8f30-e898c1f4304b",
                                        "name": "One",
                                        "component": "markerlist"
                                    }
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "type": "tabset",
                        "id": "#666fea95-d97b-456c-b4d9-d87759bf8ead",
                        "weight": 12.186788154897494,
                        "children": [
                            {
                                "type": "tab",
                                "id": "#272f41bb-4d7c-4a72-a48d-0043db5da5c1",
                                "name": "Three",
                                "component": "timeline"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

const model = Model.fromJson(json)

const parser = new WebVTTParser();

let onCmdS: (e: KeyboardEvent) => void = (e) => {
    if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        console.log('cmd s')
    }
}

let onCmdO: (e: KeyboardEvent) => void = (e) => {
    if (e.key === 'o' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        console.log('cmd o')
    }
}

let onCmdB: (e: KeyboardEvent) => void = (e) => {
    if (e.key === 'b' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        console.log('cmd b')
    }
}

const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 's' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onCmdS(e)
    }
    if (e.key === 'o' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onCmdO(e)
    }
    if (e.key === 'b' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onCmdB(e)
    }
}

document.removeEventListener('keydown', onKeydown)
document.addEventListener('keydown',  onKeydown)

interface Cue {
    direction: string,
    snapToLines: boolean,
    linePosition: string,
    lineAlign: string,
    textPosition: string,
    positionAlign: string,
    size: number,
    alignment: string,
    id: string,
    startTime: number,
    endTime: number,
    pauseOnExit: boolean,
    text: string,
    tree: {
        children: {
            type: string,
            value: string
        }[]
    }
}

function getVTT(p_id: string): Promise<Cue[]> {
    return fetch(`/Recordings/P${p_id}/transcript.vtt`).then(response => {
        return response.text().then(vttContent => {
            return parser.parse(vttContent).cues
        })
    });
}

export function dispSeconds(seconds: number) {
    // convert seconds to hh:mm:ss.s
    const hours = Math.floor(seconds / 3600)
    // pad to 2 digits
    const minutes = Math.floor(seconds / 60) % 60
    const minutes_str = minutes.toString().padStart(2, '0')
    const sec = seconds % 60
    const sec_str = sec.toFixed(3).slice(0, -1).padStart(5, '0')
    return `${hours}:${minutes_str}:${sec_str}`
}

const ls: { [key: string]: string } = {}
function checkLocalStorage(p_id: string) {
    // if localStorage doesn't exist, create it
    localStorage.setItem('test', 'test')
    if (p_id in ls) {
        return ls[p_id]
    }
    else {
        // check for p_id localStorage
        const p_id_local = localStorage.getItem(p_id)
        if (p_id_local) {
            console.log('p_id_local', p_id_local)
            ls[p_id] = JSON.parse(p_id_local)
            return JSON.parse(p_id_local)
        }
        return { curTime: 0, annotations: [] }
    }
}

// context for state of the player
export const PlayerContext = React.createContext({
    setSetTime: (time: number) => {},
    setTime: 0,
    curTime: 0,
    setCurTime: (time: number) => {},
    maxTime: 0,
    setMaxTime: (time: number) => {},
    curAnnotation: '',
    setCurAnnotation: (note_id: string) => { },
    annotations: [] as NoteProps[],
    addAnnotation: (props: Omit<NoteProps, 'note_id'>) => { },
    editAnnotation: (props: Partial<NoteProps> & {note_id: string}) => { },
    deleteAnnotation: (note_id: string) => { },
    playerState: 'uninit' as 'uninit' | 'init' | 'ready',
    setPlayerState: (state: 'uninit' | 'init' | 'ready') => {},
})

function App() {
    // get url parameters
    const urlParams = new URLSearchParams(window.location.search)
    let p_id = urlParams.get('p')
    
    // if left pad to 2 digits with 0
    if (p_id && p_id.length === 1) {
        p_id = `0${p_id}`
    }
    
    if (!p_id) throw new Error('p_id is required')
        
    const ls = checkLocalStorage(p_id)
    const [curTime, setCurTime] = React.useState(ls.curTime)
    const [setTime, setSetTime] = React.useState(ls.curTime)
    const [vttContent, setVttContent] = React.useState<Cue[]>([])
    const [playerState, setPlayerState] = React.useState<"uninit" | "init" | "ready">("uninit")
    const [curCue, setCurCue] = React.useState<string>('')
    const [maxTime, setMaxTime] = React.useState<number>(0)
    const [curAnnotation, setCurAnnotation] = React.useState<string>('')
    
    const [annotations, setAnnotations] = React.useState<NoteProps[]>(ls.annotations as NoteProps[])
    
    // save state on onbeforeunload
    window.onbeforeunload = () => {
        // sendAnnotations(p_id, annotations)
        localStorage.setItem(p_id, JSON.stringify({
            curTime,
            annotations
        }))
    }
    
    // onMount
    useEffect(() => {
        onCmdS = (e) => {
            sendAnnotations(p_id, annotations)
        }
        onCmdO = (e) => {
            // ask for confirmation
            if (window.confirm('Are you sure you want to load annotations?')) {
                getAnnotations(p_id).then((annotations) => {
                    setAnnotations(
                        annotations.map((annotation: {note: string, start: number, end: number}) => {
                            return {
                                note: annotation.note,
                                start: annotation.start,
                                end: annotation.end,
                                note_id: uuidv4()
                            }
                        })
                    )
                })
            }
        }
        onCmdB = (e) => {
            // ask for confirmation
            if (window.confirm('Are you sure you want to clear annotations?')) {
                setAnnotations([])
            }
        }
    })
    
    useEffect(() => {
        if (p_id) {
            getVTT(p_id).then(vttContent => {
                console.log(vttContent)
                setVttContent(vttContent)
            });
        }
    }, [p_id]);
    
    useEffect(() => {
        // highlight the current cue
        const cue = vttContent.find(cue => cue.startTime <= curTime && curTime <= cue.endTime)
        if (cue) {
            setCurCue(cue.id)
        }
        const noteSpawner = document.getElementById('note-spawner')
        if (noteSpawner) {
            noteSpawner.scrollIntoView({ behavior: 'smooth' })
        }
        // console.log('curTime', curTime)
    }, [curTime])
    
    function scrollToCue(id: string) {
        const cueElement = document.getElementById(`cue-${id}`)
        if (cueElement) {
            cueElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }
    
    useEffect(() => {
        scrollToCue(curCue)
    }, [curCue])
    
    const NotesList = () => {
        return (<div className='notes-col'>
        {[...annotations, { note: '', start: curTime, note_id: 'spawner', spawner: true }]
        .sort((a, b) => a.start - b.start)
        .map((note, i) => {
            return (
                <Note key={i} {...note} />
            )
        })}
        </div>)
    }
    
    // const Player = () => {
    //     return (<div className='video-col'>
    //         <div>
    //             <ReactPlayer
    //                 id='player'
    //                 ref={playerRef}
    //                 url={`/Recordings/P${p_id}/P${p_id}.mp4`}
    //                 width='100%'
    //                 height='100%'
    //                 progressInterval={100}
    //                 controls={true}
    
    //                 onReady={() => {
    //                     if (playerState === "uninit") {
    //                         playerRef.current?.seekTo(curTime)
    //                         setMaxTime(playerRef.current?.getDuration() || 0)
    //                         setPlayerState("init")
    //                     }
    //                 }}
    
    //                 onProgress={(state) => {
    //                     if (playerState === "init") {
    //                         setMaxTime(playerRef.current?.getDuration() || 0)
    //                         setPlayerState("ready")
    //                     }
    //                     else {
    //                         if (playerRef.current?.getInternalPlayer()?.paused) {
    //                             return
    //                         }
    //                         setCurTime(state.playedSeconds)
    //                     }
    //                 }}
    //             />
    //         </div>
    //         <div className='cur-time'>
    //             <div className='time-adj'>
    //                 <div onClick={() => setSetTime(curTime - 10)}><IoPlayBack/></div>
    //                 <div>{dispSeconds(curTime)}</div>
    //                 <div onClick={() => setSetTime(curTime + 10)}><IoPlayForward/></div>
    //             </div>
    //         </div>
    //         <div className='vtt-disp'>
    //             {
    //                 vttContent.map((cue, i) => {
    //                     return (
    //                         <div
    //                             key={i}
    //                             className={'vtt-cue ' + (curCue === cue.id ? 'highlight' : '')}
    //                             id={`cue-${cue.id}`}
    //                             onClick={()=>{
    //                                 setSetTime(cue.startTime + 0.1)
    //                             }}
    //                         >
    //                             <div className='vtt-start'>{dispSeconds(cue.startTime)}</div>
    //                             <div className='vtt-text'>{cue.text}</div>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     </div>
    //     )
    // }
    
    const factory = (node: TabNode) => {
        const component = node.getComponent() as string
        switch (component) {
            case 'markerlist':
            return <NotesList />
            case 'video':
            return <Player p_id={p_id} />
            case 'timeline':
            return <Timeline />
            default:
            return <div>Unknown component: {component}</div>
        }
    }
    
    const layoutRef = React.useRef<Layout>(null)
    
    return (
        <>
        <PlayerContext.Provider value={{
            curTime,
            setCurTime,
            maxTime,
            setMaxTime,
            setTime,
            setSetTime,
            annotations,
            curAnnotation,
            setCurAnnotation,
            addAnnotation: (props: Omit<NoteProps, 'note_id'>) => {
                const newAnnotations = [...annotations, {...props, note_id: uuidv4()}]
                setAnnotations(newAnnotations)
            },
            editAnnotation(props: Partial<NoteProps>) {
                const newAnnotations = annotations.map(annotation => {
                    if (annotation.note_id === props.note_id) {
                        return { ...annotation, ...props }
                    }
                    return annotation
                })
                setAnnotations(newAnnotations)
            },
            deleteAnnotation: (note_id: string) => {
                const newAnnotations = annotations.filter(annotation => annotation.note_id !== note_id)
                setAnnotations(newAnnotations)
            },
            playerState,
            setPlayerState
        }}>
        <Layout
        model={model}
        factory={factory}
        ref={layoutRef}
        onModelChange={
            (model) => {
                console.log('model change', model.toJson())
            }
        }
        />
        </PlayerContext.Provider>
        </>
    )
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

async function sendAnnotations(p_id: string, annotations: NoteProps[]) {
    const response = await fetch(`http://127.0.0.1:5000/api/annotations/${p_id}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(annotations.map(annotation => {
        return {
            start: annotation.start,
            end: annotation.end,
            note: annotation.note
        }
    }))
});
if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
}
return response.json();
}

async function getAnnotations(p_id: string) {
    const response = await fetch(`http://127.0.0.1:5000/api/annotations/${p_id}`);
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
}

export default App
