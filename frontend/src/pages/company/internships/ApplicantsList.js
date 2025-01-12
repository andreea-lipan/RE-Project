import {useEffect, useState} from "react";
import {ApplicantCard} from "./ApplicantCard";

export const ApplicantsList = ({internship}) => {

    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        // fetch applicants
        for (let i = 0; i < 3; i++) {
            setApplicants(applicants => [...applicants, {name: `John Doe ${i}`, email: ``}]);
        }
    }, []);

    return(
        <div style={{
            margin: '16px',
        }}>
            {applicants.map(applicant =>
                <ApplicantCard applicant={applicant}/>
            )}
        </div>
    )
}