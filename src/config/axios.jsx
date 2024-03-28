import axios from "axios";

const instance = axios.create({
    baseURL: "https://e-commerce-backend-main-server.vercel.app/",
    withCredentials: true,
});

export default instance;
