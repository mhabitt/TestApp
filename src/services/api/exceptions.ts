import {ApiError} from "./types";

export class NotFoundException extends Error  {
    constructor() {
        super("Not found.");
    }
}

export class NotAllowedException extends Error  {
    constructor() {
        super("Not allowed method");
    }
}

export class ForbiddenException extends Error  {
    constructor(){
        super("Action Forbidden");
    }
}

export class UnauthorizedException extends Error  {
    constructor() {
        super("Unauthorized");
    }
}

export class UnprocessableEntity extends Error  {
    public readonly errors: ApiError[];

    constructor(errors: ApiError[]) {
        super("UnprocessableEntity");
        this.errors = errors;
    }
}

export class BadRequestException extends Error  {
    constructor() {
        super("BadRequest");
    }
}

export class UnknownException extends Error {
    constructor() {
        super("Unknown");
    }
}
