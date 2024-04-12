import HomePage from "./pages/users/homePage";
import FreshMeat from "./pages/users/freshMeat";
import ProfilePage from "./pages/users/profilePage";
import MasterLayout from "./pages/users/theme/masterLayout";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ROUTERS } from "./utils/router";
import {Routes, Route} from "react-router-dom"

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.FRESHMEAT,
            component: <FreshMeat />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key) => (<Route key={key} path={item.path} element={item.component} />))
                }
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;