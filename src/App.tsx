/* eslint-disable @typescript-eslint/no-unused-vars */
import 'flexlayout-react/style/dark.css';
import './App.scss'
import React, { useEffect } from 'react'

// @ts-expect-error - no types
import { WebVTTParser } from 'webvtt-parser';

import { v4 as uuidv4 } from 'uuid';

import { Layout, Model, TabNode, IJsonModel } from 'flexlayout-react';

import { Player, Timeline } from './Components/Player'
import { NoteList, NoteProps } from './Components/Notes';

import pilotTranscript from './assets/pilot.vtt?raw';

const json: IJsonModel = {
    global: {
        "tabEnableFloat": true,
    },
    borders: [],
    layout: {
        "type": "row",
        "children": [
            {
                "type": "row",
                "weight": 50,
                "children": [
                    {
                        "type": "row",
                        "weight": 87.8132118451025,
                        "children": [
                            {
                                "type": "tabset",
                                "weight": 50,
                                "children": [
                                    {
                                        "type": "tab",
                                        "name": "Video",
                                        "component": "video"
                                    }
                                ]
                            },
                            {
                                "type": "tabset",
                                "weight": 50,
                                "children": [
                                    {
                                        "type": "tab",
                                        "name": "Markers",
                                        "component": "vtt"
                                    }
                                ],
                                "active": true
                            },
                            {
                                "type": "tabset",
                                "weight": 50,
                                "children": [
                                    {
                                        "type": "tab",
                                        "name": "Markers",
                                        "component": "markerlist"
                                    }
                                ],
                                "active": true
                            }
                        ]
                    },
                    {
                        "type": "tabset",
                        "weight": 12.186788154897494,
                        "children": [
                            {
                                "type": "tab",
                                "name": "Timeline",
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
    // return as already resolved promise
    return new Promise((resolve) => {
        console.log('pilotTranscript', pilotTranscript)
        resolve(parser.parse(pilotTranscript).cues)
    })
    // return fetch(`/Recordings/P${p_id}/transcript.vtt`).then(response => {
    //     return response.text().then(vttContent => {
    //         return parser.parse(vttContent).cues
    //     })
    // });
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
    return { curTime: 0, annotations: [] }

    // // if localStorage doesn't exist, create it
    // localStorage.setItem('test', 'test')
    // if (p_id in ls) {
    //     return ls[p_id]
    // }
    // else {
    //     // check for p_id localStorage
    //     const p_id_local = localStorage.getItem(p_id)
    //     if (p_id_local) {
    //         console.log('p_id_local', p_id_local)
    //         ls[p_id] = JSON.parse(p_id_local)
    //         return JSON.parse(p_id_local)
    //     }
    //     return { curTime: 0, annotations: [] }
    // }
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
    vttContent: [] as Cue[],
    curCue: '',
    setCurCue: (id: string) => {}
})

function App() {
    // get url parameters
    const urlParams = new URLSearchParams(window.location.search)
    const p_id = "pilot";//urlParams.get('p')
    
    // // if left pad to 2 digits with 0
    // if (p_id && p_id.length === 1) {
    //     p_id = `0${p_id}`
    // }
    
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
    
    // const NotesList = React.memo(() => {
    //     return (<div className='notes-col'>
    //     {[...annotations, { note: '', start: curTime, note_id: 'spawner', spawner: true }]
    //     .sort((a, b) => a.start - b.start)
    //     .map((note, i) => {
    //         return (
    //             <MemoNote key={i} {...note} />
    //         )
    //     })}
    //     </div>
    // )
    // })
    
    const factory = (node: TabNode) => {
        const component = node.getComponent() as string
        switch (component) {
            case 'markerlist':
            return <NoteList annotations={annotations} />
            case 'video':
            return <Player p_id={p_id} />
            case 'timeline':
            return <Timeline />
            case 'vtt':
            return <VttDisplay vttContent={vttContent} />
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
            setPlayerState,
            vttContent,
            curCue,
            setCurCue
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

interface VttDisplayProps {
    vttContent: Cue[]
}

const VttDisplay = (props: VttDisplayProps) => {
    const { curTime, setSetTime, curCue } = React.useContext(PlayerContext)

    return (
        <div className='vtt-disp'>
        {props.vttContent.map(cue => {
            return (
                <div
                    key={cue.id}
                    id={`cue-${cue.id}`}
                    className={`vtt-cue ${cue.id === curCue ? 'highlight' : ''}`}
                    onClick={() => {
                        setSetTime(cue.startTime)
                    }}
                >
                <div className='vtt-start'>{dispSeconds(cue.startTime)}</div>
                <div className='vtt-text'>{cue.text}</div>
                </div>
            )
        })}
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
            note: JSON.stringify(annotation.note)
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

export default App;
