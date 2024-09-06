
import jwt, { JwtPayload } from "jsonwebtoken"


//const JWT_SECRET = process.env.JWT_SECRET || 'sa109dmdcloitj1z';

export const tokenValidation = (token: string): JwtPayload | any => {

    try {
        return jwt.decode(token) as JwtPayload;        
    }catch(e){
        console.log("invalid token");
        return null;
    }
};

export const isTokenValid= (token: string) =>{

const decodedTime = tokenValidation(token);
if(!decodedTime) return false;

const currentTime= Date.now()/1000;// get time in seconds
return decodedTime.exp ? decodedTime.exp > currentTime : false;
}


export const isJwt =(token: string) =>{
   
try{
       const decodedJWT =  jwt.verify(token, process.env.JWT_SECRET || 'sa109dmdcloitj1z');
       //if(!decodedJWT) return false;
       
       return decodedJWT;
    }catch(e){
        return false;
    }

      
}