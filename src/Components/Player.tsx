import ReactPlayer from "react-player"
import { dispSeconds, NoteProps, PlayerContext } from "../App"
import { useContext, useRef, useState } from "react"
import { useDrag } from "@use-gesture/react"
import { IoPlayBack, IoPlayForward } from "react-icons/io5"

interface PlayerProps {
    p_id: string
}

export const Player = (props: PlayerProps) => {
    const { curTime, setCurTime, setMaxTime, setSetTime } = useContext(PlayerContext)

    const [playerState, setPlayerState] = useState("uninit")

    const playerRef = useRef<ReactPlayer>(null)
    
    return <div><ReactPlayer
    id='player'
    ref={playerRef}
    url={`/Recordings/P${props.p_id}/P${props.p_id}.mp4`}
    width='100%'
    height='100%'
    progressInterval={100}
    controls={true}

    onReady={() => {
        if (playerState === "uninit") {
            playerRef.current?.seekTo(curTime)
            setMaxTime(playerRef.current?.getDuration() || 0)
            setPlayerState("init")
        }
    }}

    onProgress={(state) => {
        if (playerState === "init") {
            setMaxTime(playerRef.current?.getDuration() || 0)
            setPlayerState("ready")
        }
        else {
            if (playerRef.current?.getInternalPlayer()?.paused) {
                return
            }
            setCurTime(state.playedSeconds)
        }
    }}
    />
    <div className='cur-time'>
        <div className='time-adj'>
            <div onClick={() => setSetTime(curTime - 10)}><IoPlayBack/></div>
            <div>{dispSeconds(curTime)}</div>
            <div onClick={() => setSetTime(curTime + 10)}><IoPlayForward/></div>
        </div>
    </div>
    </div>
}

function NoteMarker(props: NoteProps) {
    const context = useContext(PlayerContext)

    return (
        <div
            className={`timeline-marker ${context.curAnnotation === props.note_id ? 'highlight' : ''}`}
            style={{
                left: props.start / context.maxTime * 100 + '%',
            }}
            onMouseOver={() => context.setCurAnnotation(props.note_id)}
            onMouseLeave={() => context.setCurAnnotation('')}
        />
    )
}

export const Timeline = () => {
    const { curTime, setCurTime, maxTime, setPlayerState, setSetTime, annotations } = useContext(PlayerContext)

    const pbar_bind = useDrag(({ xy: [x] }) => {
        const pbar = document.querySelector('.timeline-bar')
        if (pbar) {
            const rect = pbar.getBoundingClientRect()
            const time = (x - rect.left) / rect.width * maxTime

            setPlayerState("init")
            setSetTime(time)
            setCurTime(time)
        }
    })

    return (
    <div className='timeline-container'>
        <div
            className='timeline-bar'
        >
            <div
                {...pbar_bind()}
                className='timeline-marker timeline-progress'
                style={{ left: curTime / maxTime * 100 + '%' }}
            />
            {
                annotations.map((note, i) => {
                    return <NoteMarker key={i} {...note} />
                })
            }
        </div>
    </div>
    )
}