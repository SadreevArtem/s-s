import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Marine Hoses – Durable & High-Performance Hoses for Offshore Operations",
  description:
    "Discover our range of offshore marine hoses designed for oil, gas, and chemical transfer. High-performance, durable, and compliant with international safety standards.",
};

export default function Page() {
  return (
    <div className="container min-h-[calc(100vh-40px)]">
      <h1 className="text-center mb-12 mt-12 title-2xl border-b-2 border-orange mx-auto w-[max-content]">
        Offshore Marine Hoses – Reliable Solutions for Offshore Fluid Transfer
      </h1>
      <p className="text-lg text-justify">
        We supply supply high-quality offshore marine hoses engineered for the
        demanding conditions of offshore drilling platforms, vessels, and marine
        terminals. Our hoses ensure safe, efficient, and reliable fluid
        transfer, even in harsh marine environments.
      </p>
      <h3 className="title-xl mb-12 mt-4">
        Our Offshore Marine Hose Solutions:{" "}
      </h3>
      <ul className="grid grid-cols-2 mb-12 gap-8">
        <li className="flex items-center justify-center">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Floating and Submarine Hoses"
              height="140"
              image="/images/marine-hoses/submarine.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h2 className="title-lg">Floating and Submarine Hoses</h2>
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Designed for offshore loading and unloading operations.
              </Typography>
            </CardContent>
          </Card>
        </li>
        <li className="flex flex-row items-center justify-center">
          <Card className="h-auto" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Bunkering Hoses"
              height="140"
              image="/images/marine-hoses/submarine2.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h2 className="title-lg">Bunkering Hoses</h2>
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                For safe fuel and liquid transfer between vessels and shore
                facilities.
              </Typography>
            </CardContent>
          </Card>
        </li>
        <li className="flex flex-row items-center justify-center">
          <Card className="h-auto" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Bunkering Hoses"
              height="140"
              image="/images/marine-hoses/submarine3.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h2 className="title-lg">Chemical and Oil Transfer Hoses</h2>
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Resistant to aggressive substances and extreme conditions.
              </Typography>
            </CardContent>
          </Card>
        </li>
        <li className="flex flex-row items-center justify-center">
          <Card className="h-auto" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Bunkering Hoses"
              height="140"
              image="/images/marine-hoses/submarine4.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h2 className="title-lg">Dredging Hoses</h2>
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Built for heavy-duty applications in marine construction and
                port operations.
              </Typography>
            </CardContent>
          </Card>
        </li>
      </ul>

      <p className="mb-8">
        All our hoses comply with international industry standards, including
        OCIMF, API, and ISO, ensuring durability, flexibility, and safety in
        offshore applications. Partner with us for reliable offshore marine hose
        solutions tailored to your operational needs.
      </p>
    </div>
  );
}
