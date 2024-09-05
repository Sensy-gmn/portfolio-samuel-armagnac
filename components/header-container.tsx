"use client";

import HeaderButtonBottom from "@/components/header-button-bottom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeaderContainer() {
  return (
    <header className="flex flex-col bg-gradient-to-b from-blue-900 to-purple-900 h-[50vh] rounded-lg mx-5 md:mx-0">
      <div className="mx-[5%] lg:mx-[20%] items-center justify-center text-center flex flex-col gap-10 lg:h-[85%]">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
          Samuel Armagnac
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          maiores at exercitationem quisquam
        </p>
        <HeaderButtonBottom />
      </div>
    </header>
  );
}
