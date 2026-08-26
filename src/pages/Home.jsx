import { Container, Row, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { TodoContext } from '../todoContext';
import Cards from "../components/Cards";

import Addtodos from "./AddTodos";


function CardGroup({ todolist }) {
  const setTodo = useContext(TodoContext).setTodo;
  
  function deleteTodo(currenttodo) {
    setTodo(data => 
      data.filter(todo => todo.id !== currenttodo)
    );
  }

  return todolist.map((todos) => {
    return (
      <Cards todos={todos} deleteTodo={deleteTodo}/>
    );
  });
}

export default function Home() {
  const todo = useContext(TodoContext).todo;
  const [ showModal, setShowModal ] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <h1 className='mt-4 mb-3'>
          MyBookist
        </h1>
        <button onClick={handleShow}>
          Add Task
        </button>
      </div>
      <div>
        <CardGroup todolist={todo} />
      </div>
      <div>
        <Modal 
          size="lg"
          show={showModal} 
          onHide={handleClose}
        >
          <Addtodos closeWindows={handleClose} />
        </Modal>
      </div>
    </Container>
  );
}