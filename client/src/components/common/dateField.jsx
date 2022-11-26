import React from "react";
import PropTypes from "prop-types";

const DateField = ({ label, name, value, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return <div className="">
        <label className="text-sm md:text-base">
            {label}
        </label>
        <input
            className="outline outline-solid outline-gray-400 rounded focus:outline-gray-400 text-xs md:text-base md:p-3 md:m-3 p-1 m-2"
            id={name}
            type="date"
            value={value}
            onChange={handleChange}
            name={name}
        />
    </div>;
};

DateField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default DateField;
