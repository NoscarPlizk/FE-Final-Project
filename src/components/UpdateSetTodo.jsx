import { useState } from "react";
import { useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { TodoContext } from '../todoContext';
import FormTodo from "../FormTodo";

export default function UpdateSetTodo({ 
  originaltodo, setModal, showModal 
}) {

  const setTodo = useContext(TodoContext).setTodo;
  const idtodos = originaltodo.id;

  function updateTodo(
    bookName, 
    authorName,
    description, 
    currentReadBookPage, 
    maximumBookPage,
    notes
  ){

    if (currentReadBookPage <= maximumBookPage) {

      setTodo(prev => {
        const updatedTodos = prev.map(t => {
          if (t.id !== idtodos) return t;

          return {
            ...t,
            bookName,
            authorName,
            description,
            currentReadBookPage,
            maximumBookPage,
            notes
          };
        });

        const updatedTodo = updatedTodos.find(t => t.id === idtodos);

        console.log("updated todo:", updatedTodo);
        console.log("updated todo list:", updatedTodos);

        return updatedTodos;
      });

      setModal(false);
      
    } else if (currentReadBookPage >= maximumBookPage) {
      return console.log("Update Todo Error:")
    }
  }

  return (
    <Modal show={showModal} onHide={()=> setModal(false)}>
      <Modal.Body>
        <FormTodo 
          originaltodo={originaltodo} 
          buttonExecuteFunction={updateTodo}
          closeWindows={() => setModal(false)}
        />
        {/* <Form>
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
        </Button> */}
      </Modal.Body>
    </Modal>
  );
}
