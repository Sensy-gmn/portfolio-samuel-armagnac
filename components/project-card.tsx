import { Badge } from "@/components/ui/badge";

export default function ProjectCard() {
  return (
    <article className="flex flex-col  rounded-lg gap-[15px] ">
      <h3 className="text-3xl font-bold">Titre 1</h3>
      <div className="flex gap-2">
        <Badge className="font-extralight">HTML</Badge>
        <Badge className="font-extralight">CSS</Badge>
        <Badge className="font-extralight">Rest API</Badge>
      </div>
      <div className="w-[100%] h-[200px] bg-blue-500 rounded-2xl"></div>
    </article>
  );
}
