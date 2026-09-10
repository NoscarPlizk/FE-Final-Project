import { useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { TodoContext } from '../todoContext';
import FormTodo from '../FormTodo';

export default function Addtodos({ closeWindows }) {
  const todo = useContext(TodoContext).todo;
  const setTodo = useContext(TodoContext).setTodo;
  
  function ExecuteAddTodo(
    bookName, 
    authorName,
    description, 
    currentReadBookPage, 
    maximumBookPage, 
    notes
  ) {
    
    const saveTodo = {
      id: Date.now(), 
      bookName: bookName, 
      authorName: authorName,
      description: description,
      currentReadBookPage: currentReadBookPage,
      maximumBookPage: maximumBookPage,
      notes: notes,
      isfullyCompleted: false
    }

    console.log({ saveTodo: saveTodo });

    if (currentReadBookPage < maximumBookPage) {
      return setTodo([ ...todo, saveTodo ]);
    } else if (currentReadBookPage > maximumBookPage) {
      return;
    }
  }

  return (
    <div className='p-3'>
      <FormTodo 
        originaltodo={todo} 
        buttonExecuteFunction={ExecuteAddTodo}
        closeWindows={closeWindows}
      />
    </div>
  );
}