import axios from "axios";

export const BASE_URL = 'http://localhost:3000/api/v1';

export const axios_request = axios.create({
  baseURL: BASE_URL,
});