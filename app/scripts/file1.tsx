  import { ClassA } from "./fileToInclude";
  import * as React from "react";
  import * as ReactDOM from "react-dom";
  import { Component } from "./component1";

  const a = new ClassA();
  const x = 2;
  if (x === 2) {
    a.method1();
  }

  const elementToRender = <Component name="Test"/>;
  ReactDOM.render(elementToRender, document.getElementById("main"));