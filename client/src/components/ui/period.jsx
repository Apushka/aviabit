import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import AppButton from "../common/appButton";
import PeriodForm from "./periodForm";

const Period = () => {
    const { period } = useParams();
    const navigate = useNavigate();

    return <>
        <PeriodForm />
        <Outlet />
        {period && <div className="w-full text-end">
            <AppButton
                title="Подробнее..."
                onClick={() => navigate(`/details/${period}`)}
            />
        </div>}
    </>;
};

export default Period;
