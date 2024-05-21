import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Table from "./components/ViewTicket";
import InfoUser from "./components/InfoUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; 

const tableData = [
  {
    id: 1,
    Ticket: "ABC123",
    Date: "2024-05-02",
    Time: "7:00 PM",
    Outbuilding: "Building B",
  }
];

const App = () => (
  <BrowserRouter>
    <div className="container supercontainer">
      <div className="row">
        <div className="col-md-6">
          <Table data={tableData} columns={["id", "Ticket", "Date", "Time", "Outbuilding"]} />
        </div>
        <div className="col-md-6">
          <InfoUser />
        </div>
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
