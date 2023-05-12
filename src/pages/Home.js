import React from "react";
import BigHeader from "../components/elements/BigHeader";
import Content from "../components/elements/Content";
import Countdown from "react-countdown";
import Prefooter from "../components/elements/Prefooter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const counter = ({ days, hours, minutes, seconds, completed }) => {
    return (
        <div className="countdown">
            <div>
                <span>Days</span>
                <span>{days}</span>
            </div>
            <div>
                <span>Hours</span>
                <span>{hours}</span>
            </div>
            <div>
                <span>Minutes</span>
                <span>{minutes}</span>
            </div>
            <div>
                <span>Seconds</span>
                <span>{seconds}</span>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <BigHeader />
            <Content>
                <center>
                    <h1>About BDCAT</h1>
                </center>
                <p>
                    The IEEE/ACM International Conference on Big Data Computing, Applications, and Technologies (BDCAT) is a premier annual conference series aiming to provide a platform for researchers from both academia and industry to present new discoveries in the broad area of big data computing and applications.
                </p>
                <p>
                    Previous events were held in London, UK (BDCAT 2014), Limassol, Cyprus (BDCAT 2015), Shanghai, China (BDCAT 2016), Austin, USA (BDCAT 2017), Zurich, Switzerland (BDCAT 2018), Auckland, New Zealand (BDCAT 2019), Leicester, UK (BDCAT 2020), Leicester, UK (BDCAT 2021) and Vancouver, USA (BDCAT 2022). 
                </p>
                <p>
                    BDCAT 2023 will be held in conjunction with the 16th IEEE/ACM International Conference on Utility and Cloud Computing (UCC 2023) in Taormina, Messina, Italy.
                </p>
            </Content>
            <Content className="center">
                <div className="date">
                    <h2>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>4-7 December 2023</span>
                    </h2>
                </div>
                <Countdown date={new Date("2023-12-04")} renderer={counter} />
            </Content>
            <Prefooter />
        </div>
    );
};

export default Home;
