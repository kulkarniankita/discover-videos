import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Netflix SignIn</title>
      </Head>

      <header>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href="/">
            <a>
              <div className={styles.logoWrapper}>
                <Image
                  src="/static/netflix.svg"
                  alt="Netflix logo"
                  width="128px"
                  height="34px"
                />
              </div>
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Login;
