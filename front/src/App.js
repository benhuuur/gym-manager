import "./App.css";
import { Route, Routes } from "react-router-dom";

//Fontes
import "./Fonts/Asap-Bold.otf";
import "./Fonts/Asap-Medium.otf";

//Pages
import AdmHome from "./page/AdmHome";
import UserHome from "./page/UserHome";
import Login from "./page/Login";
import LoginFirstStep from "./page/LoginFirstStep";
import Register from "./page/Register";
import ViewUserSheet from "./page/UserTrainingView";
import Workouts from "./page/Plans";

//Components
import NavbarComponent from "./components/NavBar";
// import {RemoveScroll} from 'react-remove-scroll';

//Provider
import { LoginProvider } from "./context/LoginContext";
import { AlertProvider } from "./context/AlertContext";
import { SheetProvider } from "./context/SheetContext";
import { TrainingProvider } from "./context/TrainingContext";

function App() {
  return (
    <>
    {/* <RemoveScroll> */}
      <TrainingProvider>
      <AlertProvider>
        <LoginProvider>
          <SheetProvider>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/complete-login" element={<LoginFirstStep />} />
            <Route path="/home-adm" element={<AdmHome />} />
            <Route path="/home-user" element={<UserHome />} />
            <Route path="/plans" element={<Workouts />} />
            <Route path="/view-user-sheet" element={<ViewUserSheet />} />
            {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
          </SheetProvider>
        </LoginProvider>
      </AlertProvider>
      </TrainingProvider>
      {/* </RemoveScroll> */}
    </>
  );
}

export default App;
