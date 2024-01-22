import React, {  } from "react";
import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";

import userList from "../api/data";
import Header from "./Header";



export function Home() {

    let history = useNavigate();

    function handleEdit(id, name, age) {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("age", age); 
    }

    function handleDelte(e) {
        var index = userList.map((e) => {
            return e.id;
        }).indexOf(e.id);

        userList.splice(index, 1);

        history('/');

    }



    return(
        <>
            <Header  />
            <div style={{ margin: "10rem"}}>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        
                        userList && userList.length > 0 
                        ? userList.map((item) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    
                                    <td>
                                        <Link to={`/edit`}>
                                        <Button onClick={() => handleEdit(item.id, item.name, item.id)} variant="primary">Editar</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={()=> handleDelte(item.id)} variant="danger">Excluir</Button>
                                    </td>
                                </tr>
                            )
                        }) 
                        :
                        "Sem dados disponíveis"
                    
                    }
                </tbody>
                </Table>
                <br>
                </br>

                <Link  className="d-grid gap-2" to={"/create"}>
                    <Button size="lg">Criar Usuário</Button>
                </Link>
            </div>

            </>
    )
}