import {PostApi} from "../../../../types/types";
import {useEffect, useState} from "react";
import {usePostApi} from "./usePostApi";
import {handleResponse} from "../../../../services/api/handleResponse";
import {ApiError} from "../../../../services/api/types";

export const usePostList = () => {
    const [data, setData] = useState<PostApi[]>([]);
    const [errors, setErrors] = useState<ApiError[] | undefined>(undefined)
    const [loading, setLoading] = useState(false);
    const {getPosts} = usePostApi();
    useEffect(() => {
        const fetchPosts = async() => {
            setLoading(true);
            try{
                const res = await getPosts();
                setData(res);
                setErrors(undefined);
            }catch(e){
                setErrors(handleResponse(e));
            }
            setLoading(false);
        }
        fetchPosts();
    }, [])

    return {data, loading, errors, setData}
}