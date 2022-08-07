// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  response: string;
  err: any;
};

async function fetchAPI(url: string) {
  try {
    const { data } = await axios.get(url);
    return { data };
  } catch (err) {
    return { err };
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url } = req.body;
  const { data, err } = await fetchAPI(url);

  res.status(200).json({ response: data, err: err });
}
