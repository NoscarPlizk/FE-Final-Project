import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { TodoContext } from './todoContext';
import useLocalStorage from 'use-local-storage';
import Home from './pages/Home';
import Setting from './pages/Setting';
import ErrorPage from './pages/ErrorPage';

function Layout({ backgroundColor }) {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav>
            <Nav.Link href='/setting'>Setting</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main 
        style={{
          backgroundColor: backgroundColor,
          minHeight: 'calc(100vh - 56px)'
        }}
      >
        <Outlet />
      </main>
    </>
  );
}

export default function App() {
  const [ todo, setTodo ] = useLocalStorage('data', []);
  const [ backgroundColor, setBackgroundColor ] = useLocalStorage('backgroundColor', '#f8f9fa');

  const AppNameThemeSet = {
    name: `BookHaven Reading Tracker`,
    descriptions: `Keep track of what you're reading`
  };
  
  return (
    <TodoContext.Provider value={{ 
      todo, setTodo, 
      backgroundColor, setBackgroundColor,
      AppNameThemeSet 
    }}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout backgroundColor={backgroundColor}/>}>
            <Route index element={<Home />} />
            <Route path='setting' element={<Setting />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>
  );
}