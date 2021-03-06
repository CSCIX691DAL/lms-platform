import { setAuthCookies } from "next-firebase-auth";
import initAuth from "../../initAuth";

initAuth();

const handler = async (req, res) => {
  try {
    await setAuthCookies(req, res);
    // console.log(res);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(500).json({ error: "Unexpected error:" + e });
  }

  return res.status(200).json({ status: true });
};

export default handler;
