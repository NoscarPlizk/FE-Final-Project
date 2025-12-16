import { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { TodoContext } from '../src/todoContext';
import { useNavigate } from 'react-router-dom';

export default function Addtodos() {
  const [ bookName, setBookName ] = useState('');
  const [ description, setDescription] = useState("");
  const [ checked, setChecked ] = useState(false);
  const todo = useContext(TodoContext).todo;
  const setTodo = useContext(TodoContext).setTodo;
  const navigate = useNavigate();
  
  return (
    <Container>
      <Form 
        onSubmit={(event) => {
          event.preventDefault();
          setTodo([...todo, {id: Date.now() ,bookName, description, checked}]);
          navigate('/');
        }}>

        <h1 className='mt-5'>Add Your Book List</h1>
        <Form.Group className='mb-2'>
          <Form.Label>Book Name</Form.Label>
          <Form.Control 
            value={bookName} 
            onChange={(e) => setBookName(e.target.value)} 
            type="word" 
            placeholder="Put Book Name"
          />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label>Target description</Form.Label>
          <Form.Control 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            type="word" 
            placeholder="Write your target to Read" 
          />
        </Form.Group>
        <Form.Check 
          className='mb-2'
          type='checkbox'
          label="Mark as completed"
          value={checked} 
          onClick={() => setChecked(!checked)}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}