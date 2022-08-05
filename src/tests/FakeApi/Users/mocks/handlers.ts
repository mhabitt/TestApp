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

const createUser = rest.post(`${apiUrl}/users`, (req, res, ctx) => {
    return res(
        ctx.status(201),
        ctx.json({
            id: 11,
            name: "John Doe"
        })
    )
})

const removeUser = rest.delete(`${apiUrl}/users`, (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
        })
    )
})


export const handlers = [usersListResponse, createUser]