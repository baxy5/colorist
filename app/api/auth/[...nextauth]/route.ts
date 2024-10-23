import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_SECRET;

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: clientId || "",
      clientSecret: clientSecret || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "",
  session: {
    maxAge: 24 * 60 * 60,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
