import { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { TodoContext } from '../todoContext';
import { useNavigate } from 'react-router-dom';

function PagePercentageCal({ CurReadBookPage, MaxBookPage }) {
  const ONE = CurReadBookPage * 100;
  const TWO = MaxBookPage * 100;
  const NUM = ONE / TWO;
  const DisplayPercentage = NUM.toFixed(2);

  return (
    <div>
      % { DisplayPercentage > 0 ? DisplayPercentage : 0 }
    </div>
  )
}

export default function Addtodos({ closeWindows }) {
  const [ bookName, setBookName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ currentReadBookPage, setCurrentReadBookPage ] = useState('');
  const [ maximumBookPage, setMaximumBookPage ] = useState('');
  const todo = useContext(TodoContext).todo;
  const setTodo = useContext(TodoContext).setTodo;
  // const navigate = useNavigate();
  
  const saveObject = {
    id: Date.now(), 
    bookName: bookName, 
    description: description,
    currentReadBookPage: currentReadBookPage,
    maximumBookPage: maximumBookPage
  }

  return (
    <div className='p-3'>
      <div className='d-flex justify-content-between mb-3'>
        <h3 className='mt-5'>Add Your Book List</h3>
        <button onClick={closeWindows}>X</button>
      </div>
      <div>
        <Form 
          onSubmit={(event) => {
            event.preventDefault();
            console.log({ saveObject: saveObject });
            setTodo([ ...todo, saveObject ]);
            // navigate('/');
            // closeWindows();
          }}
          className='vstack gap-2'
        >
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
          <Form.Group>
            <Form.Label>Progress Pages</Form.Label>
            <div className='d-flex gap-3'>
              <div>
                <div>Current Read Page</div>
                <Form.Control 
                  type="number" 
                  value={currentReadBookPage}
                  onChange={(e) => setCurrentReadBookPage(e.target.value)}
                />
              </div>
              <div>
                <div>Maximum Page</div>
                <Form.Control 
                  type="number" 
                  value={maximumBookPage}
                  onChange={(e) => setMaximumBookPage(e.target.value)}
                />
              </div>
              <div>
                <div>Completed Percentage</div>
                <div>
                  <PagePercentageCal 
                    CurReadBookPage={currentReadBookPage} 
                    MaxBookPage={maximumBookPage}
                  />
                </div>  
              </div>          
            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}