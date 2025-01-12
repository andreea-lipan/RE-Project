import {CompanyInternshipCard} from "./CompanyInternshipCard";

export const CompanyInternshipsList = ({internships}) => {
    return (
        <div style={{
            minHeight: '200px',
            padding: '16px',
        }}>
            {internships.map(internship =>
                <CompanyInternshipCard internship={internship}/>
            )}
        </div>
    )
}