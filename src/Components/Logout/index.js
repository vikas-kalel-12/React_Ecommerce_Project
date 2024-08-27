import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Features/Auth/authSlice";
import useAuthorization from "../../hooks/useAuthorization";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthorized } = useAuthorization();

  useEffect(() => {
    dispatch(logout());
  }, []);

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/login");
    }
  }, [isAuthorized]);

  return null;
}

export default Logout;
