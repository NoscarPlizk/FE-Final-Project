import { Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { TodoContext } from '../src/todoContext';
import Cards from "../components/Cards";

export default function Home() {
  const todo = useContext(TodoContext).todo;
  return (
    <Container>
      <h1 className='mt-4 mb-3'>
        This is my Book List
      </h1>
      <Row>
        <CardGroup todolist={todo} />
      </Row>
    </Container>
  );
}

function CardGroup({ todolist }) {
  const setTodo = useContext(TodoContext).setTodo;
  
  function deleteTodo(currenttodo) {
    setTodo(data => 
      data.filter(todo => todo.id !== currenttodo)
    );
  }

  return todolist.map((todos) => {
    return (
      <Cards todos={todos} deleteTodo={deleteTodo}/>
    );
  });
}

