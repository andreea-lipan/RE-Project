import {InternshipCard} from "./InternshipCard";

export const InternshipsList = ({internships}) => {
    return (
        <div style={{
            minHeight: '200px',
            padding: '16px',
        }}>
            {internships.map(internship =>
                <InternshipCard internship={internship}/>
            )}
        </div>
    )
}