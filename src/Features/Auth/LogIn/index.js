import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest, useLoading } from "../authSlice";
import Loader from "../../../Components/Loader";
import { useNavigate } from "react-router-dom";
import useAuthorization from "../../../hooks/useAuthorization";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useLoading();
  const { isAuthorized } = useAuthorization();

  const [values, setValues] = useState({ userName: "", password: "" });

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(() => {
    const { userName, password } = values;
    dispatch(loginRequest({ userName, password }));
  }, [dispatch, values]);

  useEffect(() => {
    if (isAuthorized) {
      navigate("/"); // Navigate to home page when authorized
    }
  }, [isAuthorized, navigate]);

  return (
    <>
      <Loader isLoading={loading} />
      {!loading && (
        <section className="bg-gray-50 dark:bg-gray-900">
          <div
            style={{ height: "calc(100vh - 100px)" }}
            className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
          >
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <div>
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    UserName
                  </label>
                  <input
                    type="userName"
                    name="userName"
                    id="userName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <button
                  disabled={!values.userName || !values.password}
                  onClick={onSubmit}
                  type="submit"
                  className="w-full text-white bg-primary-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default LoginPage;
