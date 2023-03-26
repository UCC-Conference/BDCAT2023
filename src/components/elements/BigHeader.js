import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


function BigHeader(props) {
    return (
        <>
            <div className="bigHeader">
                <div>
                    <h2><FontAwesomeIcon icon={faLocationArrow} /><span>Taormina (Messina), Italy</span></h2>
                    <h2><FontAwesomeIcon icon={faCalendarAlt} /><span>4-7 December 2023</span></h2>
                </div>
                <div>
                    <h1>The 10th IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT2023)</h1>
                    <Link to="https://ucc-conference.org/"><h2>Co-located conference: UCC 2023</h2></Link>
                </div>
            </div>
        </>
    );
}

export default BigHeader;
