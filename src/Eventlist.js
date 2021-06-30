import React from "react";
import useSWR from "swr";
import Eventitem from "./Eventitem";
import { fetcher } from "./SwrHelper";

export default function Eventlist() {
  const { data } = useSWR("http://localhost:8080/events", fetcher);

  if (!data) {
    return <div className="container mt-5"> Loading... </div>;
  }

  return (
    <div className="container" id="eventtable">
      <div className="container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col"> </th> <th scope="col"> Date </th>{" "}
              <th scope="col"> Name </th> <th scope="col"> Artist </th>{" "}
              <th scope="col"> Price </th> <th scope="col"> </th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {data.map((event) => (
              <Eventitem event={event} key={event.id} />
            ))}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
    </div>
  );
}
