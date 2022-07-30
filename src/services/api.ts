export const useApi = () => {

    const defaultHeaders = (): Record<string, string> => {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer `
        }
    }

    const post = async (url: string, data: any) => {
        const res = await fetch(`${process.env.API_URL}/${url}`, {
            method: "POST",
            headers: defaultHeaders(),
            body: JSON.stringify(data)
        });
        return await res.json();
    }

    const get = async (url: string) => {
        const res = await fetch(`${process.env.API_URL}/${url}`, {
            method: "GET",
            headers: defaultHeaders()
        });
        return await res.json();
    }

    const put = async (url: string, data: any) => {
        const res = await fetch(`${process.env.API_URL}/${url}`, {
            method: "PUT",
            headers: defaultHeaders(),
            body: JSON.stringify(data)
        })
        return await res.json();
    }

    const remove = async (url: string) => {
        const res = await fetch(`${process.env.API_URL}/${url}`, {
            method: "DELETE",
            headers: defaultHeaders()
        });
        return await res.json();
    }

    const patch = async (url: string, data: any) => {
        const res = await fetch(`${process.env.API_URL}/${url}`, {
            method: "PATCH",
            headers: defaultHeaders(),
            body: JSON.stringify(data)
        });
        return await res.json();
    }

    return {post, get, put, remove, patch}

}