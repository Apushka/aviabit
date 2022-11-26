import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FlightLink = ({ flight, dateFlight }) => {
    return <Link
        className="block p-3 mb-6 md:text-base text-[10px] border-r-[1px] border-black border-b-[1px] hover:opacity-50 uppercase"
        to={`/flight/${dateFlight}`}
        key={dateFlight}>
        <div className="mb-1">Номер рейса: {flight}</div>
        <div className="text-end">Дата полёта: {new Date(dateFlight).toLocaleString("ru")}</div>
    </Link>;
};

FlightLink.propTypes = {
    flight: PropTypes.string,
    dateFlight: PropTypes.string
};

export default FlightLink;
