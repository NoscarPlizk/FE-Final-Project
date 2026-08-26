import { useState } from "react";
import { useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { TodoContext } from '../todoContext';

export default function UpdateSetTodo({originaltodo, setModal, showModal}) {
  const [newName, setNewName] = useState(originaltodo.bookName);
  const [newDescription, setNewDescription] = useState(originaltodo.description);
  const setTodo = useContext(TodoContext).setTodo;
  const idtodos = originaltodo.id;

  function updateTodo(idtodos, newName, newDescription){
    setTodo(prev => prev.map(t => {
    return (
    t.id === idtodos ? {...t, bookName: newName, description: newDescription}:t
    )}))
    setModal(false);
  }

  return (
    <Modal show={showModal} onHide={()=> setModal(false)}>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>New Book Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="update book name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>New Description</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="update description" 
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button 
          variant="primary" 
          onClick={() => updateTodo(idtodos, newName, newDescription)}
        >
          Update
        </Button>
      </Modal.Body>
    </Modal>
  );
}
