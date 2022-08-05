import {handleResponse} from "./handleResponse";

export const useApi = () => {
    const apiUrl = `${process.env.REACT_APP_API_URL}`;

    const defaultHeaders = () => {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer`
        }
    }

    const post = async <T>(url: string, data: unknown): Promise<T> => {
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "POST",
            headers: defaultHeaders(),
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.resolve(handleResponse(res));
    }

    const get = async <T>(url: string): Promise<T> => {
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "GET",
            headers: defaultHeaders()
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.resolve(handleResponse(res));
    }

    const put = async <T>(url: string, data: unknown): Promise<T> => {
        try{
            const res = await fetch(`${apiUrl}/${url}`, {
                method: "PUT",
                headers: defaultHeaders(),
                body: JSON.stringify(data)
            });
            if(res.ok)
                return res.json();
            return Promise.reject(res);
        }
        catch(e){
            return Promise.reject(e);
        }
    }

    const remove = async <T>(url: string): Promise<T> => {
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "DELETE",
            headers: defaultHeaders()
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.resolve(handleResponse(res));
    }

    return {defaultHeaders, apiUrl, post, get, put, remove}
}