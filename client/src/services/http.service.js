import axios from "axios";
import { toast } from "react-toastify";
import configFile from "../config.json";

const http = axios.create({
    baseURL: configFile.apiEndpoint
});

http.interceptors.response.use(
    (res) => res,
    (error) => {
        const expectedError =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedError) {
            toast.error("Something got broken. Try again later");
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get
};

export default httpService;
