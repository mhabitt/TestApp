import {useCallback, useState} from "react";
import {usePostApi} from "./usePostApi";
import {handleResponse} from "../../../../services/api/handleResponse";
import {PostApi} from "../../../../types/types";
import {ApiError} from "../../../../services/api/types";

export const useCreatePost = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<ApiError[] | undefined>(undefined)
    const {createPost} = usePostApi();
    const create = useCallback(async(data: PostApi) => {
        try{
            setLoading(true);
            const resp = await createPost(data);
            setLoading(false);
            return resp;
        }catch(e){
            setErrors(handleResponse(e));
        }
        setLoading(false);
        setErrors(undefined)
    }, []);

    return {create, loading, errors}
}