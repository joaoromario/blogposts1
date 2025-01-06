"use client";

import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";

import React from "react";

export default function HeaderAuth() {
  // requesting the backend server for the session data
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    // if the session is still loading, we don't want to show anything
    // so while we check the session status we don't get any flickering of components on the screen
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        {/* the PopoverContent is going to be triggered by what's inside the PopoverTrigger tag */}
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
