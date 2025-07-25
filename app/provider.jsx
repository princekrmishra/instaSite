"use client"
import React, { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Header from '@/components/custom/Header';
import { MessagesContext } from '@/context/Messages.context';
import { UserDetailContext } from '@/context/UserDetails.context';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useConvex } from 'convex/react';
import { api } from "@/convex/_generated/api";

function Provider({children}) {
  const [messages, setMessages] = useState();
  const [userDetail, setUserDetail] = useState();
  const convex = useConvex();

  useEffect(() => {
    isAuthenticated();
  }, [])

  const isAuthenticated = async () => {
    if(typeof window !== undefined){
      const user = JSON.parse(localStorage.getItem('user'));
      //fetch from db
      const result = await convex.query(api.users.GetUser, {
        email: user?.email
      }
      )
      setUserDetail(result);
      console.log(result);
    }
  }
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_KEY}>
        <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
          <MessagesContext.Provider value={{messages, setMessages}}>
            <NextThemesProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <Header />
                {children}
            </NextThemesProvider>
          </MessagesContext.Provider>
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>;
    </div>
  )
}

export default Provider;
