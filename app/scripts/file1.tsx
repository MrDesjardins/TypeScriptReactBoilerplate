import { ClassA } from "./fileToInclude";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HelloComponent } from "./helloComponent";
import "./file1.scss";
import { AppContainer } from "react-hot-loader";

const a = new ClassA();
const x = 2;
if (x === 2) {
  a.method1();
}


ReactDOM.render(<AppContainer><HelloComponent name="test" /></AppContainer>, document.getElementById("main"));


if (module.hot) {
  module.hot.accept("./helloComponent", () => {
    const NextApp: any = require<HelloComponent>("./helloComponent");
    ReactDOM.render(<AppContainer><NextApp /></AppContainer>, document.getElementById("main"));

  });
}