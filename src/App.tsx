import { RouterProvider } from "react-router-dom";
import routers from "./routers/routers";

const App = () => {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
};

export default App;
