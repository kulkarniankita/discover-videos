export default async function login(req, res) {
  if (req.method === "POST") {
    try {
      res.send({ done: true });
    } catch (error) {
      console.error("Something went wrong logging in", error);
      res.status(500).send({ done: false });
    }
  } else {
    res.send({ done: false });
  }
}
