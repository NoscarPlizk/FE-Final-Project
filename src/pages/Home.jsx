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

  return (
    <div className="d-flex flex-column gap-3">
      <div className="border">
        <h3>In Progressing</h3>
        <div className="row row-cols-3">
          {todolist
            .filter(todos => todos.isfullyCompleted === false)
            .map((todos, index) => {
              return (
                <div key={index} className="mb-4">
                  <Cards todos={todos} deleteTodo={deleteTodo}/>
                </div>
              );
          })}
        </div>
      </div>
      <div className="border">
        <h3>Completed</h3>
        <div>

        </div>
      </div>
    </div>

  )
}

export default function Home() {
  const todo = useContext(TodoContext).todo;
  const [ showModal, setShowModal ] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container className="d-flex flex-column gap-3">
      <div className="
        d-flex justify-content-between align-items-center
        border
        "
      >
        <h1 className='mt-4 mb-3'>
          MyBookist
        </h1>
        <button 
          className="rounded-3"
          style={{ width: '100px', height: '60px'}}
          onClick={handleShow}
        >
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