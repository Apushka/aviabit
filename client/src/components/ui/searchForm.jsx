import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchQuery, searchReceived } from "../../store/search";
import { validator } from "../../utils/validator";
import DateField from "../common/dateField";
import TextField from "../common/textField";

const initialState = {
    flightNumber: "",
    date: ""
};

const SearchForm = () => {
    const query = useSelector(getSearchQuery());
    const [data, setData] = useState(query || initialState);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const isValid = validate();
        if (isValid) {
            setTimeout(() => {
                const newData = {
                    ...data,
                    date: data.date ? data.date : ""
                };

                dispatch(searchReceived(newData));
            }, 400);
        }
    }, [data]);

    const validatorConfig = {
        flightNumber: {
            isRequired: {
                message: "Укажите номер рейса"
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (target) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    return <form>
        <TextField
            label="Номер рейса"
            name="flightNumber"
            value={data.flightNumber}
            onChange={handleChange}
            error={errors.flight} />
        <DateField
            label="Дата рейса"
            name="date"
            value={data.date}
            onChange={handleChange}
            error={errors.date}
        />
    </form>;
};

export default SearchForm;
