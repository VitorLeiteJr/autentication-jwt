import { cookies } from "next/headers";
import Dashboard from "../components/Dashboard";


const DashboardPage = () => {

  const nickName = String(cookies().get("nickName"));
  
 return <Dashboard 
  nickName={nickName}
  id={1}
  />
 
}

export default DashboardPage;