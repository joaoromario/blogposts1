"use client";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import * as actions from "@/actions";

export default function SearchInput() {
  const searchParams = useSearchParams();

  return (
    <form action={actions.search}>
      <Input
        name="term"
        placeholder="Search"
        defaultValue={searchParams.get("term") || ""}
        className="sm:w-52 lg:w-80 xl:w-96"
      />
    </form>
  );
}
