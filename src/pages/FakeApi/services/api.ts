import Api from "../../../services/api/api";
import {PostApi} from "./types";

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

    static async remove(id: number): Promise<PostApi>{
        return Api.remove(`posts/${id}`)
    }
}

