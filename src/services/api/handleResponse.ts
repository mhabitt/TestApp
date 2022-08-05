import {
    BadRequestException,
    ForbiddenException,
    NotAllowedException,
    NotFoundException,
    UnauthorizedException,
    UnknownException,
    UnprocessableEntity
} from "./exceptions";

export const handleResponse = (response: any) => {
    switch (response.status){
        case 200:
            return response;
        case 201:
            return response;
        case 400:
            throw new BadRequestException();
        case 422:
            throw new UnprocessableEntity(response.errors)
        case 401:
            throw new UnauthorizedException();
        case 403:
            throw new ForbiddenException();
        case 404:
            throw new NotFoundException();
        case 405:
            throw new NotAllowedException();
        default:
            throw new UnknownException();
    }
}
