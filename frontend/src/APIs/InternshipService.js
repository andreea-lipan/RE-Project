import requestInstance from "./RequestInstance";
import {INTERNSHIPS_ENDPOINTS} from "./Endpoints";


const getInternships = () => {
    return requestInstance.get(INTERNSHIPS_ENDPOINTS.INTERNSHIPS);
}

const getInternship = (id) => {
    return requestInstance.get(INTERNSHIPS_ENDPOINTS.INTERNSHIP_BY_ID(id))
}

const addInternship = (internship) => {
    return requestInstance.post(INTERNSHIPS_ENDPOINTS.ADD_INTERNSHIP, internship)
}

const InternshipsService = {
    getInternships,
    getInternship,
    addInternship
}

export default InternshipsService