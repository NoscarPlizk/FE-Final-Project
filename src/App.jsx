import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { TodoContext } from './todoContext';
import useLocalStorage from 'use-local-storage';
import Home from './pages/Home';
import Addtodos from './pages/AddTodos';
import ErrorPage from './pages/ErrorPage';

function Layout() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default function App() {
  const [ todo, setTodo ] = useLocalStorage('data', []);

  const AppNameThemeSet = {
    name: `Reading Tracker`,
    descriptions: `Keep track of what you're reading`
  };
  
  return (
    <TodoContext.Provider value={{ todo, setTodo, AppNameThemeSet }}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>
  );
}