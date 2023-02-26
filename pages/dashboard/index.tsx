import { useUsersStore } from "@/store/useUsersStore";
import { useEffect } from "react";
import AdminDashboard from "./AdminDashboard";
import ClientDashboard from "./ClientDashboard";

const Dashboard = ({ children }: any) => {
  const user = useUsersStore();
  const { role, name } = user.data;
  const { isLoading, error } = user;

  useEffect(() => {
    user.getUser();
  }, []);

  const showDashboard = () => {
    if (!isLoading) {
      switch (role) {
        case "admin":
          return <AdminDashboard />;
        case "client":
          return <ClientDashboard children={children} />;
      }
    }
  };

  return (
    <div>
      {/* {isLoading ? <p>loading...</p> : <h1>Hi {name}</h1>} */}
      {showDashboard()}
    </div>
  );
};

export default Dashboard;
