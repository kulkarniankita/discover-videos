export default async function stats(req, resp) {
  if (req.method === "POST") {
    resp.send({ msg: "it works" });
  }
}
