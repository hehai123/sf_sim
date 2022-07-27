import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Navigate from "./Navigate";
import Simdata from "./Simdata";
import Simdata2 from "./Simdata2";

export default function Data() {
  return (
    <>
      <Navigate />
      <Tabs>
        <Tab eventKey="1" title="Result 1">
          <Simdata />
        </Tab>
        <Tab eventKey="2" title="Result 2">
          <Simdata2 />
        </Tab>
      </Tabs>
    </>
  );
}
