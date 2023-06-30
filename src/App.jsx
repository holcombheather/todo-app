import Header from './Components/Header';
import Todo from './Components/Todo';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingsForm from './Components/SettingsForm';
import Auth from './Components/Auth';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Auth capability="read">
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
        </Auth>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
