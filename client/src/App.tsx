import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
