import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import { Link } from "react-router-dom";

const CallForWorkshops = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Call for Workshop Proposals</h1>
                <hr />
                <p>
                    The 10th IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (<strong>BDCAT 2023</strong>)
                    <br />
                    <Link to="https:/bdcat-conference.org">www.bdcat-conference.org</Link>
                </p>
                <p>
                    Taormina (Messina), Italy
                    <br />
                    <strong>4-7 Dec. 2023</strong>
                </p>
                <p>
                    Workshop inquiries should be sent by e-mail to the workshops chairs:
                    <br />
                    Luiz Bittencourt: <i>bit@ic.unicamp.br</i>
                    <br />
                    Valeria Cardellini: <i>cardellini@ing.uniroma2.it</i>
                </p>
                <br />
                <h2>CONTEXT & SCOPE</h2>
                <p>
                    The IEEE/ACM International Conference on Big Data Computing, Applications, and Technologies (BDCAT) is a premier annual conference series aiming to provide a platform for researchers from both academia and industry to present new discoveries in the broad area of big data computing and applications. Previous events were held in London, UK (BDCAT 2014), Limassol, Cyprus (BDCAT 2015), Shanghai, China (BDCAT 2016), Austin, USA (BDCAT 2017), Zurich, Switzerland (BDCAT 2018), Auckland, New Zealand (BDCAT 2019), Leicester, UK (BDCAT 2020), Leicester, UK (BDCAT 2021) and Vancouver, USA (BDCAT 2022). BDCAT 2023 will be held in conjunction with the 16th IEEE/ACM International Conference on Utility and Cloud Computing (UCC 2023) in Taormina, Messina, Italy.
                </p>
                <p>Proposals for workshops should be submitted in PDF format, must not exceed 2 pages in length and contain the following information.</p>
                <ol>
                    <li>Title and brief technical description of the workshop, specifying the goals and the technical issues that will be the focus of the workshop.</li>
                    <li>A brief description of why and to whom the workshop is of interest. </li>
                    <li>A list of related workshops or similar events held in the last 3 years, or to be held in 2023.</li>
                    <li>
                        The names and contact information (web page, email address) of the proposed technical program committee. This international committee should consist of at least 10 people knowledgeable about the technical issues to be
                        addressed and preferably not more than two members of the same institution. Ideally, there should also be two organizers from distinct institutions and countries.
                    </li>
                    <li>
                        A description of the qualifications of the organizers (who would be the Workshop Chairs) with respect to organizing this workshop. This can include papers published in the proposed topic area, previous workshop organization,
                        and other relevant information.
                    </li>
                </ol>
                <p>
                    Submit your workshop by using the following link:
                    <br />
                    <Link to="https://cmt3.research.microsoft.com/UCCBDCAT2023">https://cmt3.research.microsoft.com/UCCBDCAT2023</Link>
                </p>
                <br />
                <h2>IMPORTANT DATES</h2>
                <p>
                    <strong>Workshop Proposals Due</strong>: 31 May 2023
                    <br />
                    <strong>Notification of Acceptance</strong>: 15 June 2023
                    <br />
                    <strong>URL of Workshop</strong>: 25 June 2023
                    <br />
                    <strong>Camera-ready & Registration</strong>: 21 October, 2023
                    <br />
                    <strong>Workshops</strong>: December 2023
                </p>
                <p>Note: Workshops may be approved and announced early based on quality of the proposal.</p>
                <br />
                <h2>TOPICS OF INTEREST</h2>
                <p>
                    We encourage workshops on both established research topics to promote newly developed ideas as well as workshops on emerging topics with sufficient body of research being carried out. Topics of interest include but are not limited
                    to:
                </p>
                <ol>
                    <li><h3>Scaling Machine Learning and Data Mining</h3></li>
                    <ul>
                        <li>Data Science Models and Approaches</li>
                        <li>Data Acquisition, Integration, Cleaning and Best Practices</li>
                        <li>Supervised, Unsupervised and Reinforcement Learning</li>
                        <li>Neural Networks, Convolution Neural Networks and Recurrent Neural Networks</li>
                        <li>Transformer and Natural Language Processing</li>
                        <li>Swarm Intelligence and Evolutionary Strategy</li>
                        <li>Efficient Model Training, Inference and Serving</li>
                        <li>Distributed, Federated and Parallel Learning Algorithms</li>
                        <li>Testing, Debugging and Monitoring</li>
                        <li>Fairness, Interpretability and Explainability</li>
                        <li>Specialized Hardware for Scaling</li>
                    </ul>

                    <li><h3>Scaling Data Infrastructures and Platforms</h3></li>
                    <ul>
                        <li>Scalable Computing Models, Theories and Algorithms</li>
                        <li>Mapreduce: Hadoop and Spark</li>
                        <li>Privacy and Security over the Data Life Cycle</li>
                        <li>Data Search and Information Retrieval Techniques</li>
                        <li>Extract/Transform/Load (ETL) or ETL Pipelines</li>
                        <li>In-Memory Systems and Platforms</li>
                        <li>Performance Evaluation Reports</li>
                        <li>Storage Systems (including file systems, NoSQL, and RDBMS)</li>
                        <li>Resource Management Approaches</li>
                        <li>Data Analytics on Edge Devices</li>
                        <li>Fault Tolerance and Reliability</li>
                        <li>Energy-Efficiency and Sustainability</li>
                        <li>Data Archival and Preservation</li>
                    </ul>
                    <li><h3>Scaling Data Applications</h3></li>
                    <ul>
                        <li>Data Applications for Internet of Things, Mobile Applications and Cyber-Physical Systems</li>
                        <li>Data Applications for Healthcare and Life Science (e.g., Genome Processing)</li>
                        <li>Data Applications for Physical Science and Engineering</li>
                        <li>Data Applications for Business and Enterprise Applications</li>
                        <li>Data Applications for Social Networks</li>
                        <li>Data Applications for Scientific Case Studies</li>
                        <li>Data Applications over the Cloud-Edge Continuum</li>
                        <li>Data Streaming and Batch Applications</li>
                        <li>Data Trends and Challenges</li>
                    </ul>
                    <li><h3>Scaling Data Visualization</h3></li>
                    <ul>
                        <li>Visual Analytics Algorithms and Foundations</li>
                        <li>Graph and Context Models for Visualization</li>
                        <li>Analytics Reasoning and Sense-making</li>
                        <li>Visual Representation and Interaction</li>
                        <li>Data Transformation and Presentation</li>
                    </ul>
                </ol>
                <br />
                <h2>RESPONSIBILITIES</h2>
                <p>Workshop chair(s) will be responsible for the following:</p>
                <ul>
                    <li>Setup the submission system of your choice.</li>
                    <li>Invite TPC members.</li>
                    <li>
                        Produce a web site and a “Call for Papers/Participation” for their workshop. The URL should be sent to the BDCAT Workshops chairs. The call must make it clear that the workshop is open to all members of the Cloud, Edge, Fog,
                        Big Data, Grid, and Cluster Computing community. It should mention that at least one author of each accepted submission must attend the workshop and that all workshop participants must register under the BDCAT 2023 workshop
                        day registration fee or the conference fee. The CfP should make it clear that the registration of at least one author requires the full (non-student, non-workshop) rate.
                    </li>
                    <li>
                        Ensure that all workshop papers are a maximum of 6 pages in length, following the main conference format. It is the responsibility of the workshop organizers to ensure that this page limit has been adhered to. Additional pages
                        may be purchased (in some circumstances) subject to approval by the proceedings chair.
                    </li>
                    <li>Provide a brief description of the workshop for the conference web page and program.</li>
                    <li>Select the participants and the format of the workshop. </li>
                    <li>Advertise the workshop beyond the conference web page.</li>
                    <li>Assist in producing a camera-ready version of the workshop proceedings.</li>
                    <li>The conference will take place in person and one workshop organizer should attend the conference to take care of the workshop sessions.</li>
                </ul>
                <p>The BDCAT 2023 Conference Organizing Committee will be responsible for the following:</p>
                <ul>
                    <li>Provide a link to the workshop's web site on the main conference site.</li>
                    <li>Provide logistics support and a meeting place for the workshop.</li>
                    <li>In conjunction with the organizers, determine the workshop date and time.</li>
                    <li>Provide copies of the workshop proceedings to attendees. Workshop proceedings will be published by ACM, following the BDCAT conference proceedings for the current year.</li>
                </ul>
                <br />
                <h2>Details and Important Notes</h2>
                <ol>
                    <li>
                        If the workshop is too small (i.e., it does not attract enough submissions) the BDCAT 2023 Organizing Committee may decide to merge that workshop with another. We encourage workshop organizers to attract a large community. In
                        extreme situations we may also cancel workshops if there are not enough submissions.
                    </li>
                    <li>
                        Workshop organizers must ensure that suitable quality measures have been taken to ensure that the accepted papers are of high quality. All papers must be reviewed by an international Technical Program Committee with a minimum
                        of 3 reviews per paper. The workshop organizers should also try to observe an acceptance rate that is no higher than 50%.
                    </li>
                    <li>Workshops are not automatically endorsed by ACM and should not use the names of these organizations in their titles.</li>
                </ol>
            </Content>
        </PageWrapper>
    );
};

export default CallForWorkshops;
