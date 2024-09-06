"use client"
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginPage = () => {


  const route = useRouter()
   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const pw = formData.get("pw") as string;
    

   const sendCredentials = await axios.post("/api/login", {email,pw});

   if(sendCredentials.data.Error){
    alert("something wrong");
   }else{
    localStorage.setItem("token", sendCredentials.data.tokenData.token);
    
    route.push('/dashboard');
   }
   }

  return (
    
<div className="bg-white">  
  <div className="flex h-screen flex-col items-center justify-center">    
    <div className="max-h-auto mx-auto max-w-xl">      
      <div className="mb-8 space-y-3">
        <p className="text-xl font-semibold">Login</p>
        <p className="text-gray-500">Enter your email, and password</p>
      </div>

      <form className="w-full" onSubmit={handleLogin}>
        <div className="mb-10 space-y-3">
          <div className="space-y-1">
            <div className="space-y-2">              
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
              <input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"  placeholder="your@email.com" name="email" type="text"/>
            </div>
          </div>
          <div className="space-y-1">
            <div className="space-y-2">              
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Pw</label>
              <input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="your pw" name="pw" type="password"/>
            </div>
            </div>          
          <button className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit">Login</button>
        </div>
      </form>   
      
      </div>
  </div>
</div>
  )
}

export default LoginPage