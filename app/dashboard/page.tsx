"use client";

import React from "react";
import Layout from "./layout";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>not authorized</p>
        <button
          onClick={() =>
            signIn("google", { callbackUrl: "http://localhost:3000/dashboard" })
          }
        >
          sign in with google
        </button>
      </div>
    );
  }

  return (
    <Layout>
      <div>
        <h1>dashboard</h1>
        <p>signed in as {session.user?.name}</p>
        <p>{session.user?.email}</p>
        <Image
          src={session.user?.image as string}
          alt=""
          width={40}
          height={40}
        />
        <button onClick={() => signOut()}>sign out</button>
      </div>
    </Layout>
  );
};

export default Dashboard;
