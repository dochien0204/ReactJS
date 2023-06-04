import { Link } from "react-router-dom"

const HomePage = () => {
    return <>
    <div>Home Page</div>
    <Link to="/login">Go to Login page</Link>
    </>
}

export default HomePage