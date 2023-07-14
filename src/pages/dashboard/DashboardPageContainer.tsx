import { useQuery } from "react-query";
import DashboardPage from "./DashboardPage";
import api from "../../utils/api";
import { toast } from "react-hot-toast";
import { Job } from "../../interfaces";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPageContainer = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [params, setParams] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { isLoading, refetch } = useQuery(
    ["jobs", params],
    () => api.getAllJob(params),
    {
      onSuccess: ({ data }) => {
        setJobs(data.message);
      },
      onError: (err: Error) => {
        toast.error(err.message);
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [params]);

  const handleSubmit = useCallback((ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const description = ev.currentTarget.description.value;

    const type =
      ev.currentTarget.description.type === "full-time" ? true : false;

    setParams(`?description=${description}&full_time=${type}`);
  }, []);

  const handleChangPage = useCallback((page: number) => {
    setCurrentPage(page);
    setParams(`?page=${page}`);
  }, []);

  const handleGoToJobDetail = useCallback(
    (id: string) => {
      if (id) navigate(`/job-detail/${id}`);
    },
    [navigate]
  );

  return (
    <DashboardPage
      isLoading={isLoading}
      currentPage={currentPage}
      jobs={jobs}
      handleSubmit={handleSubmit}
      handleGoToJobDetail={handleGoToJobDetail}
      handleChangPage={handleChangPage}
    />
  );
};

export default DashboardPageContainer;
