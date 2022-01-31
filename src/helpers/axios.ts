import axios from "axios";
import Config from "../config";

const config = Config();

const axiosInstance = axios.create({
    baseURL: (config.port === undefined || config.port === "") ? `${config.baseURL}/` : `${config.baseURL}:${config.port}/`,
});

axiosInstance.interceptors.request.use(async (config) => {
    let token = localStorage.getItem("userToken");
    if (token && token !== "") {
        config.headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => {
        // Return a successful response back to the calling service
        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error)

    }
);

export default axiosInstance
