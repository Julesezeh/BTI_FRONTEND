import { Route,Routes } from "react-router-dom";
import SkilledLearning from "../pages/home/home";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<SkilledLearning/>} />
        </Routes>
    );
}