import {useApi} from "../../../services/api/useApi";
import {useState} from "react";
import {AlbumApi} from "../../../types/types";

export const useAlbumApi = () => {
    const [loading, setLoading] = useState(false);
    const api = useApi();
    const getAlbums = async (): Promise<AlbumApi[]> => {
        try {
            setLoading(true);
            const res: AlbumApi[] = await api.get(`albums`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }
    const getAlbum = async (albumId: number): Promise<AlbumApi> => {
        try {
            setLoading(true);
            const res: AlbumApi = await api.get(`albums/${albumId}`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const removeAlbum = async (albumId: number): Promise<{}> => {
        try {
            setLoading(true);
            const res: AlbumApi = await api.remove(`albums/${albumId}`);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const updateAlbum = async (data: AlbumApi): Promise<AlbumApi | never> => {
        try {
            setLoading(true);
            const res: AlbumApi = await api.put(`albums/${data.id}`, data);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    const createAlbum = async (data: AlbumApi): Promise<AlbumApi> => {
        try {
            setLoading(true);
            const res: AlbumApi = await api.post(`albums`, data);
            setLoading(false);
            return res
        } catch (e) {
            setLoading(false);
            return Promise.resolve(e);
        }
    }

    return {getAlbums, getAlbum, removeAlbum, updateAlbum, createAlbum, loading}

}

