import  {FileRequestInstance} from "./RequestInstance";
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

const StudentService = {
    uploadCV,
    getStudent
}

export default StudentService