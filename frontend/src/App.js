import './App.css';
import {InternshipsPage} from "./pages/internships/InternshipsPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/auth/LoginPage";
import {CustomRoute} from "./utils/CustomeRoute";
import {CompanyDashboardPage} from "./pages/dashboards/CompanyDashboardPage";
import {StudentDashboardPage} from "./pages/dashboards/StudentDashboardPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

            {/*public content*/}
            <Route path="/" element={<LoginPage/>}/>

            {/*student content*/}
            <Route path='/students' element={<CustomRoute roles={['STUDENT']}/>}>
                <Route path="internships" element={<InternshipsPage/>}/>
                <Route path="dashboard" element={<StudentDashboardPage/>}/>
            </Route>

            {/*company content*/}
            <Route path='/company' element={<CustomRoute roles={['COMPANY']}/>}>
                <Route path="dashboard" element={<CompanyDashboardPage/>}/>
            </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
