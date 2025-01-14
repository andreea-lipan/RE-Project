import {FileRequestInstance, RequestInstance} from "./RequestInstance";
import {STUDENT_ENDPOINTS} from "./Endpoints";
import Storage from "../utils/Storage";


const uploadCV = (CVFormData) => {
    const id = Storage.getUserId()
    console.log(CVFormData)
    return FileRequestInstance.post(STUDENT_ENDPOINTS.UPLOAD_CV(id), CVFormData)
}

const getStudent = () => {
    const id = Storage.getUserId()
    return FileRequestInstance.get(STUDENT_ENDPOINTS.STUDENT_BY_ID(id))
}

const hasCV = () => {
    const id = Storage.getUserId()
    return RequestInstance.get(STUDENT_ENDPOINTS.HAS_CV(id))
}

const StudentService = {
    uploadCV,
    getStudent,
    hasCV
}

export default StudentService