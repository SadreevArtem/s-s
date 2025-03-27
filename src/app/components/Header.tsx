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
          <Link href="/">Who we are</Link>
        </li>
        <li>
          <BasicMenu />
        </li>
        <li>
          <Link href="/">Case history</Link>
        </li>
        <li>
          <Link href="/">After sales</Link>
        </li>
        <li>
          <Link href="/">News</Link>
        </li>
        <li>
          <Link href="/">Customers</Link>
        </li>
        <li>
          <Link href="/">Gallery</Link>
        </li>
      </ul>
    </header>
  );
}
