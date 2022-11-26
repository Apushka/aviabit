import React from "react";
import AppPageHead from "../common/appPageHead";
import Period from "../ui/period";

const StartPage = () => {
    return <div className="flex flex-col items-center text-base">
        <AppPageHead title="Статистика за выбранный период" />
        <Period />
    </div>;
};

export default StartPage;
