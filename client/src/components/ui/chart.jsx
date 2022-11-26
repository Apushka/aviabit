import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlanTimeFlight, getFactTimeFlight, getPlanTimeWork, getFactTimeWork } from "../../store/flights";
import ChartItem from "./chartItem";

const Chart = () => {
    const { period } = useParams();

    const planTimeFlight = useSelector(getPlanTimeFlight(period));
    const factTimeFlight = useSelector(getFactTimeFlight(period));
    const planTimeWork = useSelector(getPlanTimeWork(period));
    const factTimeWork = useSelector(getFactTimeWork(period));

    const getPeriodString = () => {
        if (!period) return;
        const [year, month] = period.split("_");
        if (month) {
            return new Date(year, month).toLocaleString("ru", {
                year: "numeric",
                month: "long"
            });
        }
        return (
            new Date(year).toLocaleString("ru", {
                year: "numeric"
            }) + " г."
        );
    };

    if (!planTimeWork) return <div className="text-lg uppercase mt-10">Нет данных</div>;

    return <div className="w-full mb-8">
        <div className="block md:text-xl mb-4 p-3 text-black text underline underline-offset-8 uppercase">
            {`Данные за ${getPeriodString()}`}
        </div>
        <ChartItem color="grey" time={planTimeWork} maxTime={planTimeWork} title="Плановое рабочее время" />
        <ChartItem color="white" time={factTimeWork} maxTime={planTimeWork} title="Фактическое рабочее время" />
        <ChartItem color="grey" time={planTimeFlight} maxTime={planTimeWork} title="Плановый налёт" />
        <ChartItem color="white" time={factTimeFlight} maxTime={planTimeWork} title="Фактический налёт" />
    </div>;
};

export default Chart;
