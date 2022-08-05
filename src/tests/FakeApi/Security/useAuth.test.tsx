import {useAuth} from "../../../services/useAuth";
import {act, renderHook} from "@testing-library/react-hooks";
import {LoginFormApi} from "../../../pages/Security/types/types";
import React, {FC, ReactNode} from "react";
import {Provider} from "react-redux";
import configureStore from "../../../services/configureStore";

const LoginUser: LoginFormApi = {
    login: "admin",
    password: ""
}

const mockStore = configureStore();

const wrapper: FC<{children: ReactNode}> = ({children}) => {
    return <Provider store={mockStore}>
        {children}
    </Provider>
}

describe("Login Page", () => {
    it("Should login user", async () => {
        const {result} = renderHook(() => useAuth(), {wrapper})

        act(() => {
            result.current.login({
                login: "admin",
                password: ""
            })
        })
        expect(result.current.isAuthenticated).toBe(true);
    })
    it("Should not login user", async () => {
        const {result} = renderHook(() => useAuth(), {wrapper})

        act(() => {
            result.current.login({
                login: "",
                password: ""
            })
        })
        expect(result.current.isAuthenticated).toBe(false);
    })
})