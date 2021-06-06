import { useEffect } from "react";
import Events from "./Events";

function Car() {
  useEffect(() => {
    const car = new Events();
    car.start();
    car.render();
  }, []);

  return <div id="container"></div>;
}

export default Car;
