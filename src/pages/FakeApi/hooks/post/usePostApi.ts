import {useApi} from "../../../../services/api/useApi";
import {PostApi} from "../../../../types/types";
import {useCallback} from "react";

export const usePostApi = () => {
    const api = useApi();
    const getPosts = useCallback(async (): Promise<PostApi[]> => {
        try {
            return await api.get(`posts`)
        } catch (e) {
            return Promise.resolve(e);
        }
    }, [])
    const getPost = useCallback(async (postId: number): Promise<PostApi> => {
        try {
            return await api.get(`posts/${postId}`);
        } catch (e) {
            return Promise.resolve(e);
        }
    }, []);

    const removePost = useCallback(async (postId: number): Promise<{}> => {
        try {
            return await api.remove(`/posts/${postId}`);
        } catch (e) {
            return Promise.resolve(e);
        }
    }, []);

    const updatePost = useCallback(async (data: PostApi): Promise<PostApi | never> => {
        try {
            return await api.put(`/posts/${data.id}`, data);
        } catch (e) {
            return Promise.resolve(e);
        }
    }, []);

    const createPost = useCallback(async (data: PostApi): Promise<PostApi> => {
        try {
            return await api.post(`posts`, data);
        } catch (e) {
            return Promise.resolve(e);
        }
    }, []);

    return {getPosts, getPost, removePost, updatePost, createPost}

}

