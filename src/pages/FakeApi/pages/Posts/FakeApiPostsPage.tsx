import React, {useCallback, useEffect, useState} from 'react';
import {handleResponse} from "../../../../services/api/handleResponse";
import {Button, Form, Spinner} from "react-bootstrap";
import {PostApi} from "../../../../types/types";
import Post from "./components/Post";
import {usePostApi} from "../../hooks/usePostApi";

const FakeApiPostsPage = () => {
    const [data, setData] = useState<PostApi[]>([])
    const postApi = usePostApi();

    const fetchPosts = async () => {
        try {
            const resp = await postApi.getPosts();
            setData(resp);
        } catch (e) {
            handleResponse(e)
        }
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    if (!data) {
        return <Spinner animation={"border"}/>
    }

    const savePost = async () => {
        try {
            const res = await postApi.createPost({} as PostApi)
            setData([...data, res])
        } catch (e) {
            handleResponse(e)
        }
    }

    const updatePost = async () => {
        try {
            await postApi.updatePost({} as PostApi)
        } catch (e) {
            handleResponse(e)
        }
    }

    const removePost = async () => {
        try {
            await postApi.removePost(1)
        } catch (e) {
            handleResponse(e)
        }
    }
    return <Form.Group>
        <Button variant={"primary"} onClick={savePost}>Dodaj</Button>
        {
            postApi.loading && <Spinner animation={"border"}/>
        }
        {
            data?.map((post, index) =>
                <Post post={post} key={post.id}/>
            )
        }
    </Form.Group>

}

export default FakeApiPostsPage;