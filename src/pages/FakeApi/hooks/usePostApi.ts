import {useApi} from "../../../services/api/useApi";
import {PostApi} from "../../../types/types";
import {useState} from "react";

export const usePostApi = () => {
    const [loading, setLoading] = useState(false);
    const api = useApi();
    const getPosts = async (): Promise<PostApi[]> => {
        try {
            setLoading(true);
            const res: PostApi[] = await api.get(`posts`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }
    const getPost = async (postId: number): Promise<PostApi> => {
        try {
            setLoading(true);
            const res: PostApi = await api.get(`posts/${postId}`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const removePost = async (postId: number): Promise<{}> => {
        try {
            setLoading(true);
            const res: PostApi = await api.remove(`/posts/${postId}`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const updatePost = async (data: PostApi): Promise<PostApi | never> => {
        try {
            setLoading(true);
            const res: PostApi = await api.put(`/posts/${data.id}`, data);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const createPost = async (data: PostApi): Promise<PostApi> => {
        try {
            setLoading(true);
            const res: PostApi = await api.post(`posts`, data);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    return {getPosts, getPost, removePost, updatePost, createPost, loading}

}

