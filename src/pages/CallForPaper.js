import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import { Link } from "react-router-dom";
const CallForPaper = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Call for Papers</h1>
                <hr />
                <p>
                    The IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT) is an annual conference series aiming to provide a platform for researchers from both academia and industry to present new
                    discoveries in the broad area of big data computing and applications. Previous events were held in Vancouver, USA (BDCAT 2022), Leister, UK (BDCAT 2021), online (BDCAT 2020), Auckland, New Zealand (BDCAT 2019), Zurich, Switzerland
                    (BDCAT 2018), Austin, Texas, USA (BDCAT 2017), Shanghai, China (BDCAT 2016), Limassol, Cyprus (BDCAT 2015), London, UK (BDCAT 2014). BDCAT 2023 will be held in conjunction with the 16th IEEE/ACM International Conference on Utility
                    and Cloud Computing (UCC 2023) in Taormina, Messina, Italy.
                </p>
                <p>
                    Authors are invited to submit original unpublished manuscripts on a broad range of topics related to big data science, computing paradigms, platforms and applications. More information can be found at the conference’s website:{" "}
                    <Link to="https://bdcat-conference.org/">https://bdcat-conference.org/</Link>.
                </p>
                <p>BDCAT 2023 offers a technical programme, workshops, tutorials, a doctoral symposium and a REU symposium for undergraduate research. The event will have a co-located UCC 2023 conference.</p>
                <p>Authors of accepted papers can opt into reproducible research decoration to publish according to open science conventions; the details are described below.</p>
                <h2>Topics of interest include (but not limited to)</h2>
                <ol>
                    <li><h3>Big Data Science</h3></li>
                    <ul>
                        <li>Big Data Analytics</li>
                        <li>Data Science Models and Approaches</li>
                        <li>Algorithms for Big Data</li>
                        <li>Big Data Search and Information Retrieval Techniques</li>
                        <li>Data Mining and Knowledge Discovery Approaches</li>
                        <li>Machine Learning Techniques for Big Data</li>
                        <li>Big Data Acquisition, Integration, Cleaning, and Best Practices</li>
                        <li>Big Data and Deep Learning</li>
                    </ul>

                    <li><h3>Big Data Infrastructures and Platforms</h3></li>
                    <ul>
                        <li>Scalable Computing Models, Theories, and Algorithms</li>
                        <li>In-Memory Systems and Platforms for Big Data Analytics</li>
                        <li>Big Data and High Performance Computing</li>
                        <li>Cyber-Infrastructure for Big Data</li>
                        <li>Performance Evaluation Reports for Big Data Systems</li>
                        <li>Storage Systems (including file systems, NoSQL, and RDBMS)</li>
                        <li>Resource Management Approaches for Big Data Systems</li>
                        <li>Data Analytics on Edge Devices</li>
                    </ul>
                    <li><h3>Big Data Applications</h3></li>
                    <ul>
                        <li>Big Data Applications for Internet of Things</li>
                        <li>Mobile Applications of Big Data</li>
                        <li>Big Data Applications for Cyber Physical Systems</li>
                        <li>Healthcare Applications such as Genome Processing and Analytics</li>
                        <li>Scientific Application Case Studies on Cloud Infrastructure</li>
                        <li>Big Data in Social Networks</li>
                        <li>Data Streaming Applications</li>
                        <li>Big Data Trends and Challenges</li>
                        <li>Fault Tolerance and Reliability</li>
                        <li>Scalability of Big Data Systems</li>
                        <li>Energy-Efficient Algorithms</li>
                        <li>Big Data Privacy and Security</li>
                        <li>Big Data Archival and Preservation</li>
                    </ul>
                    <li><h3>Visualization of Big Data</h3></li>
                    <ul>
                        <li>Visual Analytics Algorithms and Foundations</li>
                        <li>Graph and Context Models for Visualization</li>
                        <li>Analytics Reasoning and Sense-making on Big Data</li>
                        <li>Visual Representation and Interaction</li>
                        <li>Big Data Transformation, and Presentation</li>
                    </ul>
                </ol>
            </Content>
        </PageWrapper>
    );
};

export default CallForPaper;
