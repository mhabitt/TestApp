import {useApi} from "../../../services/api/useApi";
import {TodoApi} from "../../../types/types";
import {useState} from "react";

export const useTodoApi = () => {
    const [loading, setLoading] = useState(false);
    const api = useApi();
    const getTodos = async (): Promise<TodoApi[]> => {
        try {
            setLoading(true);
            const res: TodoApi[] = await api.get(`todos`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }
    const getTodo = async (todoId: number): Promise<TodoApi> => {
        try {
            setLoading(true);
            const res: TodoApi = await api.get(`todos/${todoId}`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const removeTodo = async (todoId: number): Promise<{}> => {
        try {
            setLoading(true);
            const res: TodoApi = await api.remove(`todos/${todoId}`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const updateTodo = async (data: TodoApi): Promise<TodoApi | never> => {
        try {
            setLoading(true);
            const res: TodoApi = await api.put(`todos/${data.id}`, data);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const createTodo = async (data: TodoApi): Promise<TodoApi> => {
        try {
            setLoading(true);
            const res: TodoApi = await api.post(`todos`, data);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    return {getTodos, getTodo, removeTodo, updateTodo, createTodo, loading}

}

