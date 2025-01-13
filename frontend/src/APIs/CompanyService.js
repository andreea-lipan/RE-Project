import {RequestInstance} from "./RequestInstance";
import {COMPANY_ENDPOINTS} from "./Endpoints";

const getCompany = (id) => {
    return RequestInstance.get(COMPANY_ENDPOINTS.COMPANY_BY_ID(id))
}

const CompanyService = {
    getCompany
}

export default CompanyService