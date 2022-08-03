import Api from "../../../services/api/api";
import {PostApi, UserApi} from "./types";

export default class FakeApiService{
    static async getPosts(): Promise<PostApi[]>{
        return Api.get("posts")
    }

    static async createPost(data: PostApi): Promise<PostApi>{
        return Api.post("posts", data)
    }

    static async updatePost(data: PostApi): Promise<PostApi>{
        return Api.put(`posts/${data.id}`, data)
    }

    static async getPost(id: number): Promise<PostApi>{
        return Api.get(`posts/${id}`)
    }

    static async removePost(id: number): Promise<PostApi>{
        return Api.remove(`posts/${id}`)
    }

    static async getUsers(): Promise<UserApi[]>{
        return Api.get("users")
    }

    static async createUser(data: UserApi): Promise<UserApi>{
        return Api.post("users", data)
    }

    static async updateUser(data: UserApi): Promise<UserApi>{
        return Api.put(`users/${data.id}`, data)
    }

    static async getUser(id: number): Promise<UserApi>{
        return Api.get(`users/${id}`)
    }

    static async removeUser(id: number): Promise<UserApi>{
        return Api.remove(`users/${id}`)
    }
    
}

