import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import userList from "../api/data";
import Header from "./Header";



export function Home() {

    return(
        <Fragment>
            <Header  />
            <div style={{ margin: "10rem"}}>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Teste</th>
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
                                    <td>{item.idade}</td>
                                    <td>Lúcia aqui não</td>
                                </tr>
                            )
                        }) 
                        :
                        "Sem dados disponíveis"
                    
                    }
                </tbody>
                </Table>
            </div>

        </Fragment>
    )
}