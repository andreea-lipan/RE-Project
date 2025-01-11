import axios from "axios";

const RequestInstance = axios.create({
    mode:'cors',
    headers: {
        "Content-Type": "application/json",
    },
});

export default RequestInstance;