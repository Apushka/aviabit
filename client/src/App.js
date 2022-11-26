import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/ui/header";
import AppLoader from "./hoc/appLoader";
import MainLayout from "./layouts/mainLayout";

function App() {
    return (
        <div>
            <AppLoader>
                <Header />
                <MainLayout />
            </AppLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
