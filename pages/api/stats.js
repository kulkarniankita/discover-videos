import jwt from "jsonwebtoken";
import { findVideoIdByUser } from "../../lib/db/hasura";

export default async function stats(req, resp) {
  if (req.method === "POST") {
    console.log({ cookies: req.cookies });

    try {
      const token = req.cookies.token;
      if (!token) {
        resp.status(403).send({});
      } else {
        const videoId = req.query.videoId;
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log({ decoded });

        const userId = decodedToken.issuer;
        const findVideoId = await findVideoIdByUser(token, userId, videoId);
        resp.send({ msg: "it works", decodedToken, findVideoId });
      }
    } catch (error) {
      console.error("Error occurred /stats", error);
      resp.status(500).send({ done: false, error: error?.message });
    }
  }
}
