import './App.css';
import {InternshipsPage} from "./pages/internships/InternshipsPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/auth/LoginPage";
import {CustomRoute} from "./utils/CustomeRoute";
import {CompanyDashboardPage} from "./pages/company/CompanyDashboardPage";
import {StudentDashboardPage} from "./pages/students/StudentDashboardPage";
import {InternshipDetails} from "./pages/internships/InternshipDetails";
import {OngoingInternshipsPage} from "./pages/company/internships/OngoingInternshipsPage";
import {CompanyRegisterPage} from "./pages/auth/CompanyRegisterPage";
import {CompanyPage} from "./pages/company/CompanyPage";
import {AddInternshipPage} from "./pages/company/internships/AddInternshipPage";
import {StudentApplicationsPage} from "./pages/students/StudentApplicationsPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

            {/*public content*/}
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register-company" element={<CompanyRegisterPage/>}/>

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
                <Route path="page/:id" element={<CompanyPage/>}/>
                <Route path="new-internship" element={<AddInternshipPage/>}/>
            </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
