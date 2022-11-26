import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFlightsByQuery } from "../../store/flights";
import { getSearchQuery } from "../../store/search";
import FlightLink from "../common/flightLink";
import SearchForm from "../ui/searchForm";
import AppButton from "../common/appButton";
import AppPageHead from "../common/appPageHead";

const SearchPage = () => {
    const search = useSelector(getSearchQuery());
    const flights = useSelector(getFlightsByQuery(search));
    const navigate = useNavigate();

    return <div className="">
        <AppButton
            color="white"
            title="Назад"
            onClick={() => navigate(-1)}
        />
        <AppPageHead title="Поиск рейса" />
        <div className="text-center mb-3">
            <SearchForm />
        </div>
        {flights.map(({ flight, dateFlight }) => <FlightLink key={dateFlight} {...{ flight, dateFlight }} />)}
    </div >;
};

export default SearchPage;
