import { useState } from "react";
import { Button } from "react-bootstrap";
import UpdateSetTodo from "./UpdateSetTodo";
import PercentageCal from "./PercentageCal";

function MainInfoComp({ todos }) {
  return (
    <div className="border rounded-2 p-1">
      <h2>{todos.bookName}</h2>
      <div>{todos.authorName}</div>
      <div>Target: {todos.description}</div>
      <div>Notes: {todos.notes}</div>
    </div>
  )
}

function PercentageComp({ todos }) {
  return (
    <div 
      className="
        border rounded-2 p-1
        d-flex justify-content-between 
      "
    >
      <div>
        <h4>
          <PercentageCal 
            CurReadBookPage={todos.currentReadBookPage}
            MaxBookPage={todos.maximumBookPage}
          />
        </h4>
      </div>
      <div>
        <div>Current Page: {todos.currentReadBookPage}</div>
        <div>Maximum Page: {todos.maximumBookPage}</div>
      </div>
    </div>
  )
}

function ButtonComp({ 
  todos, setModal, deleteTodo, setCompletedFunction, setCompletedButtonWord 
}) {
  return (
    <div className="d-flex justify-content-end gap-1">
      <Button 
        variant="primary" 
        className="w-25"
        onClick={() => setModal(true)}
      >
        Edit
      </Button>
      <Button 
        variant="danger" 
        className="w-25"
        onClick={() => deleteTodo(todos.id)}
      >
        Delete
      </Button>
      { todos.currentReadBookPage === todos.maximumBookPage &&
        <Button 
          variant="warning" 
          onClick={() => setCompletedFunction(todos)}
        >
          {setCompletedButtonWord}
        </Button>
      }
    </div>
  )
}

export default function Cards({ 
  todos, setTodo, setCompletedFunction, setCompletedButtonWord 
}){

  const [showModal, setModal] = useState(false);

  function deleteTodo(currenttodo) {
    setTodo(data => 
      data.filter(todo => todo.id !== currenttodo)
    );
  }
  
  return (
    <div className="
      border rounded-3
      shadow-sm
      d-flex flex-column 
      gap-2 p-3
      "
    >
      <UpdateSetTodo 
        originaltodo={todos} 
        showModal={showModal} 
        setModal={setModal}
      />
      <MainInfoComp todos={todos} />
      <PercentageComp todos={todos} />
      <ButtonComp 
        todos={todos}
        setModal={setModal} 
        deleteTodo={deleteTodo}
        setCompletedFunction={setCompletedFunction}
        setCompletedButtonWord={setCompletedButtonWord}
      />
    </div>
  )
}