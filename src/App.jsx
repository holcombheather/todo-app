import Header from './Components/Header';
import Todo from './Components/Todo';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingsForm from './Components/SettingsForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/settings" element={<SettingsForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;
