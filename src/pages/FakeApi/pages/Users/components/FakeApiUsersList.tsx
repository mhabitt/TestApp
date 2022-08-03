import {UserApi} from "../../../services/types";
import React from "react";
import FakeApiUsersListItem from "./FakeApiUsersListItem";

interface Props{
    users: UserApi[]
}

const FakeApiUsersList = (props: Props) => {
    const {users} = props;

    return <div data-testid={"users-list"}>
        Users
        {
            users.map((user, index) => <FakeApiUsersListItem user={user} key={user.id}/>)
        }
    </div>
}
export default FakeApiUsersList