import { Navigate, Outlet } from "react-router-dom";
import { LeftBar, NavBar, RightBar } from "../../components";
import "./index.scss";

const user = true;

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // const { user } = useSelector((state: RootState) => state.auth);
  if (!user) return <Navigate to="/login" />;
  return children;
};

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="layout-container">
        <LeftBar />
        <div className="outlet-container">
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};
