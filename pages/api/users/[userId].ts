import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method !== "GET") {
        res.status(405).end();
    }

    try {
        const {userId} = req.query;
        if(!userId || typeof userId !== "string") {
            throw new Error("invalid ID");
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        const followersCount = await prisma.user.count({
            where: {
                followWingIds: {
                    has: userId
                }
            }
        })
        res.status(200).json({existingUser, followersCount})

    } catch (error) {
        console.log(error);
        res.status(400).end();
    }
}