import {InternshipCard} from "./InternshipCard";

export const InternshipsList = ({internships}) => {
    return (
        <div style={{
            minHeight: '200px',
            padding: '16px',
        }}>
            {internships.size === 0 && <h1>No internships found</h1>}
            {internships.map(internship =>
                <InternshipCard internship={internship}/>
            )}
        </div>
    )
}