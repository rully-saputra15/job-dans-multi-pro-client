import { FormEvent, useCallback } from "react";
import { useMutation } from "react-query";
import Cookies from "js-cookie";

import LoginPage from "./LoginPage";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginPageContainer = () => {
  const navigate = useNavigate();
  const { mutate, isLoading = true } = useMutation(api.login, {
    onSuccess: ({ data }) => {
      Cookies.set("access_token", data.message.access_token);
      navigate("/dashboard");
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = useCallback((ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    mutate({
      username: ev.currentTarget.username.value,
      password: ev.currentTarget.password.value,
    });
  }, []);

  return <LoginPage isLoading={isLoading} handleSubmit={handleSubmit} />;
};

export default LoginPageContainer;
