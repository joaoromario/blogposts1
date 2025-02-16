import React, { Suspense } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
} from "@nextui-org/react";
import HeaderAuth from "./headerAuth";
import SearchInput from "./searchInput";

export default function Header() {
  return (
    <Navbar className="shadow mb-6" maxWidth="full">
      <NavbarBrand>
        <Link href="/" className="font-bold ">
          Discuss
        </Link>
      </NavbarBrand>

      {/* search input */}
      <NavbarContent className="sm:flex sm:w-40 lg:w-80">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      {/* sign in/out buttons */}
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
