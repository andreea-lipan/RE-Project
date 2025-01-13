import {useEffect, useState} from "react";
import {ApplicantCard} from "./ApplicantCard";

export const ApplicantsList = ({internship}) => {

    const [applicants, setApplicants] = useState([
        { id: 1, name: 'John', status: 'Pending' },
        { id: 2, name: 'Jane', status: 'Denied' },
        { id: 3, name: 'Alice', status: 'Pending' },
        { id: 4, name: 'Bob', status: 'Pending' },
    ]);

    const statusPriority = {
        Pending: 1,
        Accepted: 2,
        Denied: 3,
    };

    useEffect(() => {
        const sortedApplicants = [...applicants].sort((a, b) => {
            return statusPriority[a.status] - statusPriority[b.status];
        });
        setApplicants(sortedApplicants); // Update state with sorted data
    }, [applicants]);

    const updateApplicantStatus = (applicant, status) => {
        // update applicant status
        applicant = {...applicant, status: status};
        setApplicants(applicants.map(a => a.id === applicant.id ? applicant : a));
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