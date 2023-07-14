import { FC } from "react";
import { Job } from "../../interfaces";
import Loading from "../../components/Loading";
import { BiLocationPlus } from "react-icons/bi";
import moment from "moment";
type JobDetailPageProps = {
  job: Job;
  isLoading: boolean;
  handleGoBack: () => void;
};

const JobDetailPage: FC<JobDetailPageProps> = ({
  job,
  isLoading,
  handleGoBack,
}) => {
  return (
    <div className="flex flex-col justify-start ">
      <div
        className="font-bold text-lg cursor-pointer"
        onClick={() => handleGoBack()}
      >
        {`<-`} {job?.title}
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-row border border-gray-300 rounded-lg shadow-lg p-4 mt-3">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col space-y-3">
                <span className="text-lg flex flex-row items-center space-x-3">
                  <BiLocationPlus />
                  <span className="font-bold">{job.location}</span>
                </span>
                <span className="font-light text-md">{job.type}</span>
                <span className="font-light text-sm">
                  <a href={job.company_url} target="_blank">
                    {job.company}
                  </a>
                </span>
                <span className="font-light text-sm">
                  Posted: {moment(job.created_at).fromNow()}
                </span>
                <span className="font-light text-xs">
                  <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
                </span>
              </div>
              <img
                src={job.company_logo}
                className="w-56 h-56 aspect-auto"
                onError={({ currentTarget }) => {
                  currentTarget.src = "https://via.placeholder.com/500/92c952";
                }}
              />
            </div>

            <span className="w-full border border-gray-500 mt-3"></span>
            <div
              className="py-2"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailPage;
