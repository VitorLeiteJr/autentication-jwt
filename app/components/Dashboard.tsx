'use client'
import { isTokenValid } from '@/util/authJWT';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface dashboardProps{
nickName: string | undefined;
id: number;
}

const Dashboard = ({nickName, id}: dashboardProps) => {

    const [isAutenticate, setIsAutenticate] = useState(false);
    const route = useRouter(); 
  
    useEffect(()=>{
      const token = localStorage.getItem("token") as string;
      if(token && isTokenValid(token)){
        setIsAutenticate(true);
      }
      else {
        setIsAutenticate(false)
        route.push("/login");
      }
  
    },[route]);
  
  
  
    return (    
      (isAutenticate) ? (<div>autenticate, {nickName}</div>) : <div>dont autenticate</div>
    )
  }
export default Dashboard