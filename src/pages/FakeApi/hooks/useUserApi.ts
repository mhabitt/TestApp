import {useApi} from "../../../services/api/useApi";
import {UserApi} from "../../../types/types";
import {useState} from "react";

export const useUserApi = () => {
    const [loading, setLoading] = useState(false);
    const api = useApi();
    const getUsers = async (): Promise<UserApi[]> => {
        try {
            setLoading(true);
            const res: UserApi[] = await api.get(`users`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }
    const getUser = async (userId: number): Promise<UserApi> => {
        try {
            setLoading(true);
            const res: UserApi = await api.get(`users/${userId}`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const removeUser = async (userId: number): Promise<{}> => {
        try {
            setLoading(true);
            const res: UserApi = await api.remove(`users/${userId}`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const updateUser = async (data: UserApi): Promise<UserApi | never> => {
        try {
            setLoading(true);
            const res: UserApi = await api.put(`users/${data.id}`, data);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const createUser = async (data: UserApi): Promise<UserApi> => {
        try {
            setLoading(true);
            const res: UserApi = await api.post(`users`, data);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    return {getUsers, getUser, removeUser, updateUser, createUser, loading}

}

