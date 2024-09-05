"use client";

import HeaderContainer from "@/components/header-container";
import ProjectCard from "@/components/project-card";
import SkillsTechno from "@/components/skills-techno";
import TitleInterSection from "@/components/title-inter-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto mt-14 gap-10 relative">
      <HeaderContainer />
      <main>
        <TitleInterSection title="Projets" />

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-0">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>

        <TitleInterSection title="A propos" />

        <section className="flex gap-6 md:flex-row flex-col-reverse">
          <div className="px-5 md:px-0  flex flex-col gap-8 md:max-w-[50%] justify-between">
            <p className="text-xl text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos et
              repellendus facere voluptates dolorem nam, autem obcaecati neque
              perspiciatis impedit incidunt debitis aperiam architecto ipsa iste
              porro, molestiae in sed.
            </p>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos et
            </p>
            <h3 className="text-4xl font-bold">Skills</h3>

            <div className="flex gap-6 lg:justify-between flex-start mx-6">
              <SkillsTechno techno="Techno1" image="/assets/avatar2.png" />
              <SkillsTechno techno="Techno2" image="/assets/avatar2.png" />
              <SkillsTechno techno="Techno3" image="/assets/avatar2.png" />
            </div>
          </div>
          <Image
            src="/assets/avatar2.png"
            alt="Samuel Armagnac"
            width={500}
            height={500}
            className="rounded-lg md:h-[375px] lg:h-[500px]"
          />
        </section>
      </main>
    </div>
  );
}
