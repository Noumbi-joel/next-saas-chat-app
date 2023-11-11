import Link from "next/link";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import LogoImage from "@logos/black.svg";

function Logo() {
  return (
    <Link href="/" prefetch={false}>
      <div className="flex items-center w-10 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={LogoImage}
            alt="logo"
            className="dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
