import React from "react";
import "./App.css";
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
        </div>
    );
}

export default App;
