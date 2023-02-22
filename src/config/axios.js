import axios from "axios";

export const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

export const auth = (password) => {
    clienteAxios.defaults.headers.common['password'] = password;
}
