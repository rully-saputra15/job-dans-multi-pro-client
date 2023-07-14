import { FC, memo } from "react";

type InputProps = {
  id: string;
  type: string;
  isRequired: boolean;
};

const Input: FC<InputProps> = ({ id, type, isRequired }) => {
  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={id}
      required={isRequired}
      className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
    />
  );
};

export default memo(Input);
