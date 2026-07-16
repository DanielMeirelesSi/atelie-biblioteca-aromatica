import { Flourish } from "@/components/icons";

interface SectionHeadingProps {
  script: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  script,
  title,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center" : "text-left"} ${className}`}>
      <p className="font-script text-3xl leading-none text-gold sm:text-[34px]">{script}</p>
      <h2 className="mt-1 font-display text-3xl text-plum sm:text-4xl">{title}</h2>
      <Flourish
        className={`mt-4 max-w-[220px] text-gold ${isCenter ? "mx-auto" : ""}`}
      />
    </div>
  );
}
