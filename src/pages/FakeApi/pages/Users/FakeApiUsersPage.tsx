import React, {useEffect, useState} from "react";
import {UserApi} from "../../services/types";
import FakeApiService from "../../services/api";
import {handleResponse} from "../../../../services/api/handleResponse";
import {Button, Form, Spinner} from "react-bootstrap";
import FakeApiUsersList from "./components/FakeApiUsersList";

const FakeApiUsersPage = () => {
    const [data, setData] = useState<UserApi[] | undefined>(undefined);

    const fetchUsers = async () => {
        try{
            const resp = await FakeApiService.getUsers();
            setData(resp)
        }catch (e) {
            handleResponse(e)
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    const saveUser = async () => {
        try{
            const res = await FakeApiService.createUser({name: "Test"} as UserApi)
        }catch (e) {
            handleResponse(e)
        }
    }

    const updateUser = async () => {
        try{
            const res = await FakeApiService.updateUser({id: 1} as UserApi)
        }catch (e) {
            handleResponse(e)
        }
    }

    const removeUser = async () => {
        try{
            const res = await FakeApiService.removeUser(1)
        }catch (e) {
            handleResponse(e)
        }
    }

    if(!data){
        return <Spinner role={"loader"} animation={"border"}/>
    }
    return <Form.Group>
        <Button variant={"primary"} onClick={saveUser}>Dodaj</Button>
        <Button variant={"primary"} onClick={updateUser}>Zapisz</Button>
        <Button variant={"primary"} onClick={removeUser}>Usuń</Button>
        <FakeApiUsersList users={data}/>
    </Form.Group>
}
export default FakeApiUsersPage