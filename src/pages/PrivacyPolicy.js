import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const PrivacyPolicy = () => {    
    return (
        <PageWrapper>
            <Content>
                <h1>Privacy Policy</h1>
                <hr />
                <p>
                    <strong>Histats.com</strong><br/> This website is using <Link to="https://www.histats.com">Histats.com web analytics</Link>, a web analysis service.<br/> Histats service do not use third party cookies to identify user so cannot identify you out of this site, the
                    service use only 1st party cookie which means that those are assigned and owned by this current website only in order to guarantee the highest privacy standards
                    <br/><br/> Histats usage of this 1st party cookie help the website analyze how users interact with the site.
                    <br/> The information generated by the cookie relating to your use of this website is usually transferred to Histats.com servers and stored there.
                    <br/> All IP address which belong to Member States of the European Union will be anonymized.<br/> For more information on terms of use and data protection, please visit <Link to="https://www.histats.com">https://www.histats.com</Link>
                    <br/><br/>
                    <strong>Purposes of the processing</strong><br/> On behalf of the operator of this website, Histats will use this information to evaluate your use of the website, to compile reports on website activity and to provide the website operator with other services
                    related to website and Internet use.
                    <br/><br/>
                    <strong>Legitimate interests</strong><br/> The legitimate interest in the data processing lies in the optimization of our website, the analysis of the use of our website and the adaptation of its contents. The interests of users are adequately protected
                    by pseudonymisation.
                    <br/><br/>
                    <strong>Legal basis</strong><br/> The legal basis for the use of Histats.com analytics is your consent in accordance with Article 6.1 (f) GDPR.
                    <br/><br/>
                    <strong>Recipients or categories of recipients</strong><br/> The recipient of the collected data is Histats.com.
                    <br/><br/>
                    <strong>Transfer to third countries</strong><br/> Personal data will not be stored, other data will be persisted on EU located servers and cloud providers managed by Histats.com
                    <br/><br/>
                    <strong>Data storage - duration</strong><br/> The data sent by us and linked to the 1st party cookie generated on this website then anonymized using a one-way only hashing tecnique are automatically deleted after 12 months. Data whose retention period
                    has been reached is automatically deleted once a month.
                    <br/><br/>
                    <strong>Objection</strong><br/> You can prevent Histats from collecting any data in this website and other websites which uses Histats.com services setting the <Link to="http://histats.com/optOut.php">opt-out cookie</Link>
                    </p>
            </Content>
        </PageWrapper>
    );
};

export default PrivacyPolicy;
