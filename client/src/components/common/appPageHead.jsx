import React from "react";
import PropTypes from "prop-types";

const AppPageHead = ({ title }) => {
    return <h2 className="md:text-2xl text-base underline uppercase m-5 tracking-wider text-center">{title}</h2>
        ;
};

AppPageHead.propTypes = {
    title: PropTypes.string
};

export default AppPageHead;
