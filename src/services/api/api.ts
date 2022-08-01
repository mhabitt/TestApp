const apiUrl = `${process.env.REACT_APP_API_URL}`;

const defaultHeaders = (): Record<string, string> => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer`
    }
}

class Api{
    static async post(url: string, data: any){
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "POST",
            headers: defaultHeaders(),
            body: JSON.stringify(data)
        });
        if(res.ok){
            return await res.json();
        }
        return Promise.reject(res);
    }

    static async get(url: string){
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "GET",
            headers: defaultHeaders()
        });
        if(res.ok){
            return await res.json();
        }
        return Promise.reject(res);
    }

    static async put(url: string, data: any){
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "PUT",
            headers: defaultHeaders(),
            body: JSON.stringify(data)
        })
        if(res.ok){
            return await res.json();
        }
        return Promise.reject(res);
    }

    static async remove(url: string){
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "DELETE",
            headers: defaultHeaders()
        });
        if(res.ok){
            return await res.json();
        }
        return Promise.reject(res);
    }

    static async patch(url: string, data: any){
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "PATCH",
            headers: defaultHeaders(),
            body: JSON.stringify(data)
        });
        if(res.ok){
            return await res.json();
        }
        return Promise.reject(res);
    }
}
export default Api;