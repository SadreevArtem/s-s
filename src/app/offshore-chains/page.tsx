import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offshore Chains – High-Strength Mooring & Anchoring Solutions",
  description:
    "Explore our premium offshore chains designed for mooring, anchoring, and offshore operations. Built for durability, corrosion resistance, and compliance with international safety standards.",
};

export default function Page() {
  return (
    <div className="container mt-8">
      <h1 className="text-center title-2xl">
        Offshore Chains – Reliable & Durable Solutions for Offshore Operations
      </h1>
      <p>
        We supply high-quality offshore chains engineered for the toughest
        marine and offshore environments. Our chains are used in mooring
        systems, anchoring solutions, and offshore structures, ensuring superior
        strength, longevity, and corrosion resistance.
      </p>

      <h3>Our Offshore Chain Solutions:</h3>
      <ul>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Stud-Link Offshore Chains</h2> –{" "}
          <p>
            Heavy-duty chains designed for secure offshore mooring and anchoring
            of rigs, vessels, and floating platforms.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Non-Stud Offshore Chains</h2> –{" "}
          <p>
            Flexible and lightweight chains for specialized offshore
            applications.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Anchor Chains</h2> –{" "}
          <p>
            High-strength chains for reliable anchoring of offshore structures,
            oil platforms, and FPSOs.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Offshore Mooring Chains</h2> –{" "}
          <p>
            Engineered for long-term offshore mooring, built to withstand
            extreme marine conditions.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Offshore Chain Accessories</h2> –{" "}
          <p>
            Shackles, swivels, and connectors to enhance the efficiency and
            safety of mooring and anchoring systems.
          </p>
        </li>
      </ul>

      <p>
        All our offshore chains meet international industry certifications,
        including DNV, ABS, and Lloyd’s Register, guaranteeing compliance with
        the highest safety and performance standards. Whether for offshore
        drilling platforms, floating storage units, or marine terminals, our
        offshore chain solutions provide the strength and reliability you need
        for critical offshore operations.
      </p>
    </div>
  );
}
