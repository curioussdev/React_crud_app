import React, { useEffect, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import userList from "../api/data";
import { v4 as uuid } from "uuid";


export function Edit() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = userList.map((e) => {
        return e.id;
    }).indexOf(id);

    function handleSubmit(e) {
        e.preventDefault();

        let a = userList[index];
        a.name = name;
        a.age = age;

        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem("name"));
        setAge(localStorage.getItem("age"));
        setId(localStorage.getItem("id"));
     }, [])



    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formName" >
                    <FormControl
                        value={name}
                        type="text"
                        placeholder="Digite seu nome"
                        required
                        onChange={(e) => setName(e.target.value)}
                    >
                    </FormControl>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAge" >
                    <FormControl
                        value={age}
                        type="text"
                        placeholder="Digite sua idade"
                        required
                        onChange={(e) => setAge(e.target.value)}
                    >
                    </FormControl>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit" >
                    Actualizar Usuário
                </Button>
            </Form>
        </div>
    )
}

