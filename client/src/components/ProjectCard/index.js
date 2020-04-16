import React from 'react';
import PasswordGen from '../../Assets/PasswordGen.png';
import UnBoxed from '../../Assets/unboxed.png';
import Gproject1 from '../../Assets/GroupProject1.png';
import TeamBuilder from '../../Assets/EmployeeGenerator.png';

function ProjectCard() {
    return (
        <div>
            <div className="card" style={{width: "36rem"}}>
                <img src={PasswordGen} className="card-img-top" alt="password generator site" />
                <div className="card-body">
                    <h5 className="card-title">Password Generator</h5>
                    <p>Generate a psuedo-random password</p>
                    <a href="https://slam427.github.io/Password-Generator/" className="btn btn-primary">Check it out</a>
                </div>
            </div>

            <div className="card" style={{width: "36rem"}}>
                <img src={UnBoxed} className="card-img-top" alt="boardgame database" />
                <div className="card-body">
                    <h5 className="card-title">Unboxed</h5>
                    <p>Board game database</p>
                    <a href="https://unboxedgaming.herokuapp.com/" className="btn btn-primary">Check it out</a>
                </div>
            </div>

            <div className="card" style={{width: "36rem"}}>
                <img rc={Gproject1} className="card-img-top" alt="Event search" />
                <div className="card-body">
                    <h5 className="card-title">What's Happening Philly</h5>
                    <p>Search for events in Philadelphia</p>
                    <a href="https://slam427.github.io/What-s-Happening-Philly/" className="btn btn-primary">Check it out</a>
                </div>
            </div>

            <div className="card" style={{width: "36rem"}}>
                <img rc={PasswordGen} className="card-img-top" alt="developer team builder" />
                <div className="card-body">
                    <h5 className="card-title">Dev Team Builder</h5>
                    <p>Use command line to build and generate template of Dev Team</p>
                    <a href="https://github.com/slam427/Employee-Template-Generator" className="btn btn-primary">Check it out</a>
                </div>
            </div>

            <div className="card" style={{width: "36rem"}}>
                <img rc={TeamBuilder} className="card-img-top" alt="developer team builder" />
                <div className="card-body">
                    <h5 className="card-title">Dev Team Builder</h5>
                    <p>Use command line to build and generate template of Dev Team</p>
                    <a href="https://github.com/slam427/Employee-Template-Generator" className="btn btn-primary">Check it out</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;