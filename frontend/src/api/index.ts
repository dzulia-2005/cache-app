import type { CreateAxiosDefaults } from "axios";
import axios from "axios";

const axiosConfig:CreateAxiosDefaults = {
    baseURL:"http://localhost:5299/api"
}

export const HttpClient = axios.create(axiosConfig);