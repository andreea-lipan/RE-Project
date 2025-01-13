import {ApplicationCard} from "./ApplicationCard";

export const ApplicationsList = ({applications}) => {
    return (
        <div style={{
            minHeight: '200px',
            padding: '16px',
        }}>
            {applications.map(application =>
                <ApplicationCard application={application}/>
            )}
        </div>
    )
}