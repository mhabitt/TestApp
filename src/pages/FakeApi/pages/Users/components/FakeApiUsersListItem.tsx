import {UserApi} from "../../../../../types/types";

interface Props{
    user: UserApi
}

const FakeApiUsersListItem = (props: Props) => {
    const {user} = props;
    return <div data-testid={`user-${user.id}`}>
        {user.name}
    </div>
}
export default FakeApiUsersListItem