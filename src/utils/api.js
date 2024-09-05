// src/utils/api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.bikesetu.com'; // Replace with the actual API base URL

export const fetchScooters = () => axios.get(`${API_BASE_URL}/scooters`);
export const fetchCustomerInfo = () => axios.get(`${API_BASE_URL}/customer-info`);
export const fetchScooterLifecycle = () => axios.get(`${API_BASE_URL}/scooter-lifecycle`);
export const postPreferences = (preferences) => axios.post(`${API_BASE_URL}/recommendations`, preferences);
