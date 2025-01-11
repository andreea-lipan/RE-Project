import requestInstance from "./RequestInstance";
import {AUTH_ENDPOINTS} from "./Endpoints";
import Storage from "../utils/Storage";

const logIn = (email, password) => {
    return requestInstance.post(AUTH_ENDPOINTS.LOGIN, {email, password})
        .then(res => res.data)
        .then(data => {
            Storage.setUserId(data.id)
            Storage.setUserRole(data.type)
            return data
        })
}

const AuthService = {
    logIn
}

export default AuthService