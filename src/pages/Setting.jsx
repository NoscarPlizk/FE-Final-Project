import { useContext } from 'react';
import { TodoContext } from '../todoContext';
import { Container, Form, Button } from 'react-bootstrap';


export default function Setting() {
    const {
        backgroundColor,
        setBackgroundColor
    } = useContext(TodoContext);


    return (
        <Container>
            <div>
                <br />
                <h1 className=''>Settings</h1>
                <div className="mt-4 d-flex">
                    <label 
                        htmlFor="background-color"
                        className='me-3'
                    >
                        Background colour: 
                    </label>
                    <input
                        id="background-color"
                        type="color"
                        value={backgroundColor}
                        onChange={(event) =>
                            setBackgroundColor(event.target.value)
                        }
                        style={{ width: '100px' }}
                    />
                </div>
                <p className="mt-3">
                    Selected colour: {backgroundColor}
                </p>
                <Button
                    className="mt-2"
                    variant="secondary"
                    onClick={() => setBackgroundColor('#f8f9fa')}
                >
                    Reset colour
                </Button>
            </div>
        </Container>
    )
}