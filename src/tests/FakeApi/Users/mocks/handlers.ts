import {rest} from "msw";

const apiUrl = `${process.env.REACT_APP_API_URL}`;

const usersListResponse = rest.get(`${apiUrl}/users`, (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json([{
            "id": 1,
            "name": "User #1"
        }, {
            "id": 2,
            "name": "User #2",
        }])
    )
})

export const handlers = [usersListResponse]