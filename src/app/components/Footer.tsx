import Link from "next/link";

export default function Footer() {
  return (
    <footer className="items-center justify-center bg-[#2482c7]">
      <div className="container ">
        <div className="grid grid-cols-4 p-8">
          <div className="text-white flex flex-col items-baseline mx-auto">
            <p className="title-lg pb-4">Products</p>
            <ul className="text-[18px]">
              <li>
                <Link href="/marine-hoses">Marine hoses</Link>
              </li>
              <li>
                <Link href="/offshore-chains">Offshore chains</Link>
              </li>
              <li>
                <Link href="/moorings">Moorings</Link>
              </li>
              <li>
                <Link href="/marine-winches">Marine winches</Link>
              </li>
              <li>
                <Link href="/hev">HEV</Link>
              </li>
            </ul>
          </div>
          <div className="text-white flex flex-col items-baseline mx-auto">
            <p className="title-lg pb-4">Help</p>
            <ul className="text-[18px]">
              <li>
                <Link href="/">Contact form</Link>
              </li>
            </ul>
          </div>
          <div className="text-white flex flex-col items-baseline mx-auto">
            <p className="title-lg pb-4">Careers</p>
            <ul className="text-[18px]">
              <li>
                <Link href="/">Vacancies</Link>
              </li>
              <li>
                <Link href="/newss">News</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
          <div className="text-white flex flex-col items-baseline mx-auto">
            <p className="title-lg pb-4">Media & Contacts</p>
            <ul className="text-[18px]">
              <li>
                <Link href="/">Contacts</Link>
              </li>
              <li>
                <Link href="/">Privacy policy</Link>
              </li>
              <li>
                <Link href="/marine-winches">Terms of use</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-1 border-white">
          <div className=" text-white p-8 flex justify-between items-center">
            <p className="font-bold">
              ©S&S MARINE SERVICE LTD 2025. All rights reserved.
            </p>
            <div className="flex gap-4">
              <div className="w-[40px] h-[40px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 416 512"
                  className="w-full h-full"
                >
                  <path
                    fill="white"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </div>
              <div className="w-[40px] h-[40px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="white"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                  />
                </svg>
              </div>
              <div className="w-[40px] h-[40px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="white"
                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"
                  />
                </svg>
              </div>
              <div className="w-[40px] h-[40px] flex justify-center items-center">
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
