import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        console.log(data);
        setJob(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, []);
  return loading ? <h2>Loading...</h2> : <h1>{job.title}</h1>;
};

export default JobPage;
