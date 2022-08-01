import {ApiError} from "./types";

export const mockUnprocessableEntity = (errors: ApiError[]) => {
    return {
        status: 422,
        message: "Unprocessable Entity",
        errors: errors
    }
}