import React, {useEffect, useState} from "react";
import {UserApi} from "../../../../types/types";
import {handleResponse} from "../../../../services/api/handleResponse";
import {Button, Form, Spinner} from "react-bootstrap";
import FakeApiUsersList from "./components/FakeApiUsersList";
import {useUserApi} from "../../hooks/useUserApi";
import handleException from "../../../../services/api/handleException";

const FakeApiUsersPage = () => {
    const [data, setData] = useState<UserApi[] | undefined>(undefined);
    const userApi = useUserApi();
    const fetchUsers = async () => {
        try{
            const resp = await userApi.getUsers();
            setData(resp)
        }catch (e) {
            handleResponse(e)
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    if(!data){
        return <Spinner role={"loader"} animation={"border"}/>
    }

    const saveUser = async () => {
        try{
            const res = await userApi.createUser({name: ""} as UserApi);
            setData([...data, res])
        }catch (e) {
            handleException(handleResponse(e))
        }
    }

    const updateUser = async () => {
        try{
            await userApi.updateUser({id: 1} as UserApi)
        }catch (e) {
            console.log(handleException(e))
        }
    }

    const removeUser = async () => {
        try{
            const res = await userApi.removeUser(1)
            setData(data.filter(f => f.id !== 1))
        }catch (e) {
            handleResponse(e)
        }
    }

    return <Form.Group>
        <Button variant={"primary"} onClick={saveUser} data-testid={"add-user-button"} >Dodaj</Button>
        <Button variant={"primary"} onClick={updateUser}>Zapisz</Button> {userApi.loading && <Spinner role={"loader"} animation={"border"}/>}
        <Button variant={"primary"} onClick={removeUser} data-testid={"remove-user-button"}>Usuń</Button>
        <FakeApiUsersList users={data}/>
    </Form.Group>
}
export default FakeApiUsersPage