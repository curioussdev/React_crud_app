import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import userList from "../api/data";

export function Home() {

    return(
        <Fragment>
            <div style={{ margin: "10rem"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                     {userList.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.idade}</td>
                            <td>
                                <Button variant="primary" size="sm">Editar</Button>
                                <Button variant="danger" size="sm">Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </div>

        </Fragment>
    )
}