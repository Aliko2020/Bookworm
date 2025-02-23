import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { setAuthState } from "./authSlice";
import { useEffect } from "react";

const useAuthListener = () => {
    const { isLoading, isAuthenticated, user } = useAuth0();
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("useAuthListener - user:", user);
        dispatch(setAuthState({ isAuthenticated, isLoading, user }));
    }, [isLoading, isAuthenticated, user, dispatch]);

    return { isAuthenticated, isLoading };
}

export default useAuthListener;
