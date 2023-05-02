"use client";

import { usePathname } from "next/navigation";
import { BiLockAlt } from "react-icons/bi";

export default function PathName() {
  const pathname = usePathname();

  return (
    <div className="flex items-center border border-border-color rounded p-2">
      <BiLockAlt size={15} />
      <p className="ml-2">{`https://techfans.in/${pathname}`}</p>
      <input
        className="outline-none border-none text-gray"
        type="search"
        name="search"
      />
    </div>
  );
}
