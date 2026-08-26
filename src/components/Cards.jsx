import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import UpdateSetTodo from "./UpdateSetTodo";


export default function Cards({todos, deleteTodo}){
  const [showModal, setModal] = useState(false);
  return (
    <Col>
      <Card>
        <UpdateSetTodo 
          originaltodo={todos} 
          showModal={showModal} 
          setModal={setModal}
        />
        <Card.Body> 
          <Card.Title>{todos.bookName}</Card.Title>
          <Card.Text>{todos.description}</Card.Text>
        </Card.Body>
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
      </Card>
    </Col>
  )
}