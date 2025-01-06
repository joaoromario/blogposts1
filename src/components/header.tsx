import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  Input,
  Button,
  Avatar,
  NavbarContent,
} from "@nextui-org/react";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold ">
          Discuss
        </Link>
      </NavbarBrand>

      {/* search input */}
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search" />
        </NavbarItem>
      </NavbarContent>

      {/* sign in/out buttons */}
      <NavbarContent justify="end">
        <NavbarItem>
          {session?.user ? <div>Signed In</div> : <div>Not Signed In</div>}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
