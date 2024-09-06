import jwt, { JwtPayload } from "jsonwebtoken"


export const tokenValidation = (token: string): JwtPayload | any => {

    try {
        return jwt.decode(token) as JwtPayload;        
    }catch(e){
        console.log("invalid token");
        return null;
    }
};

export const isTokenValid= (token: string) =>{

const decoded = tokenValidation(token);
if(!decoded) return false;

const currentTime= Date.now()/1000;// get time in seconds
return decoded.exp ? decoded.exp > currentTime : false;
}