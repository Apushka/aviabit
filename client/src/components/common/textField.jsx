import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, name, value, onChange, error, placeholder }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return <div>
        <label className="text-sm md:text-base">
            {label}
        </label>
        <input
            className="outline outline-solid outline-gray-400 rounded focus:outline-gray-400 text-xs md:text-base md:p-3 md:m-3 p-1 m-2"
            id={name}
            value={value}
            onChange={handleChange}
            name={name}
            placeholder={placeholder} />
        {error && <div className="text-red-500">{error}</div>}
    </div>;
};

TextField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default TextField;
