import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getFlightsError, getFlightsLoadingStatus, loadFlights } from "../store/flights";
import { toast } from "react-toastify";

const AppLoader = ({ children }) => {
    const isFligthsLoading = useSelector(getFlightsLoadingStatus());
    const error = useSelector(getFlightsError());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadFlights());
    }, []);

    if (isFligthsLoading) return <div>Loading...</div>;
    if (!isFligthsLoading && error) {
        toast.error("Не удалось подключиться к базе данных");
    }

    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default AppLoader;
