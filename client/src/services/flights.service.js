import httpService from "./http.service";
const flightsEndpoint = "api/flights";

const flightsService = {
    get: async () => {
        const { data } = await httpService.get(flightsEndpoint);
        return data;
    }
};

export default flightsService;
