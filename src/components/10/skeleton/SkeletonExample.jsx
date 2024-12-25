import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonExample() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setUser({
                name: "Abdurahmon Mirmaxsudov",
                email: "abdurahmonmirmaxsudov2804@gmail.com",
                avatar: "https://via.placeholder.com/150",
            });
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="container mt-5 text-white" style={{ maxWidth: "400px" }}>
            <h3>User Profile</h3>
            <div className="card p-3">
                {loading ? (
                    <Skeleton circle={true} height={100} width={100} />
                ) : (
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        style={{ borderRadius: "50%", height: "100px", width: "100px" }}
                    />
                )}

                <div className="mt-3">
                    {loading ? <Skeleton width="60%" height={20} /> : <h4>{user.name}</h4>}
                </div>

                <div className="mt-2">
                    {loading ? (
                        <Skeleton width="80%" height={15} />
                    ) : (
                        <p>{user.email}</p>
                    )}  
                </div>
            </div>
        </div>
    );
}

export default SkeletonExample;
