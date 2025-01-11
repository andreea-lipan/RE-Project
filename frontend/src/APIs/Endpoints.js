// to be used for Services

const BASE_URL = "http://localhost:8080"

export const INTERNSHIPS_ENDPOINTS = {
    INTERNSHIPS: `${BASE_URL}/internships`,
    INTERNSHIP_BY_ID: (id) => `${BASE_URL}/internships/${id}`,
    ADD_INTERNSHIP: `${BASE_URL}/internships`
}
