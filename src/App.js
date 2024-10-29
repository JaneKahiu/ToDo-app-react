import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [userInput, setUserInput] = useState('');
  const[list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);

  };
  const addItem = () => {
    if (userInput.trim() !== "") {
      const newItem = {
        id: uuidv4(),
        value: userInput,

      };
      setList([...list, newItem]);
      setUserInput("");

    }
  };
  const deleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  
  };

  const editItem = (index) => {
    const editedText = prompt("Edit the todo:");
    if(editedText !== null && editedText.trim() !== "") {
      const updatedList = [...list];
      updatedList[index].value = editedText;
      setList(updatedList);
    }
  };

  return (
   <Container>
            <Row className="justify-content-center align-items-center text-center" style={{ fontSize: "3rem", fontWeight: "bolder" }}>
                TODO LIST
            </Row>

            <hr />
            <Row>
                <Col md={{ span: 5, offset: 4 }}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Add item . . ."
                            size="lg"
                            value={userInput}
                            onChange={(e) => updateInput(e.target.value)}
                            aria-label="Add something"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup>
                            <Button variant="dark" className="mt-2" onClick={addItem}>
                                ADD
                            </Button>
                        </InputGroup>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 4 }}>
                    <ListGroup>
                        {list.map((item, index) => (
                            <ListGroup.Item
                                key={item.id}
                                variant="dark"
                                action
                                className="d-flex justify-content-between align-items-center"
                            >
                                {item.value}
                                <span>
                                    <Button
                                        style={{ marginRight: "10px" }}
                                        variant="light"
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        Delete
                                    </Button>
                                    <Button variant="light" onClick={() => editItem(index)}>
                                        Edit
                                    </Button>
                                </span>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
  );
}

export default App;
