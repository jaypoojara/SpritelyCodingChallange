import axios from 'axios';
const baseURL = 'https://da3c3855-5b9f-4716-a98b-86b022edd640.mock.pstmn.io/';

const axiosInstance = axios.create({baseURL});

export default axiosInstance;
