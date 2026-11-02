import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <Image
        src="/images/hero-image.png"
        alt="Dr. Radhamadhab Sahu – Senior ENT and Skull Base Surgeon, Bhubaneswar. Pioneering endoscopic skull base surgery in Eastern India with over 800 complex surgeries performed."
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
