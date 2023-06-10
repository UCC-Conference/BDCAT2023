import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import CfpPdf from "../assets/documents/CallForPapers/BDCAT2023-cfp.pdf";
import CfpTxt from "../assets/documents/CallForPapers/BDCAT2023-cfp.txt";


const CallForPaper = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Call for Papers</h1>
                <hr/>
                <p>
                    [<a href={CfpPdf} target="_blank" rel="noreferrer">PDF</a>] - [<a href={CfpTxt} target="_blank" rel="noreferrer">Txt</a>]
                </p>
                <p>
                    In recent years, there has been significant interest in the use of Machine Learning and AI-based techniques to support large data analysis, with research and implementation of systems specifically focused on supporting different phases of the data processing lifecycle. These have ranged from in-memory systems and distributed environments (e.g., MapReduce/Hadoop, Spark) to specialist environments for stream processing of data and events (e.g., Flink, Kinesis) and Serverless (e.g., OpenWhisk, AWS Lambda). On the other hand, we also realise the importance of computational systems required to process small data volumes, but which involve interdependencies and relationships that are hard to capture and derive.
                </p>
                <p>
                    The IEEE/ACM International Conference on Big Data Computing, Applications, and Technologies (BDCAT) is a premier annual conference series aiming to provide a platform for researchers from both academia and industry to present new discoveries in the broad area of big data computing and applications. Previous events were held in London, UK (BDCAT 2014), Limassol, Cyprus (BDCAT 2015), Shanghai, China (BDCAT 2016), Austin, USA (BDCAT 2017), Zurich, Switzerland (BDCAT 2018), Auckland, New Zealand (BDCAT 2019), Leicester, UK (BDCAT 2020), Leicester, UK (BDCAT 2021) and Vancouver, USA (BDCAT 2022). BDCAT 2023 will be held in conjunction with the 16th IEEE/ACM International Conference on Utility and Cloud Computing (UCC 2023) in Taormina, Messina, Italy.
                </p>
                <p>
                    Authors are invited to submit original, unpublished research manuscripts in all areas of Big Data computing, applications and technologies, as well as on related scaling data analysis.
                </p>
                <p>Topics of interest include (but not limited to)</p>
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
                <br/>
                <h2>PAPER SUBMISSION</h2>
                <p>Authors are invited to submit papers electronically through the following link: <a href="https://cmt3.research.microsoft.com/UCCBDCAT2023">https://cmt3.research.microsoft.com/UCCBDCAT2023</a>.
                    <br/><br/>
                    Submitted manuscripts must represent original unpublished research that is not currently under review for any other conference or journal. Manuscripts are submitted in PDF format and may not exceed ten (10) ACM-formatted *double-column* pages, including figures, tables, and references. All manuscripts will be reviewed and judged on correctness, originality,technical strength, rigour in analysis, quality of results, quality of presentation, and interest and relevance to the conference attendees. Your submission is subject to a determination that you are not under any sanctions by ACM. Accepted papers will later be converted into single-column format through the ACM TAPS process and therefore need to use the new templates that are single-column by default. Switch them to double-column for authoring your paper. This is possible in both the Word and the LaTeX templates.
                    <br/><br/>
                    At least one author of each paper must be registered for the conference in order for the paper to be published in the proceedings. The conference proceedings will be published by the ACM and made available online via the IEEE Xplore Digital Library and ACM Digital Library.
                    <br/><br/>
                    Download the <a href="https://authors.acm.org/proceedings/production-information/preparing-your-article-with-latex">LaTeX</a> or <a href="https://authors.acm.org/proceedings/production-information/preparing-your-article-with-microsoft-word">Microsoft Word</a>.
                </p>
                <br/>
                <h2>IMPORTANT DATES</h2>
                <p>
                    Timezone: Anywhere in the world!<br/>
                    Paper Submissions Due: August 3, 2023<br/>
                    Acceptance Notification: September 30, 2023<br/>
                    Camera Ready Papers Due: October 21, 2023
                </p>
                <br/>
                <h2>AWARDS AND SPECIAL ISSUES</h2>
                <p>
                    A selection commission chaired by the BDCAT 2023 technical programme committee will select and acknowledge the best paper to receive an award during the conference.
                    <br/><br/>
                    Authors of highly rated papers from BDCAT 2023 will be invited to submit an extended version to special issues of prestigious journals.
                </p>
            </Content>
        </PageWrapper>
    );
};

export default CallForPaper;
