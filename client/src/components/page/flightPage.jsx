import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFlightById } from "../../store/flights";
import AppButton from "../common/appButton";
import AppPageHead from "../common/appPageHead";
import Flight from "../ui/flight";

const FlightPage = () => {
    const { flightNumber } = useParams();
    const { flight } = useSelector(getFlightById(flightNumber));

    const navigate = useNavigate();
    return <div>
        <AppButton
            color="white"
            title="Назад"
            onClick={() => navigate(-1)}
        />
        <AppPageHead title={`Рейс ${flight}`} />
        <Flight />
    </div>;
};

export default FlightPage;
