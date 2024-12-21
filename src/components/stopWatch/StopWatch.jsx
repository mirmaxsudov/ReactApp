import React from "react";
import { useStopwatch } from "react-timer-hook";
import Button from "react-bootstrap/Button";
import "./StopWatch.css";

function Stopwatch() {
    const { seconds, minutes, hours, start, pause, reset, isRunning } = useStopwatch({ autoStart: false });
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-5">
                    <div className="wrapper text-white p-5">
                        <h1 className="text-center">Stopwatch timer</h1>
                        <div className="mt-4 mb-4 ms-3">
                            {makeFormat(hours, minutes, seconds)}
                        </div>
                        <div className="d-flex justify-content-around mt-3">
                            <Button onClick={start} disabled={isRunning}>Start</Button>
                            <Button onClick={pause} disabled={!isRunning}>Pause</Button>
                            <Button onClick={() => reset(0, false)}>Reset</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const makeFormat = (hours, minutes, seconds) => {
    return <span>{hours > 9 ? hours : "0" + hours}:{minutes > 9 ? minutes : "0" + minutes}:{seconds > 9 ? seconds : "0" + seconds}</span>
}

export default Stopwatch;