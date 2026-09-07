import { Container, Row, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { TodoContext } from '../todoContext';
import Cards from "../components/Cards";

import Addtodos from "./AddTodos";

function CardSectors({ 
  name, todolist, setTodo, 
  setCompletedValue, setCompletedFunction, setCompletedButtonWord, 
  setAnalysisState, setUnavaliableText 
}) {

  const unsureCompletedStateBookList = 
    todolist.filter(todos => todos.isfullyCompleted === setCompletedValue);

  return (
    <div>
      <h3>{name}</h3>
      <p>
        {unsureCompletedStateBookList.length > 0 && 
        `${unsureCompletedStateBookList.length} ${setAnalysisState}`}
      </p>
      <hr />
      { unsureCompletedStateBookList.length > 0 ?
        <div className="row row-cols-3 mt-5">
          {unsureCompletedStateBookList
            .map((todos) => {
              return (
                <div key={todos.id} className="mb-4">
                  <Cards 
                    todos={todos} 
                    setTodo={setTodo}
                    setCompletedFunction={setCompletedFunction}
                    setCompletedButtonWord={setCompletedButtonWord}
                  />
                </div>
              );
          })}
        </div> 
        : <div>{setUnavaliableText}</div>
      }
      <br />
    </div>      
  )
}



function CardGroup({ todolist }) {
  const setTodo = useContext(TodoContext).setTodo;
  
  function updateCompleted(todos) {
    setTodo(prev => {
      const updatedTodos = prev.map(t => {
        if (t.id !== todos.id) return t;

        return {
          ...t,
          isfullyCompleted: true
        };
      });

      console.log("updated todo list:", updatedTodos);

      return updatedTodos;
    });
  }

  function revokeCompleted(todos) {
    setTodo(prev => {
      const updatedTodos = prev.map(t => {
        if (t.id !== todos.id) return t;

        return {
          ...t,
          isfullyCompleted: false
        };
      });

      console.log("updated todo list:", updatedTodos);

      return updatedTodos;
    });
  }

  return (
    <div className="d-flex flex-column gap-3">
      <CardSectors
        name={'In Progressing'}
        todolist={todolist}
        setTodo={setTodo}
        setCompletedValue={false}
        setCompletedFunction={updateCompleted}
        setCompletedButtonWord={'Complete'}
        setAnalysisState={'book currently being read'}
        setUnavaliableText={`Still diddn't set any record yet.`}
      />
      {/* <div className="border">
        <h3>In Progressing</h3>
        <div className="row row-cols-3">
          {todolist
            .filter(todos => todos.isfullyCompleted === false)
            .map((todos) => {
              return (
                <div key={todos.id} className="mb-4">
                  <Cards 
                    todos={todos} 
                    setTodo={setTodo}
                    setCompleted={updateCompleted}
                  />
                </div>
              );
          })}
        </div>
      </div> */}
      <CardSectors 
        name={'Completed'}
        todolist={todolist}
        setTodo={setTodo}
        setCompletedValue={true}
        setCompletedFunction={revokeCompleted}
        setCompletedButtonWord={'Revoke Complete'}
        setAnalysisState={'book currently being Completed'}
        setUnavaliableText={`Currently haven't Completed Book`}
      />
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
      <div>
        <div className="
          d-flex justify-content-between align-items-center
          "
        >
          <div>
            <h1 className='mt-4 mb-3'>
              MyBookist
            </h1>
            <p>Keep track of what you're reading</p>
          </div>
          <button 
            className="rounded-3"
            style={{ width: '100px', height: '60px'}}
            onClick={handleShow}
          >
            Add Task
          </button>
        </div>
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
