import './App.css';
import { Route, Routes } from 'react-router-dom';

//Fontes
import "./Fonts/Asap-Bold.otf";
import "./Fonts/Asap-Medium.otf"

//Pages
import HomeAdmPage from './page/HomeAdm';
import HomeUserPage from './page/HomeUsuario';
import LoginPage from './page/Login';
import CompleteLoginPage from './page/CompleteLogin';
import RegisterPage from './page/Registro';
import ViewUserSheet from './page/VizualizarFichaUsuario';


//Components
import NavbarComponent from './components/NavBar';

//Provider
import { LoginProvider } from './context/LoginContext';
import { AlertProvider } from './context/AlertContext';

function App() {
  return (
    <>
      <AlertProvider>
      <LoginProvider>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/complete-login" element={<CompleteLoginPage/>} />
        <Route path="/home-adm" element={<HomeAdmPage/>} />
        <Route path="/home-user" element={<HomeUserPage/>} />
        <Route path="/view-user-sheet" element={<ViewUserSheet/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
      </LoginProvider>
      </AlertProvider>
    </>
  );
}

export default App;
