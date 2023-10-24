import React from "react";
import './style.css';
import { useState } from "react";
import {BlocklyWorkspace} from "react-blockly";

const GameDesign = () => {
  const [xml, setXml] = useState();
  const toolboxConfiguration = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <BlocklyWorkspace
        className="work-space"
        initialXml={xml}
        onXmlChange={setXml}
        toolboxConfiguration={toolboxConfiguration}
      />
    </div>
  );
};

export default GameDesign;
