import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getFlightsLoadingStatus, loadFlights } from "../store/flights";

const AppLoader = ({ children }) => {
    const isFligthsLoading = useSelector(getFlightsLoadingStatus());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadFlights());
    }, []);

    if (isFligthsLoading) return <div>Loading...</div>;
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default AppLoader;
