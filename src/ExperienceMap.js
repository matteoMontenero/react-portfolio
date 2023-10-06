import React from "react";
import Arrow from './assets/arrow.png'


const ExperienceMap = () => {

    return (
        <div className="d-flex justify-content-center align-items-center p-4 m-2 row">

            <div className="card text-center p-3 mx-2 text-light bg-dark col-2">

                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer text-light">2 days ago</div>

            </div>

            <div className="p-3 mx-2 col-1">
                <img src={Arrow}></img>
            </div>

            <div className="card text-center p-3 mx-2 text-light bg-dark col-2">

                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer text-light">2 days ago</div>

            </div>

            <div className="p-3 mx-2 col-1">
                <img src={Arrow}></img>
            </div>

            <div className="card text-center p-3 mx-2 text-light bg-dark col-2">

                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer text-light">2 days ago</div>

            </div>

            <div className="p-3 mx-2 col-1">
                <img src={Arrow}></img>
            </div>

            <div className="card text-center p-3 mx-2 text-light bg-dark col-2">

                <h5 className="card-header">Featured</h5>
                <div className="card-body">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer text-light">2 days ago</div>

            </div>
        </div>
    )


}


export default ExperienceMap;