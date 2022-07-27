import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Login.module.css";

const Login = () => {
  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    console.log("hi button");
  };

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

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>

          <input
            type="text"
            placeholder="Email address"
            className={styles.emailInput}
          />

          <p className={styles.userMsg}></p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
