import { FC, FormEvent } from "react";
import { Job } from "../../interfaces";
import Loading from "../../components/Loading";
import Input from "../../components/Input";
import moment from "moment";

type DashboardPageProps = {
  isLoading: boolean;
  jobs: Job[];
  currentPage: number;
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
  handleChangPage: (page: number) => void;
  handleGoToJobDetail: (id: string) => void;
};

const DashboardPage: FC<DashboardPageProps> = ({
  isLoading,
  jobs,
  currentPage,
  handleSubmit,
  handleChangPage,
  handleGoToJobDetail,
}) => {
  return (
    <div className="flex flex-col justify-start items-start space-y-5 mx-5">
      <>
        <div className="flex flex-row space-x-3 justify-between w-full">
          <div className="flex flex-row items-center">
            <span className="font-bold text-2xl mr-2">Job List</span>
            <form className="flex flex-row space-x-3" onSubmit={handleSubmit}>
              <Input id="description" type="text" isRequired={false} />
              <select
                id="type"
                name="type"
                placeholder="type"
                className="rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Full Time</option>
                <option>Part Time</option>
              </select>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Search
              </button>
            </form>
          </div>
          <div className="space-x-2">
            {[1, 2].map((num: number) => (
              <button
                className={`px-2 py-1 ${
                  currentPage === num ? "bg-sky-400 text-white" : "text-black"
                } shadow-md rounded-lg`}
                onClick={() => handleChangPage(num)}
                key={num}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-wrap space-y-4 w-full">
          {isLoading ? (
            <Loading />
          ) : (
            jobs.map((job: Job) => (
              <div
                className="p-4 relative border border-gray-200 rounded-lg shadow-md flex flex-col space-y-2 transition ease-in-out duration-300 hover:scale-105"
                onClick={() => handleGoToJobDetail(job?.id)}
                key={job?.id}
              >
                <div className="flex flex-row space-x-2">
                  <span className="font-medium">{job?.title}</span>
                  <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                    {job?.type}
                  </span>
                </div>
                <span className="text-sm">Company: {job?.company}</span>
                <span className="absolute top-0 right-2 font-light text-xs">
                  {job?.location}
                </span>
                <span className="absolute bottom-2 right-2 font-light text-xs">
                  {moment(job?.created_at).fromNow()}
                </span>
              </div>
            ))
          )}
        </div>
      </>
    </div>
  );
};

export default DashboardPage;
