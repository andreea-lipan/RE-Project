import axios from "axios";

export const RequestInstance = axios.create({
    mode:'cors',
    headers: {
        "Content-Type": "application/json",
    },
});

export const FileRequestInstance = axios.create({
    mode:'cors',
    headers: {
        "Content-Type": "multipart/form-data",
    },
});
