import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { RootState, useAppSelector } from "./store/store";
import "./App.css";

const App = () => {
  const { theme } = useAppSelector((state: RootState) => state.theme);
  return (
    <div data-theme={theme} className="w-full min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
