import { cookies } from "next/headers";
import Dashboard from "../components/Dashboard";


const DashboardPage = () => {

  const nickName = cookies().get("nickName")?.value;
  
  

  console.log(nickName);
 return <Dashboard 
  nickName={nickName}
  id={1}
  />
 
}

export default DashboardPage;