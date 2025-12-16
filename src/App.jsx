import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { TodoContext } from './todoContext';
import useLocalStorage from 'use-local-storage';
import Home from '../pages/Home';
import Addtodos from '../pages/AddTodos';
import ErrorPage from '../pages/ErrorPage';


function Layout() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav>
            <Nav.Link href='/addtodos'>Add Todos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default function App() {
  const [todo, setTodo] = useLocalStorage('data', []);
  
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="addtodos" element={<Addtodos />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>
  );
}