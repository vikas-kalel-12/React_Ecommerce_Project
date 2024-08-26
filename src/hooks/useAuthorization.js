import { useState, useEffect } from "react";
import { TOKEN } from "../utilities/CONSTANTS";
import { useAuthorizedUser } from "../Features/Auth/authSlice";

const useAuthorization = () => {
  const [isAuthorized, setIsAuthorized] = useState(() => {
    const token = localStorage.getItem(TOKEN);
    return Boolean(token);
  });

  const isLoggedIn = useAuthorizedUser();
  const token = localStorage.getItem(TOKEN);

  useEffect(() => {
    const shouldBeAuthorized = isLoggedIn || token;
    if (isAuthorized !== shouldBeAuthorized) {
      setIsAuthorized(shouldBeAuthorized);
    }
  }, [token, isLoggedIn, isAuthorized]);

  return { isAuthorized };
};

export default useAuthorization;
