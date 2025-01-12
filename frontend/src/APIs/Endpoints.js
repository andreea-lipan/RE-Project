// to be used for Services

const BASE_URL = "http://localhost:8080"

export const INTERNSHIPS_ENDPOINTS = {
    INTERNSHIPS: `${BASE_URL}/internships`,
    INTERNSHIP_BY_ID: (id) => `${BASE_URL}/internships/${id}`,
    ADD_INTERNSHIP: `${BASE_URL}/internships`
}

export const AUTH_ENDPOINTS = {
    LOGIN: `${BASE_URL}/auth/login`,
    COMPANY_SIGNUP: `${BASE_URL}/auth/company-signup`
}


export const STUDENT_ENDPOINTS = {
    UPLOAD_CV: (id) => `${BASE_URL}/students/${id}/cv`,
    STUDENT_BY_ID: (id) => `${BASE_URL}/students/${id}`
}
