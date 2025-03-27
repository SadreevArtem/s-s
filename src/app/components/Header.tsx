import Image from "next/image";
import Link from "next/link";
import BasicMenu from "./BasicMenu";

export default function Header() {
  return (
    <header className="flex items-center justify-center my-4">
      <ul className="flex items-center gap-8">
        <li>
          <Link className="" href="/">
            <Image
              src={"/logo.png"}
              alt=""
              className=""
              width={300}
              height={300}
            />
          </Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/who-we-are">Who we are</Link>
        </li>
        <li>
          <BasicMenu />
        </li>
        <li>
          <Link href="/offshore-solutions">Offshore solutions</Link>
        </li>
        <li>
          <Link href="/after-sales">After sales</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/customers">Customers</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
    </header>
  );
}
