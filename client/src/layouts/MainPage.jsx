import { Outlet } from "react-router-dom";


const MainPage = () => {
    return (
        <div className="inter">
            <Outlet/>
        </div>
    );
};

export default MainPage;