import { Container, Row, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { TodoContext } from '../todoContext';
import Cards from "../components/Cards";

import Addtodos from "./AddTodos";

function CardSectors({ 
  name, todolist, setTodo, 
  setCompletedValue, setCompletedFunction, setCompletedButtonWord, 
  setUnavaliableText 
}) {
  return (
    <div className="border">
      <h3>{name}</h3>
      { todolist.filter(todos => todos.isfullyCompleted === setCompletedValue).length > 0 ?
        <div className="row row-cols-3">
          {todolist
            .filter(todos => todos.isfullyCompleted === setCompletedValue)
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
        setUnavaliableText={`Currently haven't Completed Book`}
      />

      {/* <div className="border">
        <h3>Completed</h3>
        {todolist.filter(todos => todos.isfullyCompleted === true).length > 0 ?
          <div className="row row-cols-3">
            {todolist
              .filter(todos => todos.isfullyCompleted === true)
              .map((todos) => {
                return (
                  <div key={todos.id}>
                    <Cards 
                      todos={todos} 
                      setTodo={setTodo}
                      setCompleted={revokeCompleted}
                    />
                  </div>
                )
              })

            }
          </div>
          : <div>Currently Unavailable Completed Book</div>
        }
      </div> */}
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
