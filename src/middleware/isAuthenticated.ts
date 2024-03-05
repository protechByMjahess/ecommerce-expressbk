import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

declare global {
    namespace Express {
        interface Request {
            User_data?: User;
        }
    }
}
export const adminAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers["authorization"]) {
        return res.status(400).json({ success: false, message: "no authorization headers available" });
    }

    const header: any = req.headers["authorization"];
    const parts: string[] = header.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(400).json({ success: false, message: "invalid auth header" });
    }

    const token: string = parts[1];

    let tokenbody: any;
    try {
        tokenbody = jwt.verify(token, "youtube");
    } catch (err) {
        return res.status(400).json({ success: false, message: "invalid token" });
    }

    if (!tokenbody.userId && !tokenbody.role) {
        return res.status(400).json({ success: false, message: "invalid token" });
    }

    const user = await User.findOne({ where: { id: tokenbody.userId } });
    if (!user) {
        return res.status(400).json({ success: false, message: "user not found" });
    }

    if (tokenbody.role !== "admin") {
        return res.status(403).json({ success: false, message: "admin is not authorized" });
    }

    req.User_data = user;
    next();
};



export const userAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers["authorization"]) {
        return res.status(400).json({ success: false, message: "no authorization headers available" });
    }

    const header: any = req.headers["authorization"];
    const parts: string[] = header.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(400).json({ success: false, message: "invalid auth header" });
    }

    const token: string = parts[1];

    let tokenbody: any;
    try {
        tokenbody = jwt.verify(token, "youtube");
    } catch (err) {
        return res.status(400).json({ success: false, message: "invalid token" });
    }

    if (!tokenbody.userId && !tokenbody.role) {
        return res.status(400).json({ success: false, message: "invalid token" });
    }

    const user = await User.findOne({ where: { id: tokenbody.userId } });
    if (!user) {
        return res.status(400).json({ success: false, message: "user not found" });
    }

    if (tokenbody.role !== "user") {
        return res.status(403).json({ success: false, message: "user is not authorized" });
    }

    req.User_data = user;
    next();
};
