import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-background flex items-center justify-center px-16 gap-16"
    >
      <div className="flex flex-col gap-4">
        <h1 className="font-heading text-6xl font-bold text-foreground">
          Joshua Jung
        </h1>
        <p className="text-muted-foreground text-xl tracking-widest uppercase">
          Oboist · Educator · Creative Technologist
        </p>
      </div>
      <div>
        <Image
          src="/images/hero.jpg"
          alt="Joshua Jung"
          width={400}
          height={500}
          className="rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
