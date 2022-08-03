import {Link, Outlet} from "react-router-dom";

const FakeApiPage = () => {
    return <>FakeApi
        <Link to={`/fake_api/posts`}>Posty</Link>
        <Link to={`/fake_api/users`}>Użytkownicy</Link>
        <Outlet/>
    </>
}
export default FakeApiPage


