import type { NextApiRequest, NextApiResponse } from "next";
import packageJSON from "../../package.json";

type ResponseData = {
  version?: string;
  error?: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  try {
    const version = packageJSON.version;
    res.status(200).json({ version });
  } catch (error) {
    res.status(500).json({ error });
  }
}
