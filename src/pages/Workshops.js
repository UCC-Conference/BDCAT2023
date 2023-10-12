import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import { Link } from "react-router-dom";

const Workshops = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Workshops</h1>
                <hr />
                <ul>
                    <li>
                        <del><Link to="https://sites.google.com/view/mlhi2023" target="_blank">3rd International Workshop on Machine Learning and Health Informatics (MLHI 2023)</Link></del> (canceled)
                        <br />
                        Chair: Bo Yuan
                    </li>
                    <li>
                        <Link to="https://sites.google.com/dimes.unical.it/bdcat4wm2023/home-page" target="_blank">Big Data Computing, Applications and Technologies for Waste Management (BDCAT4WM 2023)</Link>
                        <br />
                        Chairs: Ester Zumpano, Luciano Caroprese, Shahab S. Band
                    </li>
                    <li>
                        <Link to="https://baid2023.org/" target="_blank">Big Data and Artificial Intelligence in Digital Twins (BAID 2023)</Link>
                        <br />
                        Chairs: Fatih Kurugollu, Abbes Amira, Yassine Himeur
                    </li>
                    <li>
                    <Link to="https://fcrlab.unime.it/calls/bignda2023" target="_blank">Big Nature Data Analysis: Methods and Applications (BigNDA 2023)</Link>
                        <br />
                        Chairs: Lorenzo Carnevale, Vasileios Mygdalis, Ioannis Pitas, Massimo Villari
                    </li>
                </ul>
            </Content>
        </PageWrapper>
    );
};

export default Workshops;
