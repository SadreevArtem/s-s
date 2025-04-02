import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moorings – Secure & Durable Offshore Mooring Solutions",
  description:
    "Discover high-performance mooring solutions for offshore platforms, vessels, and marine applications. Reliable, durable, and compliant with international safety standards.",
};

export default function Page() {
  return (
    <div className="container mt-8 min-h-[calc(100vh-40px)]">
      <h1 className="text-center mb-4 title-2xl border-b-2 border-orange mx-auto w-[max-content]">
        Moorings
      </h1>
      <p>
        We provide high-quality mooring solutions for offshore platforms,
        vessels, and floating structures. Our products are designed to ensure
        stability, safety, and durability in the most challenging marine
        environments.
      </p>

      <h3 className="title-xl">Our Mooring Solutions:</h3>
      <ul>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Mooring Chains</h2> -{" "}
          <p>
            High-strength chains for secure anchoring and station-keeping of
            offshore units.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Mooring Ropes</h2> -{" "}
          <p>
            Synthetic and wire ropes designed for high load-bearing capacity and
            durability.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Mooring Buoys</h2> -{" "}
          <p>
            Robust and reliable buoys for offshore and harbor mooring systems.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Mooring Accessoriesy</h2> -{" "}
          <p>
            Shackles, swivels, and connectors ensuring seamless mooring
            operations.
          </p>
        </li>
      </ul>

      <p>
        All our mooring solutions comply with international safety standards,
        including DNV, ABS, and Lloyd’s Register, ensuring maximum reliability
        in offshore environments. Whether you need permanent mooring systems for
        offshore installations or temporary mooring solutions for marine
        operations, we deliver products engineered for safety, performance, and
        longevity.
      </p>
    </div>
  );
}
