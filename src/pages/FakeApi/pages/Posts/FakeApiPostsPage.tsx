import React, {useEffect, useState} from 'react';
import FakeApiService from "../../services/api";
import {handleResponse} from "../../../../services/api/handleResponse";
import {Button, Form, Spinner} from "react-bootstrap";
import {PostApi} from "../../services/types";

const FakeApiPostsPage = () => {
    const [data, setData] = useState<PostApi[] | undefined>(undefined)

    const fetchPosts = async () => {
        try{
            const resp = await FakeApiService.getPosts();
            setData(resp)
        }catch (e) {
            handleResponse(e)
        }
    }
    useEffect(() => {
        fetchPosts();
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

    if(!data){
        return <Spinner animation={"border"}/>
    }

    return <Form.Group>
        <Button variant={"primary"} onClick={savePost}>Dodaj</Button>
        <Button variant={"primary"} onClick={updatePost}>Zapisz</Button>
        <Button variant={"primary"} onClick={removePost}>Usuń</Button>
        {
            data?.map((value, index) => <li key={value.id}>
                {value.title}
            </li>)
        }
    </Form.Group>

}

export default FakeApiPostsPage;