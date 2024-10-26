import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  theme: {
    brandColor: "#1ED2AF",
    logo: "/logo.png",
    buttonText: "#ffffff",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async authorized({ auth }) {
      // Logged in users are authenticated; otherwise, redirect to the login page
      return !!auth;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to the home page after successful login
      return baseUrl; // This redirects to the home page
    },
  },
  secret: process.env.AUTH_SECRET,  // Add this line to use your AUTH_SECRET
});
