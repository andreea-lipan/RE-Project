import {ApplicationCard} from "./ApplicationCard";

export const ApplicationsList = ({applications}) => {
    return (
        <div style={{
            minHeight: '100px',
            padding: '16px',
        }}>
            {applications.map(application =>
                <ApplicationCard application={application}/>
            )}
        </div>
    )
}