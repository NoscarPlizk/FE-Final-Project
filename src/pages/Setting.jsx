import { useContext } from 'react';
import { TodoContext } from '../todoContext';
import { Container, Form, Button } from 'react-bootstrap';


export default function Setting() {
    const {
        backgroundColor,
        setBackgroundColor
    } = useContext(TodoContext);


    return (
        <div>
            <Container>
                <h1>Settings</h1>
                <div className="mt-4">
                    <label htmlFor="background-color">
                        Background colour
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
            </Container>
        </div>
    )
}