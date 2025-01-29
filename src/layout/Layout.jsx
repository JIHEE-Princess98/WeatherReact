import {Routes, Route, useLocation } from "react-router-dom";
import Home from "../view/Home.jsx";
import Dashboard from "../view/Dashboard.jsx";
import Map from "../view/Map.jsx";
import Setting from "../view/Setting.jsx";
import {SideBar} from "../components/SideBar.jsx";

function Layout(){
    const location = useLocation();

    return(
        <div style={{ display: "flex" }}>
            {location.pathname !== "/" && <SideBar />}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
            <Route path="/setting" element={<Setting />} />
        </Routes>
        </div>
    )
}
export default Layout