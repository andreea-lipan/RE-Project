// to be used for Services

const BASE_URL = "http://localhost:8080"

export const INTERNSHIPS_ENDPOINTS = {
    INTERNSHIPS: `${BASE_URL}/internships`,
    ONGOING_INTERNSHIPS: (id) => `${BASE_URL}/internships?companyId=${id}`,
    INTERNSHIP_BY_ID: (id) => `${BASE_URL}/internships/${id}`,
    ADD_INTERNSHIP: `${BASE_URL}/internships`
}

export const APPLICATIONS_ENDPOINTS = {
    APPLICATIONS: `${BASE_URL}/applications`,
    APPLICATIONS_BY_STUDENT: (id) => `${BASE_URL}/applications?studentId=${id}`,
    APPLICATIONS_BY_INTERNSHIP: (id) => `${BASE_URL}/applications?internshipId=${id}`,
    APPLICATION_BY_ID: (id) => `${BASE_URL}/applications/${id}`,
    CONCURRENT_APPLICANTS: (internshipId) => `${BASE_URL}/applications/size?internshipId=${internshipId}`
}

export const AUTH_ENDPOINTS = {
    LOGIN: `${BASE_URL}/auth/login`,
    COMPANY_SIGNUP: `${BASE_URL}/auth/company-signup`
}


export const STUDENT_ENDPOINTS = {
    UPLOAD_CV: (id) => `${BASE_URL}/students/${id}/cv`,
    STUDENT_BY_ID: (id) => `${BASE_URL}/students/${id}`,
    HAS_CV: (id) => `${BASE_URL}/students/${id}/cv`
}

export const COMPANY_ENDPOINTS = {
    COMPANY_BY_ID: (id) => `${BASE_URL}/companies/${id}`
}
