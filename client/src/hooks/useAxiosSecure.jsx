import axios from "axios";
console.log(import.meta.env.VITE_url)
const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_url}`
})
const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;