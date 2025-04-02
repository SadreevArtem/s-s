import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center  px-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center">
        <div className="relative -mt-20 -z-10">
          <Image alt="" src="/main.jpg" width={1280} height={100} />
          <h2 className="absolute top-[50%] left-[200px] text-white title-3xl">
            Who we are
          </h2>
        </div>
        <div className="container">
          <h3 className="text-center mb-4 title-2xl border-b-2 border-orange mx-auto w-[max-content]">
            Reliable & Honest
          </h3>
          <p className="mb-12 text-lg py-8 text-justify">
            We are a trusted provider of high-quality services and supplies for
            shipyards, offshore drilling platforms, and various types of
            vessels. With years of experience in the maritime and offshore
            industries, we offer reliable solutions tailored to the specific
            needs of our clients. Our company specializes in the supply of
            essential equipment, spare parts, and technical services, ensuring
            the smooth operation and maintenance of ships and offshore
            structures. We work closely with leading manufacturers and industry
            experts to deliver the best products and solutions. Committed to
            excellence and customer satisfaction, we strive to provide
            efficient, cost-effective, and timely services, helping our clients
            maintain high operational standards in the most demanding
            environments.
          </p>
        </div>
      </main>
    </div>
  );
}
