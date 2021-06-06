import { useEffect } from "react";
import LoadModel from "./LoadModel";

function Car() {
  useEffect(() => {
    const car = new LoadModel();
    car.start();
    car.render();
  }, []);

  return <div id="container"></div>;
}

export default Car;
