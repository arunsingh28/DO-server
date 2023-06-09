import { Request, Response } from "express";
import userModel from "../../Models/user.model";
import tokens from "../../Utils/tokens";

// send the user profile
const profile = async (req: Request, res: Response) => {
    try {
        const user = await userModel.findById(req.params.id).exec()
        if (user) {
            if (user.profileTimeline === 'init') {
                return res.status(200).json({
                    success: true,
                    data: user,
                    statusCode: res.statusCode,
                });
            }
        } else {
            return res.status(404).json({
                message: "User not found",
                success: false,
                data: null,
                statusCode: res.statusCode,
            });
        }
    } catch (error: any) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
            success: false,
            statusCode: res.statusCode,
        });
    }
}

export default { profile }