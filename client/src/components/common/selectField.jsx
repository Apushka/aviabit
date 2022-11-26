import React from "react";
import PropTypes from "prop-types";

const SelectField = ({ label, value, onChange, defaultOption, options, error, name }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return <div className="text-gray-600">
        <label className="mx-4" htmlFor={name}>
            {label}
        </label>
        <select
            className="outline outline-solid outline-gray-400 rounded focus:outline-gray-400 m-3 md:p-3 p-1"
            id={name}
            value={value}
            name={name}
            onChange={handleChange}>

            <option disabled value="">
                {defaultOption}
            </option>
            {options?.length > 0 &&
                options.map((option) => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
        </select>
        {error && <div className="text-red-500 text-sm mb-3">
            {error}
        </div>}
    </div>;
};

SelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    defaultOption: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    error: PropTypes.string,
    name: PropTypes.string
};

export default SelectField;
