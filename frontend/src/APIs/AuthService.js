import {RequestInstance} from "./RequestInstance";
import {AUTH_ENDPOINTS} from "./Endpoints";
import Storage from "../utils/Storage";

const logIn = (email, password) => {
    return RequestInstance.post(AUTH_ENDPOINTS.LOGIN, {email, password})
        .then(res => res.data)
        .then(data => {
            Storage.setUserId(data.id)
            Storage.setUserRole(data.type)
            return data
        })
}

const registerCompany = (data) => {
    return RequestInstance.post(AUTH_ENDPOINTS.COMPANY_SIGNUP, data)
}

const AuthService = {
    registerCompany,
    logIn
}

export default AuthService