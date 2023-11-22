import React, { useEffect, useState } from "react";
import {createDataContext, createItems, createNewCollection, createTable, getAllItems, getDataContext, initializePlugin}
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

  const handleOpenTable = async () => {
    const res = await createTable();
    setCodapResponse(res);
  };

  const handleCreateData = async() => {
    const existingDataContext = await getDataContext(kDataContextName);
    let createDC, createNC, createI;
    if (!existingDataContext.success) {
      createDC = await createDataContext(kDataContextName);
    }
    if (existingDataContext?.success || createDC?.success) {
      createNC = await createNewCollection(kDataContextName, "Pets", [{name: "type", type: "string"}, {name: "number", type: "number"}]);
      createI = await createItems(kDataContextName, [ {type: "dog", number: 5},
                                      {type: "cat", number: 4},
                                      {type: "fish", number: 20},
                                      {type: "horse", number: 1},
                                      {type: "bird", number: 8},
                                      {type: "hamster", number: 3}
                                    ]);
    }

    setCodapResponse(`Data context created: ${JSON.stringify(createDC)}
    New collection created: ${JSON.stringify(createNC)}
    New items created: ${JSON.stringify(createI)}`
                    );
  };

  const handleGetResponse = async () => {
    const result = await getAllItems(kDataContextName);
    setCodapResponse(result);
  };

  return (
    <div className="App">
      CODAP Starter Plugin
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
        <div className="response-area">
          <span>Response:</span>
          <div className="response">
            {codapResponse && `${JSON.stringify(codapResponse, null, "  ")}`}
          </div>
        </div>
      </div>
    </div>
  );
};
