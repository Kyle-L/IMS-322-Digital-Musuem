import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function ViewPageLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}