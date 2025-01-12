import './App.css';
import {InternshipsPage} from "./pages/internships/InternshipsPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/auth/LoginPage";
import {CustomRoute} from "./utils/CustomeRoute";
import {CompanyDashboardPage} from "./pages/dashboards/CompanyDashboardPage";
import {StudentDashboardPage} from "./pages/dashboards/StudentDashboardPage";
import {InternshipDetails} from "./pages/internships/InternshipDetails";
import {OngoingInternshipsPage} from "./pages/company/OngoingInternshipsPage";
import {CompanyPage} from "./pages/company/CompanyPage";
import {AddInternshipPage} from "./pages/company/AddInternshipPage";
import {StudentApplicationsPage} from "./pages/students/StudentApplicationsPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

            {/*public content*/}
            <Route path="/" element={<LoginPage/>}/>

            {/*common content*/}
            <Route path='/' element={<CustomRoute roles={['STUDENT','COMPANY']}/>}>
                <Route path="internships" element={<InternshipsPage/>}/>
                <Route path="internship-details/:id" element={<InternshipDetails/>}/>
            </Route>

            {/*student content*/}
            <Route path='/students' element={<CustomRoute roles={['STUDENT']}/>}>
                <Route path="dashboard" element={<StudentDashboardPage/>}/>
                <Route path="applications" element={<StudentApplicationsPage/>}/>
            </Route>

            {/*company content*/}
            <Route path='/company' element={<CustomRoute roles={['COMPANY']}/>}>
                <Route path="dashboard" element={<CompanyDashboardPage/>}/>
                <Route path="internships" element={<OngoingInternshipsPage/>}/>
                <Route path="page" element={<CompanyPage/>}/>
                <Route path="add-internship" element={<AddInternshipPage/>}/>
            </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
