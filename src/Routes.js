import Home from "./pages/Home";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import SteeringCommittee from "./pages/SteeringCommittee";
import TechnicalProgramCommittee from "./pages/TechnicalProgramCommittee";
import CallForPaper from "./pages/CallForPaper";
import CallForWorkshops from "./pages/CallForWorkshops";
import CallForPosters from "./pages/CallForPosters";
import Workshops from "./pages/Workshops";
import Venue from "./pages/Venue";
import Dates from "./pages/Dates";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PhDSymposium from "./pages/PhDSymposium";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";

export default function getRoutes() {
    return [
        {
            title: "Home",
            href: "/",
            component: <Home/>,
            menu: true
        },
        {
            title: "Keynote Speakers",
            href: "/keynote-speakers",
            component: <KeynoteSpeakers />,
            menu: true,
            parent: 'Program'
        },
        {
            title: "Organizing Committee",
            href: "/organizing-committee",
            component: <OrganizingCommittee />,
            menu: true,
            parent: 'Committees'
        },
        {
            title: "Steering Committee",
            href: "/steering-committee",
            component: <SteeringCommittee />,
            menu: true,
            parent: 'Committees'
        },
        {
            title: "Technical Program Committee",
            href: "/technical-program-committee",
            component: <TechnicalProgramCommittee />,
            menu: true,
            parent: 'Committees'
        },
        {
            title: "Dates",
            href: "/important-dates",
            component: <Dates />,
            menu: true
        },
        {
            title: "Call for Papers",
            href: "/call-for-papers",
            component: <CallForPaper />,
            menu: true,
            parent: 'Calls'
        },
        {
            title: "Call for Workshops",
            href: "/call-for-workshops",
            component: <CallForWorkshops />,
            menu: true,
            parent: 'Calls'
        },
        {
            title: "Call for Posters",
            href: "/call-for-posters",
            component: <CallForPosters />,
            menu: true,
            parent: 'Calls'
        },
        {
            title: "PhD Symposium",
            href: "/phd-symposium",
            component: <PhDSymposium />,
            menu: true,
            parent: 'Calls'
        },
        {
            title: "Workshops",
            href: "/workshops",
            component: <Workshops />,
            menu: true
        },
        {
            title: "Venue",
            href: "/venue",
            component: <Venue />,
            menu: true
        },
        {
            title: "2022",
            href: "https://nsfcac.github.io/BDCAT2022/",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2021",
            href: "https://www.cs.le.ac.uk/events/BDCAT2021/",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2020",
            href: "https://www.cs.le.ac.uk/events/BDCAT2020/",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2019",
            href: "https://dl.acm.org/doi/proceedings/10.1145/3365109",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2018",
            href: "http://uccbdcat18.cloudlab.zhaw.ch/bdcat2018/welcome-to-bdcat-2018.html",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2017",
            href: "https://dl.acm.org/doi/proceedings/10.1145/3148055",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2016",
            href: "https://dl.acm.org/doi/proceedings/10.1145/3006299",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2015",
            href: "http://datasys.cs.iit.edu/events/BDC2015/",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2014",
            href: "https://ieeexplore.ieee.org/xpl/conhome/7312651/proceeding",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "Privacy Policy",
            href: "/privacy-policy",
            component: <PrivacyPolicy />,
            menu: false
        },
    ];
}