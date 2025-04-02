import Image from "next/image";
import Link from "next/link";
import BasicMenu from "./BasicMenu";

export default function Header() {
  return (
    <header className="flex items-center justify-center my-4 z-10">
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
          <Link className="hover:border-b-2 border-orange" href="/">
            Home
          </Link>
        </li>
        <li>
          <BasicMenu />
        </li>
        <li>
          <Link
            className="hover:border-b-2 border-orange"
            href="/offshore-solutions"
          >
            Offshore solutions
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 border-orange" href="/after-sales">
            After sales
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 border-orange" href="/news">
            News
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 border-orange" href="/customers">
            Customers
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 border-orange" href="/gallery">
            Gallery
          </Link>
        </li>
      </ul>
    </header>
  );
}
