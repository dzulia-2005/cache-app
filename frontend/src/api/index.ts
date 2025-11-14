import type { CreateAxiosDefaults } from "axios";
import axios from "axios";

const axiosConfig:CreateAxiosDefaults = {
    baseURL:import.meta.env.VITE_API_URL
}

export const HttpClient = axios.create(axiosConfig);