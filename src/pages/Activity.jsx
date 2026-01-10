import { useEffect, useState } from "react";
import { apiRequest } from "../api/api";

function Activity() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    apiRequest("/my-activity/", "GET", null, true)
      .then(setLogs);
  }, []);

  return (
    <>
      <h2>My Activity</h2>
      <ul>
        {logs.map((l, i) => (
          <li key={i}>
            {l.activity_type} - {l.created_at}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Activity;
