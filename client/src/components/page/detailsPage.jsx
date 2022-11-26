import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFlightsByPeriod } from "../../store/flights";
import AppButton from "../common/appButton";
import AppPageHead from "../common/appPageHead";
import FlightLink from "../common/flightLink";
import Chart from "../ui/chart";

const DetailsPage = () => {
    const { period } = useParams();
    const flights = useSelector(getFlightsByPeriod(period));
    const navigate = useNavigate();

    return <div>
        <AppButton
            color="white"
            title="Назад"
            onClick={() => navigate(-1)}
        />
        <AppPageHead title="Рейсы" />
        <Chart />
        {flights.map(({ flight, dateFlight }) => <FlightLink key={dateFlight} {...{ flight, dateFlight }} />)}
    </div>;
};

export default DetailsPage;
