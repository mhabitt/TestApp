import {useEffect} from "react";
import {Link, Outlet} from "react-router-dom";

const FakeApiPage = () => {
    return <>FakeApi
        <Link to={`/fake_api/posts`}>Posty</Link>
        <Outlet/>
    </>
}
export default FakeApiPage


