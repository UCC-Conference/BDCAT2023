import Home from "./pages/Home";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import SteeringCommittee from "./pages/SteeringCommittee";
import CallForPaper from "./pages/CallForPaper";
import CallForWorkshops from "./pages/CallForWorkshops";
import Workshops from "./pages/Workshops";
import Venue from "./pages/Venue";
import Dates from "./pages/Dates";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function getRoutes() {
    return [
        {
            title: "Home",
            href: "/",
            component: <Home/>,
            menu: true
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
            title: "Privacy Policy",
            href: "/privacy-policy",
            component: <PrivacyPolicy />,
            menu: false
        },
    ];
}
