import {useEffect, useState} from "react";
import {ApplicantCard} from "./ApplicantCard";
import applicationService from "../../../APIs/ApplicationService";

export const ApplicantsList = ({internship}) => {

    const [applicants, setApplicants] = useState([]);

    const statusPriority = {
        Pending: 1,
        Accepted: 2,
        Rejected: 3,
    };

    useEffect(() => {
        loadApplicants();
    },[applicants]);

    const loadApplicants = () => {
        applicationService.getApplicationsByInternship(internship.id).then(response => {
            setApplicants(response.data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        const sortedApplicants = [...applicants].sort((a, b) => {
            return statusPriority[a.status] - statusPriority[b.status];
        });
        setApplicants(sortedApplicants); // Update state with sorted data
    }, [applicants]);

    const updateApplicantStatus = (applicant, status) => {
        applicationService.updateApplication(applicant.id, status).then(response => {
            applicant = {...applicant, status: status};
            setApplicants(applicants.map(a => a.id === applicant.id ? applicant : a));
        }).catch(err => {
            console.log(err);
        })
    }

    return(
        <div style={{
            margin: '16px',
        }}>
            {applicants.map(applicant =>
                <ApplicantCard applicant={applicant} updateApplicantStatus={updateApplicantStatus}/>
            )}
        </div>
    )
}