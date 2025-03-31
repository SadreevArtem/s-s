import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Marine Hoses – Durable & High-Performance Hoses for Offshore Operations",
  description:
    "Discover our range of offshore marine hoses designed for oil, gas, and chemical transfer. High-performance, durable, and compliant with international safety standards.",
};

export default function Page() {
  return (
    <div className="container">
      <h1 className="text-center title-2xl">
        Offshore Marine Hoses – Reliable Solutions for Offshore Fluid Transfer
      </h1>
      <p>
        We supply supply high-quality offshore marine hoses engineered for the
        demanding conditions of offshore drilling platforms, vessels, and marine
        terminals. Our hoses ensure safe, efficient, and reliable fluid
        transfer, even in harsh marine environments.
      </p>
      <h3 className="title-xl">Our Offshore Marine Hose Solutions: </h3>
      <ul>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Floating and Submarine Hoses</h2> -{" "}
          <p>Designed for offshore loading and unloading operations.</p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Bunkering Hoses</h2> -{" "}
          <p>
            For safe fuel and liquid transfer between vessels and shore
            facilities.
          </p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Chemical and Oil Transfer Hoses</h2> -{" "}
          <p>Resistant to aggressive substances and extreme conditions.</p>
        </li>
        <li className="flex flex-row items-center">
          <h2 className="title-lg">Dredging Hoses</h2> -{" "}
          <p>
            Built for heavy-duty applications in marine construction and port
            operations.
          </p>
        </li>
      </ul>

      <p>
        All our hoses comply with international industry standards, including
        OCIMF, API, and ISO, ensuring durability, flexibility, and safety in
        offshore applications. Partner with us for reliable offshore marine hose
        solutions tailored to your operational needs.
      </p>
    </div>
  );
}
