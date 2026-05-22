import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div>
        <h1 className="font-heading">Joshua Jung</h1>
        <p>Oboist · Educator · Creative Technologist</p>
      </div>
      <div>
        <Image
          src="/images/hero.jpg"
          alt="Joshua Jung"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
