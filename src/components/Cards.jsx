import { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import UpdateSetTodo from "./UpdateSetTodo";
import PercentageCal from "./PercentageCal";

function MainInfoComp({ todos }) {
  return (
    <div>
      <h2>{todos.bookName}</h2>
      <div>{todos.authorName}</div>
    </div>
  )
}

function SubInfoComp({todos}) {
  return (
    <div className="my-4 d-flex flex-column gap-4">
      <div>
        <div className="mb-1">Target:</div>
        <div className="text-break">{todos.description}</div>
      </div>
      <div>
        <div className="mb-1">Notes:</div>
        <div className="text-break">{todos.notes}</div>
        
      </div>
    </div>
  )
}

function PercentageComp({ todos }) {
  const percentage =
    (todos.currentReadBookPage / todos.maximumBookPage) * 100;

  return (
    <div className="border rounded-2 p-1">
      <div className="d-flex justify-content-between align-items-center gap-2">
        <h4>
          <PercentageCal 
            CurReadBookPage={todos.currentReadBookPage}
            MaxBookPage={todos.maximumBookPage}
          />
        </h4>
        <div>Current Page: {todos.currentReadBookPage} / {todos.maximumBookPage}</div>
      </div>
      <ProgressBar now={percentage} />
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
      shadow-sm bg-white
      d-flex flex-column 
      gap-4 p-3
      "
    >
      <UpdateSetTodo 
        originaltodo={todos} 
        showModal={showModal} 
        setModal={setModal}
      />
      <MainInfoComp todos={todos} />
      <SubInfoComp todos={todos} />
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