import { useState } from "react";
import { Button } from "react-bootstrap";
import UpdateSetTodo from "./UpdateSetTodo";
import PercentageCal from "./PercentageCal";

function MainInfoComp({ todos }) {
  return (
    <div>
      <h1>{todos.bookName}</h1>
      <div>Description: {todos.description}</div>
      <div>Notes: {todos.notes}</div>
    </div>
  )
}

function PercentageComp({ todos }) {
  return (
    <div 
      className="
        d-flex 
        flex-column 
        align-items-center
      "
    >
      <div>
        <h3>
          <PercentageCal 
            CurReadBookPage={todos.currentReadBookPage}
            MaxBookPage={todos.maximumBookPage}
          />
        </h3>
      </div>
      <div>Current Page: {todos.currentReadBookPage}</div>
      <div>Maximum Page: {todos.maximumBookPage}</div>
    </div>
  )
}

function ButtonComp({ todos, setModal, deleteTodo }) {
  return (
    <div className="d-flex flex-column gap-2">
      <Button 
        variant="primary" 
        onClick={() => setModal(true)}
      >
        Edit
      </Button>
      <Button 
        variant="danger" 
        onClick={() => deleteTodo(todos.id)}
      >
        Delete
      </Button>
      <Button 
        variant="warning" 
        // onClick={}
      >
        Complete
      </Button>
    </div>
  )
}

export default function Cards({todos, deleteTodo}){
  const [showModal, setModal] = useState(false);
  
  return (
    <div 
      className="
        border 
        d-flex justify-content-between 
        gap-2 p-3
      "
    >
      <UpdateSetTodo 
        originaltodo={todos} 
        showModal={showModal} 
        setModal={setModal}
      />
      <div
        className="
          border
          d-flex justify-content-between
          flex-grow-1
        "
      >
        <MainInfoComp todos={todos} />
        <PercentageComp todos={todos} />
      </div>
      <ButtonComp 
        todos={todos} 
        setModal={setModal} 
        deleteTodo={deleteTodo}
      />
    </div>
  )
}