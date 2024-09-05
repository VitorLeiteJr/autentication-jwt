import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export interface User {
    id: number;
    email: string;
    password: string; 
  }
  
  export const users: User[] = [
    {
      id: 1,
      email: 'vitor',
      password: '$2a$12$jiyRzpOkkC/XBqo5y1FQI..BsLovQrl95HKitMPaeYIls0C9lHcdO', // bcrypt hash for 'password123'
    },

  ];


export async function POST (req: NextRequest) {
         
    const body = await req.json();
    const {email, pw } = body;

    console.log(email,pw)

  const user = users.find((user)=>user.email===email);

  if(!user){
    return NextResponse.json({Error: "user not found", status: 404});
  }

  const passwordCheck = await bcrypt.compare(pw,user.password);
  
  if (!passwordCheck){
    return NextResponse.json({Error: "Password dont match", status: 404});
  }

  const token = jwt.sign({id:user.id, email: user.email}, 
    process.env.JWT_SECRET as string,
  { 
    expiresIn: 30
  });

return NextResponse.json({token: token}, {status: 200})
   
}