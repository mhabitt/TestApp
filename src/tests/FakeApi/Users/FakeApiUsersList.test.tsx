import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {server} from "./server/server";
import FakeApiUsersPage from "../../../pages/FakeApi/pages/Users/FakeApiUsersPage";
import userEvent from "@testing-library/user-event";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Users List", () => {
    it("Should render users list when api responds", async () => {
        render(<FakeApiUsersPage/>);
        const out = await waitFor(() => screen.findByTestId("users-list"))
        expect(out).toBeInTheDocument();
    })
    it("Should render single user when api responds", async () => {
        render(<FakeApiUsersPage/>);
        const out = await waitFor(() => screen.findByTestId("user-1"))
        expect(out).toHaveTextContent("User #1")
    })
    it("Should render loading when waiting for response", () => {
        render(<FakeApiUsersPage/>);
        expect(screen.getByRole('loader')).toBeInTheDocument()
    })
    it("Should create user after click button", async () => {
        render(<FakeApiUsersPage/>);
        const out = await waitFor(() => screen.findByTestId("users-list"))
        expect(out).toBeInTheDocument();
        const button = await screen.findByTestId("add-user-button");
        userEvent.click(button);
        expect(await screen.findByText("John Doe")).toBeInTheDocument()
    })

    it("Should remove user after click button", async () => {
        render(<FakeApiUsersPage/>);
        const out = await waitFor(() => screen.findByTestId("users-list"))
        expect(out).toBeInTheDocument();
        const button = await screen.findByTestId("remove-user-button");
        userEvent.click(button);
        expect(await screen.findByText("User #1")).toBeInTheDocument()
    })

})
