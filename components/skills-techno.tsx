import Image from "next/image";

export default function SkillsTechno({
  techno,
  image,
}: {
  techno: string;
  image: string;
}) {
  return (
    <div className="text-xl">
      <Image src={image} alt={techno} width={75} height={75} />
      {techno}
    </div>
  );
}
