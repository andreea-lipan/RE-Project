import internshipService from "../../APIs/InternshipService";
import {useState, useEffect} from "react"
import requestInstance from "../../APIs/RequestInstance";
import {InternshipCard} from "./InternshipCard";


export const InternshipsPage = () => {

    const [internships, setInternships] = useState([]);
    //
    useEffect(() => {
        // loadInternships();
    }, []);

    useEffect(() => {
        internshipService.getInternships()
            .then(response => {
                if (response.status === 200) {
                    return response.data
                }
            })
            .then(data => {
                setInternships(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const loadInternships = async () => {
        const result = await internshipService.getInternships();
        setInternships(result.data);
    }

    return (
        <>
            {internships.map(internship =>
                InternshipCard(internship)
            )}
        </>
    )
}