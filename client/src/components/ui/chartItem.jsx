import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const ChartItem = ({ time, maxTime, title, color }) => {
    const { period } = useParams();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(getWidth(time));
    }, [period]);

    const getWidth = () => {
        return (time / maxTime * 100).toString();
    };

    return <>
        <div
            className={"rounded p-3 text-[10px] border border-black md:text-lg uppercase mb-2 transition-all ease-in-out duration-1000 w-0 truncate " + (color === "grey" ? "bg-slate-200 " : "")}
            style={{ width: width + "%" }}>
            {title}: {(time / 60 / 60).toFixed(2)} ч.
        </div>
    </>;
};

ChartItem.propTypes = {
    title: PropTypes.string,
    time: PropTypes.number,
    maxTime: PropTypes.number,
    color: PropTypes.oneOf(["grey", "white"])
};

export default ChartItem;
