import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFlightById } from "../../store/flights";
import ChartItem from "./chartItem";

const Flight = () => {
    const { flightNumber } = useParams();
    const { dateFlight, flight, plnType, timeWork, timeFlight, pln, takeoff: { name: from }, landing: { name: to } } = useSelector(getFlightById(flightNumber));

    return <div
        key={dateFlight} >
        <ChartItem
            color="grey"
            time={timeWork}
            maxTime={timeWork}
            title="Рабочее время на рейсе"
        />
        <ChartItem
            color="white"
            time={timeFlight}
            maxTime={timeWork}
            title="Налёт на рейсе"
        />
        <table className="flex justify-center items-center table-center text-[10px] md:text-base mt-8 mx-auto md:table">
            <thead className="uppercase">
                <tr className="flex flex-col md:table-row">
                    <th className="md:p-3 px-3 py-3 border border-black">Дата полета</th>
                    <th className="md:p-3 px-3 py-3 border border-black">Номер рейса</th>
                    <th className="md:p-3 px-3 py-3 border border-black">Тип поздушного судна</th>
                    <th className="md:p-3 px-3 py-3 border border-black">Бортовой номер</th>
                    <th className="md:p-3 px-3 py-3 border border-black">Маршрут</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr className="flex flex-col md:table-row">
                    <td className="md:p-3 px-3 py-3 border border-black">{new Date(dateFlight).toLocaleString("ru")}</td>
                    <td className="md:p-3 px-3 py-3 border border-black">{flight}</td>
                    <td className="md:p-3 px-3 py-3 border border-black">{plnType}</td>
                    <td className="md:p-3 px-3 py-3 border border-black">{pln}</td>
                    <td className="md:p-3 px-3 py-3 border border-black">{from} - {to}</td>
                </tr>
            </tbody>
        </table >
    </div >;
};

Flight.propTypes = {
    flight: PropTypes.string,
    dateFlight: PropTypes.string,
    pln: PropTypes.string,
    plnType: PropTypes.string,
    takeoff: PropTypes.object,
    landing: PropTypes.object
};

export default Flight;
