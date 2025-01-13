import {RequestInstance} from "./RequestInstance";
import {INTERNSHIPS_ENDPOINTS} from "./Endpoints";


const addInternship = (internship) => {
    return RequestInstance.post(INTERNSHIPS_ENDPOINTS.ADD_INTERNSHIP, internship)
}

const ApplicationService = {

}

export default ApplicationService;