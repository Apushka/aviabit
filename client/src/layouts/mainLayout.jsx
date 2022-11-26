import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DetailsPage from "../components/page/detailsPage";
import FlightPage from "../components/page/flightPage";
import SearchPage from "../components/page/searchPage";
import StartPage from "../components/page/startPage";
import Chart from "../components/ui/chart";

const routes = [
    {
        path: "/index",
        element: <StartPage />,
        children: [
            {
                path: ":period",
                children: [
                    {
                        path: "",
                        element: <Chart />
                    }
                ]
            }
        ]
    },
    {
        path: "details/:period",
        element: <DetailsPage />
    },
    {
        path: "flight/:flightNumber",
        element: <FlightPage />
    },
    {
        path: "search",
        element: <SearchPage />
    },
    {
        path: "*",
        element: <Navigate to="/index" />
    }
];

const MainLayout = () => {
    const elements = useRoutes(routes);

    return <div className="md:py-8 px-3 py-3">
        {elements}
    </div>;
};

export default MainLayout;
