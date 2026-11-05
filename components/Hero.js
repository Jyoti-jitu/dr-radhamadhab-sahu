import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <h1 className="sr-only">
        Dr. Radhamadhab Sahu – ENT &amp; Skull Base Surgeon in Bhubaneswar
      </h1>
      <Image
        src="/images/hero-image.png"
        alt="Dr. Radhamadhab Sahu – Senior Consultant & Head of Department – ENT and Skull Base Surgery, Bhubaneswar, Odisha"
        width={1774}
        height={887}
        priority
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </section>
  );
}
