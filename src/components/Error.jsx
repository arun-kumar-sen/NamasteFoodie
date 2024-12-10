import { useRouteError } from "react-router-dom";

const Error = () => {
  console.log("a");
  const err = useRouteError();
  return (
    <div>
      <h1>Oops</h1>
      <h3>
        {err.status}:{err?.statusText}
      </h3>
      <h2>Something went wrong :)</h2>
    </div>
  );
};

export default Error;
