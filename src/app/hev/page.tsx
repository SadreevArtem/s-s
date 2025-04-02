import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HEV – Hybrid Electric Solutions for Offshore & Marine Applications",
  description:
    "Discover advanced Hybrid Electric Vehicle (HEV) solutions for offshore and marine industries. Improve efficiency, reduce emissions, and enhance sustainability with our cutting-edge hybrid technology.",
};

export default function Page() {
  return (
    <div className="container mt-8 min-h-[calc(100vh-40px)]">
      <h1 className="text-center mb-4 title-2xl border-b-2 border-orange mx-auto w-[max-content]">
        HEV – Hybrid Electric Solutions for Marine & Offshore Operations
      </h1>
      <p>
        We provide Hybrid Electric Vehicle (HEV) solutions tailored for the
        marine and offshore industries. Our hybrid systems combine traditional
        fuel-based power with electric propulsion, ensuring improved fuel
        efficiency, lower emissions, and enhanced operational sustainability.
      </p>

      <h3 className="title-xl">Our HEV Solutions:</h3>
      <ul>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Hybrid Marine Vessels</h2> -{" "}
          <p>
            Combining traditional fuel engines with electric motors to reduce
            fuel consumption and emissions in marine operations.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Hybrid Offshore Platforms</h2> -{" "}
          <p>
            Utilizing hybrid technology for more sustainable offshore
            operations, reducing dependency on conventional energy sources.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">HEV Cargo Vehicles</h2> -{" "}
          <p>
            Eco-friendly hybrid vehicles for transporting goods efficiently with
            minimal environmental impact.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Electric Hybrid Power Systems</h2> -{" "}
          <p>
            Power systems for marine and offshore applications designed to
            combine renewable energy sources with hybrid technology.
          </p>
        </li>
      </ul>

      <p>
        Our HEV technology complies with global sustainability standards,
        helping offshore and marine industries transition to greener energy
        solutions while maintaining performance and reliability. Whether you
        need a hybrid propulsion system for vessels or energy-efficient offshore
        solutions, we offer cutting-edge hybrid technologies designed for
        maximum efficiency and minimal environmental impact.
      </p>
    </div>
  );
}
