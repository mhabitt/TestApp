import React, {useEffect} from 'react';
import FakeApiService from "../../services/api";
import {handleResponse} from "../../../../services/api/handleResponse";
import {Button, Form} from "react-bootstrap";
import {PostApi} from "../../services/types";

const FakeApiPostsPage = () => {
    useEffect(() => {
        console.log("rendeeer")
        FakeApiService.getPosts().then(res => {
            console.log(res);
        }).catch(err => {
            handleResponse(err);
        })
    }, []);

    const savePost = async () => {
        try{
            const res = await FakeApiService.createPost({} as PostApi)
        }catch (e) {
            handleResponse(e)
        }
    }

    const updatePost = async () => {
        try{
            const res = await FakeApiService.updatePost({id: 1} as PostApi)
        }catch (e) {
            handleResponse(e)
        }
    }

    const removePost = async () => {
        try{
            const res = await FakeApiService.remove(1)
        }catch (e) {
            handleResponse(e)
        }
    }

    return <Form.Group>
        <Button variant={"primary"} onClick={savePost}>Dodaj</Button>
        <Button variant={"primary"} onClick={updatePost}>Zapisz</Button>
        <Button variant={"primary"} onClick={removePost}>Usuń</Button>
    </Form.Group>

}

export default FakeApiPostsPage;