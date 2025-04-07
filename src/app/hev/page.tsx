import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HEV – Hose End Valves for Safe and Efficient Offshore Fluid Transfer",
  description:
    "Discover high-performance hose end valves (HEVs) designed for offshore loading and unloading operations. Engineered for safety, durability, and optimal flow control.",
};

export default function Page() {
  return (
    <div className="container mt-8 min-h-[calc(100vh-40px)]">
      <h1 className="text-center mb-4 title-2xl border-b-2 border-orange mx-auto w-[max-content]">
        HEV – Hose End Valves for Offshore and Marine Applicationsы
      </h1>
      <p>
        We supply reliable and high-quality Hose End Valves (HEVs) used in
        offshore fluid transfer systems. Installed at the end of floating or
        submarine hoses, HEVs play a critical role in ensuring safe, efficient,
        and controlled loading and unloading of oil, gas, and chemical products
        in marine environments.
      </p>

      <h3 className="title-xl">Key Features of Our HEVs:</h3>
      <ul>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">High Flow Efficiency</h2> -{" "}
          <p>
            Designed to minimize pressure loss and optimize transfer
            performance.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Automatic Shut-off</h2> -{" "}
          <p>
            Safety mechanism to prevent spills in the event of hose failure or
            disconnection.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Corrosion-Resistant Materials</h2> -{" "}
          <p>
            Built to withstand harsh offshore conditions and aggressive media.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Compatibility</h2> -{" "}
          <p>
            Engineered to fit with a wide range of marine hoses and transfer
            systems.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Compliance</h2> -{" "}
          <p>
            Manufactured according to international standards such as OCIMF,
            API, and ISO.
          </p>
        </li>
      </ul>

      <p>
        Our hose end valves are trusted by offshore operators for their
        reliability, safety, and long service life. Whether in use on FPSOs,
        terminals, or support vessels, HEVs are a vital component in maintaining
        the integrity and safety of offshore transfer operations.
      </p>
    </div>
  );
}
