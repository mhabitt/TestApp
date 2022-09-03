import React, {useCallback, useEffect, useState} from 'react';
import {handleResponse} from "../../../../services/api/handleResponse";
import {Button, Form, Spinner} from "react-bootstrap";
import {PostApi} from "../../../../types/types";
import Post from "./components/Post";
import {usePostApi} from "../../hooks/post/usePostApi";
import {usePostList} from "../../hooks/post/usePostList";
import {useCreatePost} from "../../hooks/post/useCreatePost";

const FakeApiPostsPage = () => {
    const {data, loading, setData} = usePostList();
    const postApi = usePostApi();
    const {create, loading: createLoading, errors: createErrors} = useCreatePost();
    if (loading) {
        return <Spinner animation={"border"}/>
    }

    const savePost = async () => {
        const res = await create({} as PostApi);
        res && setData([res, ...data]);
        console.log(createErrors);
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
        <Button variant={"primary"} onClick={savePost}>{createLoading && <Spinner role={"loader"} size={"sm"} animation={"border"}/>}Dodaj</Button>
        {
            data?.map((post, index) =>
                <Post post={post} key={post.id}/>
            )
        }
    </Form.Group>

}

export default FakeApiPostsPage;