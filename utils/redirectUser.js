import { verifyToken } from "../lib/utils";

const useRedirectUser = async (context) => {
  const token = context.req ? context.req.cookies?.token : null;

  const userId = await verifyToken(token);

  return {
    userId,
    token,
  };
};

export default useRedirectUser;
