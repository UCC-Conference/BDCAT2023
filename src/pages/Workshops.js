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
                        <strong>3rd International Workshop on Machine Learning and Health Informatics (MLHI 2023)</strong>
                        <br />
                        Chair: Bo Yuan
                    </li>
                    <li>
                        <strong>Big Data Computing, Applications and Technologies for Waste Management (BDCAT4WM 2023)</strong>
                        <br />
                        Chairs: Ester Zumpano, Luciano Caroprese, Shahab S. Band
                    </li>
                    <li>
                        <strong>Big Data and Artificial Intelligence in Digital Twins (BAID 2023)</strong>
                        <br />
                        Chairs: Fatih Kurugollu, Abbes Amira, Yassine Himeur
                    </li>
                    <li>
                        <strong>Big Nature Data Analysis: Methods and Applications (BigNDA 2023)</strong>
                        <br />
                        Chairs: Lorenzo Carnevale, Vasileios Mygdalis, Ioannis Pitas, Massimo Villari
                    </li>
                </ul>
            </Content>
        </PageWrapper>
    );
};

export default Workshops;
