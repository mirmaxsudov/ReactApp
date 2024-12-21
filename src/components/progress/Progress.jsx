import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

function Progress() {
    const [progress, setProgress] = useState(50);

    const handleIncrease = () => setProgress((prev) => Math.min(prev + 10, 100));
    const handleDecrease = () => setProgress((prev) => Math.max(prev - 10, 0));

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 mb-5">
            <div className="mt-5 text-white">
                <h1>Progress Bar</h1>
                <div className="mt-4"
                    style={{
                        width: "100%",
                        backgroundColor: "#ddd",
                        borderRadius: "10px",
                        overflow: "hidden",
                        height: "20px",
                    }}
                >
                    <div
                        style={{
                            width: `${progress}%`,
                            backgroundColor: "#3b82f6",
                            height: "100%",
                            transition: "width 0.3s ease",
                        }}
                    ></div>
                </div>
                <div className="mt-3 d-flex gap-3 align-zr4 fcr">
                    <Button onClick={handleDecrease}>-</Button>
                    <Button onClick={handleIncrease}>+</Button>
                    <p>{progress}%</p>
                </div>
            </div>
        </Container>
    );
}

export default Progress;