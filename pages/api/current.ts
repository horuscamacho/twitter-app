import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).end();
  }
  try {
    const { currentUser } = await serverAuth(req, res);

    res.status(200).send(currentUser);
  } catch (error) {
    res.end();
  }
}
