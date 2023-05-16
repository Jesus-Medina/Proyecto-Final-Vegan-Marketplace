import Form from 'react-bootstrap/Form';

function InputComponent({ setUser, setUserPassword }) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username" onChange={(e) => setUser(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} />
                <Form.Text className="text-muted">
                    We'll never share your credentials with anyone else.
                </Form.Text>
            </Form.Group>
        </Form>
    )
}

export default InputComponent