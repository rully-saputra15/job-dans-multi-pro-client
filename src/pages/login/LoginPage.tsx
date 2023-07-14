import { FC, FormEvent } from "react";
import Loading from "../../components/Loading";
import Input from "../../components/Input";

type LoginPageProps = {
  isLoading: boolean;
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
};

const LoginPage: FC<LoginPageProps> = ({ isLoading, handleSubmit }) => {
  return (
    <div className="p-4 m-4 border border-sky-300 flex flex-col space-y-3 rounded-xl shadow-md">
      <span className="font-bold text-2xl">Login</span>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="username"
            className="text-md font-medium leading-6 text-gray-900 justify-self-start"
          >
            Username
          </label>
          <div className="mt-2">
            <Input id="username" type="text" isRequired />
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-md font-medium leading-6 text-gray-900 justify-self-start"
          >
            Password
          </label>
          <div className="mt-2">
            <Input id="password" type="password" isRequired />
          </div>
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          {isLoading ? <Loading /> : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
