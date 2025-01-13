import {RequestInstance} from "./RequestInstance";
import {INTERNSHIPS_ENDPOINTS} from "./Endpoints";
import Storage from "../utils/Storage";


const getInternships = () => {
    return RequestInstance.get(INTERNSHIPS_ENDPOINTS.INTERNSHIPS);
}

const getInternship = (id) => {
    return RequestInstance.get(INTERNSHIPS_ENDPOINTS.INTERNSHIP_BY_ID(id))
}

const getOngoingInternships = () => {
    const companyId = Storage.getUserId()
    return RequestInstance.get(INTERNSHIPS_ENDPOINTS.ONGOING_INTERNSHIPS(companyId))
}

const addInternship = (internship) => {
    const companyId = Storage.getUserId()
    internship = {...internship, companyId}
    return RequestInstance.post(INTERNSHIPS_ENDPOINTS.ADD_INTERNSHIP, internship)
}

const InternshipsService = {
    getInternships,
    getInternship,
    getOngoingInternships,
    addInternship
}

export default InternshipsService