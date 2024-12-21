import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import HomeCard from './HomeCard';

export default function Home() {
    return (
        <div className="container pt-5">
            <h1 className="title">Abdurahmon Mirmaxsudov's <i>HWs</i></h1>
            <div className="wrapper-home">
                <div className="row mt-5 g-4">
                    <div className="col-3">
                        <HomeCard title="Todo App" text="React + Bootstrap" link="/todo" />
                    </div>
                    <div className="col-3">
                        <HomeCard title="Stop Watch" text="React + Stop Watch Hook" link="/stopwatch" />
                    </div>
                    <div className="col-3">
                        <HomeCard title="Progress Bar" text="React + Progress bar" link="/progress" />
                    </div>
                    <div className="col-3">
                        <HomeCard title="Skeleton" text="React + Skeleton" link="/skeleton" />
                    </div>
                    <div className="col-3">
                        <HomeCard title="Creatable Select " text="React + Creatable Select" link="/creatable-select" />
                    </div>
                    <div className="col-3">
                        <HomeCard title="Searchable Select" text="React + Searchable Select" link="/searchable" />
                    </div>
                </div>
            </div>
        </div>
    )
}
