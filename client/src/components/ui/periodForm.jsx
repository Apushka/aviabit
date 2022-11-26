import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validator } from "../../utils/validator";
import AppButton from "../common/appButton";
import SelectField from "../common/selectField";

const years = [
    {
        value: "2017", label: "2017"
    },
    {
        value: "2018", label: "2018"
    },
    {
        value: "2019", label: "2019"
    },
    {
        value: "2020", label: "2020"
    }
];

const months = [
    {
        value: "all", label: "Весь год"
    },
    {
        value: "0", label: "Январь"
    },
    {
        value: "1", label: "Февраль"
    },
    {
        value: "2", label: "Март"
    },
    {
        value: "3", label: "Апрель"
    },
    {
        value: "4", label: "Май"
    },
    {
        value: "5", label: "Июнь"
    },
    {
        value: "6", label: "Июль"
    },
    {
        value: "7", label: "Август"
    },
    {
        value: "8", label: "Сентябрь"
    },
    {
        value: "9", label: "Октябрь"
    },
    {
        value: "10", label: "Ноябрь"
    },
    {
        value: "11", label: "Декабрь"
    }
];

const PeriodForm = () => {
    const { period } = useParams();
    const [year, month] = period?.split("_") || [];
    const [data, setData] = useState({
        year: year || "",
        month: month || ""
    });
    const [errors, setErrors] = useState({});
    const [isTrySubmit, setIsTrySubmit] = useState(false);
    const navigate = useNavigate();
    const isValid = Object.keys(errors).length === 0;

    useEffect(() => {
        if (isTrySubmit) {
            validate();
        }
    }, [data]);

    const handleChange = (target) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    const handleSubmit = (e) => {
        setIsTrySubmit(true);
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { year, month } = data;
        navigate(year + (month && month !== "all" ? "_" + month : ""));
    };

    const validatorConfig = {
        year: {
            isRequired: {
                message: "Пожалуйста, выберите год"
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    return <form onSubmit={handleSubmit}>
        <div className="flex">
            <SelectField
                label="Год"
                options={years}
                name="year"
                onChange={handleChange}
                defaultOption="Choose..."
                value={data.year}
            />
            <SelectField
                label="Месяц"
                options={months}
                name="month"
                onChange={handleChange}
                defaultOption="Choose..."
                value={data.month}
            />
        </div>
        {Object.keys(errors).length !== 0 && <div className="text-red-500 text-sm mb-3 text-center">
            {errors[Object.keys(errors)[0]]}
        </div>}
        <AppButton
            type="submit"
            onClick={handleSubmit}
            title="Показать статистику"
            disabled={!isValid}
            color="black"
            wFull />
    </form>;
};

export default PeriodForm;
