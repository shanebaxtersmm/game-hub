import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ce0bda36645f4882889d0ce8471474f9",
    },
});
