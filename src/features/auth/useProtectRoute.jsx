import { Navigate } from "react-router-dom";

function ProtectedRoute({children, auth}) {
    const {isLoading, isAuthenticated} = auth;
    
    console.log(isAuthenticated);
    
    if (isLoading) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <p>Loading...</p>
            </div>
        );
    }
    
    if (isAuthenticated) return children;

    return <Navigate to="/" />;
}

export default ProtectedRoute;
