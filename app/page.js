import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <p> hello Next</p>
      <Link href={"/dashboard"} className=" text-blue-600 underline">
        dashboard
      </Link>
      <Link href={"/dashboard/settings"} className=" text-blue-600 ">
        setting
      </Link>
    </>
  );
}
