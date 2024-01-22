import React, { Fragment, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";

import userList from "../api/data";
import { v4 as uuid } from "uuid";

export function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const uniqueId = uuid().slice(0, 8);

        let a = name;
        let b = age;

        const list = userList.push({
            id: uniqueId,
            name: a,
            age: b,
        });

        console.log(list);

        setName('');
        setAge('');

        history("/");
    }

    return (
        <div>

            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formName" >
                    <FormControl 
                        type="text" 
                        placeholder="Digite seu nome"
                        required onChange={(e) => setName(e.target.value)}    
                    >
                    </FormControl>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAge" >
                    <FormControl 
                        type="text" 
                        placeholder="Digite sua idade"
                        required onChange={(e) => setAge(e.target.value)}    
                    >
                    </FormControl>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit" >
                    Criar Usuário
                </Button>
            </Form>

        </div>
    )
}

