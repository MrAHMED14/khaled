NextAuth with MongoDB + Server Actions

I. Main functions.
  - SignIn with OAuth ( Google )
  - Middleware to secure certain pages

II. Implementation Guide.

  1. Setup Nextjs
    - npx create-next-app@latest ./
    √ Would you like to use TypeScript with this project? ... No 
    √ Would you like to use ESLint with this project? ... No 
    √ Would you like to use Tailwind CSS with this project? ... No 
    √ Would you like to use `src/` directory with this project? ... No 
    √ Use App Router (recommended)? ... Yes
    √ Would you like to customize the default import alias? ... No 

    - next: "13.4.7" or Later
    - next.config:
      experimental:{
        serverActions: true
      }

  2. Setup Libraries
    - npm i mongoose next-auth jsonwebtoken nodemailer

  3. Config Next-Auth
    - context => Provider
    - api/auth/[...nextauth]/route.js
    - .env 
      + NEXTAUTH_URL=http://localhost:3000
      + NEXTAUTH_SECRET=YOUR_SECRET ( openssl rand -base64 32 )

  4. Header Component and Pages
    - Protected (client, server)
    - Profile (client, server)
    - Signin, SignUp

  5. SignIn with Oauth ( Google ) without Database
    - Import GoogleProvider 
    - Access to Google Cloud Console to get ( GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET )
      + https://console.cloud.google.com/
      + create a new project
      + APIs & Services => Credentials => CREATE CREDENTIALS => OAuth client ID
        => Web application => Authorized JavaScript origins ( http://localhost:3000 )
        => Authorized redirect URIs ( http://localhost:3000/api/auth/callback/google )

    - SignIn Component
    - Google Login Button

  6. SignOut and Middleware keep the site protected
    - SignOut component
    - Middleware
      + export {default} from 'next-auth/middleware'
      + export const config = { 
          matcher: ["/profile/:path*", "/protected/:path*", "/dashboard/:path*"] 
        }
    
    - Protected Page Render

  7. Setup MongoDB (mongoose)
    - Models ( user )
    - Connect to MongoDb

  8. SignIn with Oauth ( Google ) with Database (mongoose)
    - callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          return true;
        },
        async jwt({token, trigger, session}){
          return token;
        },
        async session({session, token}){
          return session;
        }
      }

    - async signIn => signInWithOAuth 
    - async jwt => getUserByEmail 
    - async session => session.user = token.user
  
  9. Profile Page Render
    - Profile Component
    - ProfileCard Component
    - nextConfig = {
        images: {
          domains: ["lh3.googleusercontent.com", "images.pexels.com"]
        }
      }

    - restart => npm run dev

  10. Update User Profile
    - ProfileUpdate Component
    - Form Component
    - updateUser Action
    - Button Component

  12. Middleware protect routes based on role Admin

  13. Deploy Vercel
    - run build => test
    - push to github
    - deploy vercel
    - config NEXTAUTH_URL in Environment Variables => re-deploy
    - config in Google Cloud Console
