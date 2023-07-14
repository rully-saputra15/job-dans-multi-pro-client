import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";

import JobDetailPage from "./JobDetailPage";
import api from "../../utils/api";
import { Job } from "../../interfaces";

const JobDetailPageContainer = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job>({
    id: "",
    type: "",
    title: "",
    created_at: "",
    url: "",
    company: "",
    company_url: "",
    location: "",
    description: "",
    how_to_apply: "",
    company_logo: "",
  });

  const navigate = useNavigate();

  const { isLoading } = useQuery(
    ["job-detail", id],
    () => api.getJobById(id as string),
    {
      onSuccess: ({ data }) => {
        setJob(data.message);
      },
      onError: (err: Error) => {
        toast.error(err.message);
      },
    }
  );

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <JobDetailPage
      job={job}
      isLoading={isLoading}
      handleGoBack={handleGoBack}
    />
  );
};

export default JobDetailPageContainer;
