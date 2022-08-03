import {PostApi} from "../../pages/FakeApi/services/types";
import {useAuth} from "../auth";
import accessTokenService from "../accessTokenService";

const apiUrl = `${process.env.REACT_APP_API_URL}`;

const defaultHeaders = (): Record<string, string> => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer`
    }
}

class Api {

    static isAuthenticated = () => {
        if (!accessTokenService.get()) {
            window.location.replace("/login");
            return;
        }
    }

    static async post<T>(url: string, data: unknown): Promise<never | T> {
        this.isAuthenticated();
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "POST",
            headers: defaultHeaders(),
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    }

    static async get<T>(url: string): Promise<never | T> {
        this.isAuthenticated();
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "GET",
            headers: defaultHeaders()
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    }

    static async put<T>(url: string, data: unknown): Promise<never | T> {
        this.isAuthenticated();
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "PUT",
            headers: defaultHeaders(),
            body: JSON.stringify(data)
        })
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    }

    static async remove<T>(url: string): Promise<never | T> {
        this.isAuthenticated();
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "DELETE",
            headers: defaultHeaders()
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    }

    static async patch<T>(url: string, data: unknown): Promise<never | T> {
        this.isAuthenticated();
        const res = await fetch(`${apiUrl}/${url}`, {
            method: "PATCH",
            headers: defaultHeaders(),
            body: JSON.stringify(data)
        });
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    }
}

export default Api;