import { Request } from "express"

const loginUser = async(req: Request) => {
    const data = "await req.body";
    
    return data
}

export const AuthService = {
    loginUser
}