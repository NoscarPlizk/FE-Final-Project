import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PercentageCal from './components/PercentageCal';

// function PercentageCal({ CurReadBookPage, MaxBookPage }) {
//   const NUM = CurReadBookPage / MaxBookPage;

//   return (
//     <div>
//       { NUM > 0 ? (NUM * 100).toFixed(2) : 0 } %
//     </div>
//   )
// }

export default function FormTodo({ 
  originaltodo, buttonExecuteFunction, closeWindows,
}) {
   
  const [ bookName, setBookName ] = useState(originaltodo.bookName ?? '');
  const [ description, setDescription ] = useState(originaltodo.description ?? '');
  const [ currentReadBookPage, setCurrentReadBookPage ] = useState(originaltodo.currentReadBookPage ?? '');
  const [ maximumBookPage, setMaximumBookPage ] = useState(originaltodo.maximumBookPage ?? '');
  const [ notes, setNote ] = useState(originaltodo.notes && '');

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
            closeWindows();
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
                  <PercentageCal 
                    CurReadBookPage={currentReadBookPage} 
                    MaxBookPage={maximumBookPage}
                  />
                </div>  
              </div>          
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Notes</Form.Label>
            <Form.Control 
              type="text" 
              value={notes}
              onChange={(e) => setNote(e.target.value)}
            />
          </Form.Group>
          <Button 
            variant="primary" 
            type="submit"
            onClick={() => buttonExecuteFunction( 
              bookName, description, currentReadBookPage, maximumBookPage, notes
            )}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}