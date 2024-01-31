import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Details from "./pages/detail/detail";
import Home from "./pages/home/Home"; 
import Book from "./pages/Book/Book";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/movie/:id' element={<Details />} />
        <Route path='/movie/:id/book' element={<Book />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
