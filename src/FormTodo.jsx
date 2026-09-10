import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PercentageCal from './components/PercentageCal';

export default function FormTodo({ 
  originaltodo, buttonExecuteFunction, closeWindows,
}) {
   
  const [ bookName, setBookName ] = useState(originaltodo.bookName ?? '');
  const [ authorName, setAuthorName ] = useState(originaltodo.authorName ?? '');
  const [ description, setDescription ] = useState(originaltodo.description ?? '');
  const [ currentReadBookPage, setCurrentReadBookPage ] = useState(originaltodo.currentReadBookPage ?? '');
  const [ maximumBookPage, setMaximumBookPage ] = useState(originaltodo.maximumBookPage ?? '');
  const [ notes, setNote ] = useState(originaltodo.notes ?? '');

  const isPageOverMaximum =
    currentReadBookPage !== "" &&
    maximumBookPage !== "" &&
    Number(currentReadBookPage) > Number(maximumBookPage);

  return (
    <div className='p-3'>
      <div className='d-flex justify-content-between mb-3'>
        <h3 className='mt-5'>Add Your Book List</h3>
        <button 
          onClick={closeWindows}
          className="rounded-3"
          style={{ width: '70px', height: '60px' }}
        >
          X
        </button>
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
          <Form.Group>
            <Form.Label>Author Name</Form.Label>
            <Form.Control 
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              type='word'
              placeholder='Put Author Name'
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
            <Row className='g-3'>
              <Col xs={12} md={4}>
                <Form.Group>
                  <Form.Label>Current Read Page</Form.Label>
                  <Form.Control 
                    type="number" 
                    value={currentReadBookPage}
                    min={0}
                    max={maximumBookPage}
                    isInvalid={isPageOverMaximum}
                    onChange={(e) => {
                      const value = Number(e.target.value);

                      if (value < 0) {
                        setCurrentReadBookPage(0);
                      } else {
                        setCurrentReadBookPage(value)
                      }                
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Current page cannot exceed the maximum page.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group>
                  <Form.Label>Maximum Page</Form.Label>
                  <Form.Control 
                    type="number"
                    min={0}
                    value={maximumBookPage}
                    onChange={(e) => setMaximumBookPage(Number(e.target.value))}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group>
                  <Form.Label>Completed Percentage</Form.Label>
                  <div>
                    <PercentageCal 
                      CurReadBookPage={currentReadBookPage} 
                      MaxBookPage={maximumBookPage}
                    />
                  </div>  
                </Form.Group>
              </Col>          
            </Row>
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
              bookName, 
              authorName,
              description, 
              currentReadBookPage, 
              maximumBookPage, 
              notes
            )}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}