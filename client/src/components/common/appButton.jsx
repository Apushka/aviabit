import React from "react";
import PropTypes from "prop-types";

const AppButton = ({ title, onClick, type, disabled, color, wFull }) => {
    const getTheme = () => {
        return color === "black" ? "bg-black text-white " : "border border-solid border-black ";
    };

    return <button
        className={"uppercase py-1 px-3 md:text-base text-sm rounded mb-3 " + getTheme() + (wFull ? "w-full " : "") + (disabled ? "opacity-50 " : "")}
        type={type}
        onClick={onClick}
        disabled={disabled}>
        {title}
    </button>;
};

AppButton.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(["black", "white"]),
    wFull: PropTypes.bool
};

export default AppButton;
