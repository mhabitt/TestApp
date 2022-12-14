import React from 'react';
import {useForm} from "react-hook-form";
import {LoginFormApi} from "../types/types";
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../services/useAuth";
import {handleResponse} from "../../../services/api/handleResponse";


const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormApi>();
    const navigate = useNavigate();
    const auth = useAuth();
    const onSubmit = async (data: LoginFormApi) => {
        try{
            await auth.login(data);
            navigate("/")
        }catch (e){
            await handleResponse(e);
        }

    }

    return (
        <div className={"login-container"}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className={"form-group"}>
                    <input className={"form-control"} type={"text"} {...register("login")}/>
                </Form.Group>
                <Form.Group className={"form-group"}>
                    <input className={"form-control"} {...register("password")} type={"password"}/>
                </Form.Group>
                <Form.Group className={"form-group"}>
                    <Button variant={"primary"} type={"submit"}>
                        Zaloguj się
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default LoginForm;
