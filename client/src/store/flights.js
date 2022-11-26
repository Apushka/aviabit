import { createSlice } from "@reduxjs/toolkit";
import flightsService from "../services/flights.service";

const flightsSlice = createSlice({
    name: "flights",
    initialState: {
        entities: [],
        isLoading: true,
        error: null
    },
    reducers: {
        flightsRequested: (state) => {
            state.isLoading = true;
        },
        flightsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        flightsReceived: (state, action) => {
            state.entities = action.payload.flights;
            state.period = action.payload.period;
            state.isLoading = false;
        }
    }
});

const { reducer: flightsReducer, actions } = flightsSlice;
const { flightsRequested, flightsRequestFailed, flightsReceived } = actions;

export const getFlightsLoadingStatus = () => (state) => state.flights.isLoading;
export const getFlights = () => (state) => state.flights.entities;

export const getFlightsByPeriod = (period) => (state) => {
    const filteredFlights = filterFlightsByPeriod(
        period,
        state.flights.entities
    );
    return filteredFlights;
};

export const getFlightById = (id) => (state) =>
    state.flights.entities.find((flight) => flight.dateFlight === id);

export const getFlightsByQuery = (query) => (state) => {
    if (!query) return [];
    const { flightNumber, date } = query;
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    };

    if (date) {
        const foundFlight = state.flights.entities.find(
            (flight) =>
                flight.flight === flightNumber &&
                new Date(flight.dateFlight).toLocaleString("ru", options) ===
                    new Date(date).toLocaleString("ru", options)
        );
        return foundFlight ? [foundFlight] : [];
    } else {
        return state.flights.entities.filter(
            (flight) => flight.flight === flightNumber
        );
    }
};

const filterFlightsByPeriod = (period, flights) => {
    const [year, month] = period.split("_");
    // eslint-disable-next-line array-callback-return
    const filteredData = flights.filter((flight) => {
        const flightDate = new Date(flight.dateFlight);
        if (month) {
            if (
                flightDate.getFullYear().toString() === year &&
                flightDate.getMonth().toString() === month
            ) {
                return flight;
            }
        } else if (flightDate.getFullYear().toString() === year) {
            return flight;
        }
    });
    return filteredData;
};

export const getPlanTimeFlight = (period) => (state) => {
    const filteredFlights = filterFlightsByPeriod(
        period,
        state.flights.entities
    );
    return filteredFlights.reduce((acc, current) => {
        return acc + current.timeFlight;
    }, 0);
};

export const getFactTimeFlight = (period) => (state) => {
    const filteredFlights = filterFlightsByPeriod(
        period,
        state.flights.entities
    );
    return filteredFlights.reduce((acc, current) => {
        return current.type === 0 ? acc + current.timeFlight : acc;
    }, 0);
};

export const getPlanTimeWork = (period) => (state) => {
    const filteredFlights = filterFlightsByPeriod(
        period,
        state.flights.entities
    );
    return filteredFlights.reduce((acc, current) => {
        return acc + current.timeWork;
    }, 0);
};

export const getFactTimeWork = (period) => (state) => {
    const filteredFlights = filterFlightsByPeriod(
        period,
        state.flights.entities
    );
    return filteredFlights.reduce((acc, current) => {
        return current.type === 0 ? acc + current.timeWork : acc;
    }, 0);
};

export const getFlightsError = () => (state) => state.flights.error;

export const loadFlights = () => async (dispatch) => {
    try {
        dispatch(flightsRequested());
        const data = await flightsService.get();
        dispatch(flightsReceived({ flights: data }));
    } catch (error) {
        dispatch(flightsRequestFailed(error.message));
    }
};

export default flightsReducer;
