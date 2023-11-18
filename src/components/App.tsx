import React, { useEffect, useState } from "react";
import {createDataContext, createItems, createNewCollection, createTable, getAllItems, initializePlugin}
  from "../scripts/codap-helper";
import "./App.css";

const kPluginName = "Sample Plugin";
const kVersion = "0.0.1";
const kInitialDimensions = {
  width: 380,
  height: 380
};
const kDataContextName = "SamplePluginData";

export const App = () => {
  const [codapResponse, setCodapResponse] = useState<any>(undefined);

  useEffect(() => {
    initializePlugin({pluginName: kPluginName, version: kVersion, dimensions: kInitialDimensions});
  }, []);

  const handleOpenTable = () => {
    createTable();
  };

  const handleCreateData = async() => {
    createDataContext(kDataContextName);
    createNewCollection(kDataContextName, "Pets", [{name: "type", type: "string"}, {name: "number", type: "number"}]);
    createItems(kDataContextName, [ {type: "dog", number: 5},
                                    {type: "cat", number: 4},
                                    {type: "fish", number: 20},
                                    {type: "horse", number: 1},
                                    {type: "bird", number: 8},
                                    {type: "hamster", number: 3}
                                  ]);
    setCodapResponse("Data created! Open the table.");
  };

  const handleGetResponse = async () => {
    const result = await getAllItems(kDataContextName);
    setCodapResponse(result);
  };

  console.log("codapResponse", codapResponse);
  return (
    <div className="App">
      This is the CODAP Starter Plugin
      <div className="buttons">
        <button onClick={handleCreateData}>
          Create some data
        </button>
        <button onClick={handleOpenTable}>
          Open Table
        </button>
        <button onClick={handleGetResponse}>
          See getAllItems response
        </button>
        <div className="response">
          Response:
          <div>
          {codapResponse && `${JSON.stringify(codapResponse, null, "\t")}`}
          </div>
        </div>
      </div>
    </div>
  );
};
