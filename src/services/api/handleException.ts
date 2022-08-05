import {ApiError} from "./types";
import {
    BadRequestException,
    ForbiddenException,
    NotAllowedException,
    NotFoundException,
    UnauthorizedException, UnprocessableEntity
} from "./exceptions";

export default function handleException(exception: unknown): Array<ApiError> {
    if (!(exception instanceof Error)) {
        throw exception
    }
    if (exception instanceof BadRequestException) {
        return [{
            message: "wrong_data",
            code: "wrong_data"
        }];
    }

    if (exception instanceof NotFoundException) {
        return [{
            message: "not_found",
            code: "not_found"
        }];
    }
    if (exception instanceof ForbiddenException) {
        return [{
            message: "access_forbidden",
            code: "access_forbidden"
        }];
    }
    if (exception instanceof UnauthorizedException) {
        return [{
            message: "unauthorized",
            code: "unauthorized",
        }];
    }

    if (exception instanceof NotAllowedException) {
        return [{
            message: "not_allowed",
            code: "not_allowed",
        }];
    }

    if(exception instanceof UnprocessableEntity) {
        return exception.errors;
    }

    return [{
        message: "unknown_error",
        code: 'unknown_error'
    }];

}
