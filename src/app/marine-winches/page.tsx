import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Marine Winches – High-Performance Winching Solutions for Offshore & Maritime Applications",
  description:
    "Explore our range of durable and high-performance marine winches for anchoring, mooring, and towing applications. Engineered for strength, reliability, and compliance with international standards.",
};

export default function Page() {
  return (
    <div className="container mt-8 min-h-[calc(100vh-40px)]">
      <h1 className="text-center mb-4 title-2xl border-b-2 border-orange mx-auto w-[max-content]">
        Marine Winches – Reliable & Powerful Winching Solutions for Marine
        Operations
      </h1>
      <p>
        We provide high-quality marine winches designed for various offshore and
        maritime applications. Our winches deliver exceptional strength,
        precision, and durability, ensuring safe and efficient operations in the
        most demanding marine environments.
      </p>

      <h3 className="title-xl">Our Marine Winch Solutions:</h3>
      <ul>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Anchor Winches</h2> -{" "}
          <p>
            Heavy-duty winches designed for anchoring vessels, platforms, and
            floating units.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Mooring Winches</h2> -{" "}
          <p>
            Used for securing vessels and offshore platforms to mooring systems
            with precise control.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Deck Winches</h2> -{" "}
          <p>
            Versatile winches for various deck operations, from lifting to
            towing.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Pulling and Towing Winche</h2> -{" "}
          <p>
            High-torque winches designed for pulling, towing, and hauling in
            marine environments.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Capstan Winches</h2> -
          <p>
            Ideal for handling ropes and cables, often used on smaller vessels
            and platforms.
          </p>
        </li>
      </ul>

      <p>
        Our marine winches are engineered to meet international safety and
        quality standards, ensuring optimal performance and reliability. We
        collaborate with top manufacturers to provide winches that offer
        superior strength, efficiency, and safety for all offshore and marine
        operations.
      </p>
    </div>
  );
}
