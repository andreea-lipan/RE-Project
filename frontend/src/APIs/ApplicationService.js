import {RequestInstance} from "./RequestInstance";
import {APPLICATIONS_ENDPOINTS} from "./Endpoints";
import Storage from "../utils/Storage";

const addApplication = (internshipId) => {
    const studentId = Storage.getUserId();
    const application = {
        studentId,
        internshipId
    };
    return RequestInstance.post(APPLICATIONS_ENDPOINTS.APPLICATIONS, application);
}

const getApplicationsByStudent = () => {
    const studentId = Storage.getUserId();
    return RequestInstance.get(APPLICATIONS_ENDPOINTS.APPLICATIONS_BY_STUDENT(studentId));
}

const getApplicationsByInternship = (internshipId) => {
    return RequestInstance.get(APPLICATIONS_ENDPOINTS.APPLICATIONS_BY_INTERNSHIP(internshipId));
}

const updateApplication = (applicationId, status) => {
    return RequestInstance.put(APPLICATIONS_ENDPOINTS.APPLICATION_BY_ID(applicationId), {status});
}

const getConcurrentApplicants = (internshipId) => {
    return RequestInstance.get(APPLICATIONS_ENDPOINTS.CONCURRENT_APPLICANTS(internshipId));
}

const checkIfApplied = (internshipId) => {
    const studentId = Storage.getUserId();
    return RequestInstance.get(APPLICATIONS_ENDPOINTS.APPLICATIONS_BY_STUDENT(studentId))
        .then(res => res.data)
        .then(data => {
            return data.some(application => application.internshipId == internshipId);
        });
}

const ApplicationService = {
    addApplication,
    getApplicationsByStudent,
    getApplicationsByInternship,
    updateApplication,
    getConcurrentApplicants,
    checkIfApplied
}

export default ApplicationService;