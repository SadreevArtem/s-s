import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Offshore Marine Solutions – Reliable Equipment & Services for Offshore Operations",
  description:
    "Explore our offshore marine solutions, including high-quality equipment, reliable services, and tailored support for offshore drilling platforms, vessels, and marine industries.",
};

export default function Page() {
  return (
    <div className="container mt-8 min-h-[calc(100vh-40px)]">
      <h1 className="text-center title-2xl">
        Offshore Marine Solutions – Excellence in Offshore Operations
      </h1>
      <p>
        At S&S, we provide comprehensive offshore marine solutions designed to
        meet the unique challenges of the offshore industry. Our expertise
        covers a wide range of high-quality equipment, technical support, and
        specialized services, ensuring safe and efficient offshore operations.
      </p>
      <h3 className="title-xl">Our Offshore Solutions Include:</h3>
      <ul className="list-disc">
        <li className="flex flex-row items-center ">
          <h2 className="title-lg">Offshore Equipment Supply</h2> -{" "}
          <p>
            Reliable and durable equipment for offshore drilling platforms,
            support vessels, and marine construction.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Mooring & Anchoring Systems</h2> -{" "}
          <p>
            High-performance mooring chains, buoys, and anchors for offshore
            stability.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Marine Hoses & Winches</h2> -{" "}
          <p>
            Engineered for fluid transfer and heavy-duty lifting in offshore
            environments.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Maintenance & Technical Support</h2> -{" "}
          <p>
            Professional servicing, inspections, and technical assistance to
            ensure operational efficiency.
          </p>
        </li>
      </ul>
      <p>
        We work with leading manufacturers and adhere to international industry
        standards, guaranteeing the highest level of safety, performance, and
        reliability. Whether you need customized offshore solutions or urgent
        equipment supply, we are here to support your operations.
      </p>
      <p>
        We provide comprehensive solutions for offshore and marine industries,
        ensuring the efficiency, safety, and reliability of operations at sea.
        Our expertise covers a wide range of services and supplies tailored to
        the unique demands of offshore drilling platforms, support vessels, and
        marine construction projects. From high-quality equipment and spare
        parts to specialized technical support, we deliver solutions that
        enhance operational performance in challenging marine environments. Our
        partnerships with leading manufacturers and industry specialists enable
        us to offer innovative, cost-effective, and sustainable products.
        Whether you need maintenance support, critical components, or custom
        engineering solutions, we are committed to keeping your offshore
        operations running smoothly, safely, and efficiently.
      </p>
    </div>
  );
}
