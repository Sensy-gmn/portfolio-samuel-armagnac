"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, MoveRight, X } from "lucide-react";

export default function HeaderButtonBottom() {
  return (
    <div className="flex gap-8 items-center justify-center">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="px-6 rounded-full" variant="outline">
            Contact
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="flex justify-between ">
            <div className="flex justify-between w-full">
              <Button
                className="flex flex-col gap-1"
                variant="outline"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/samuel-armagnac-8b0555172/",
                    "_blank"
                  );
                }}
              >
                <Linkedin />
              </Button>
              <Button
                className="flex flex-col gap-1 h-10"
                variant="outline"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/thefullman_/ ",
                    "_blank"
                  );
                }}
              >
                <Instagram />
              </Button>
              <Button
                className="flex flex-col gap-1 h-10"
                variant="outline"
                onClick={() => {
                  window.open("mailto:samuel.armagnac@gmail.com", "_blank");
                }}
              >
                <Mail />
              </Button>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="w-full">
              <div className="flex gap-1 justify-center items-center">
                <X />
                retour
              </div>
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <button
        className="flex gap-1 items-center text-white"
        onClick={() => {
          window.open("/assets/CVSamuelARMAGNAC.pdf", "_blank");
        }}
      >
        Télecharger CV
        <MoveRight />
      </button>
    </div>
  );
}
