import {useLocation} from 'react-router-dom'

const NotFound = () => {
    const location = useLocation()
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <code>{location.pathname}</code>
        </div>
    )
}

export default NotFound