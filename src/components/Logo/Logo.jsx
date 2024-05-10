import { useContext } from "react";
import Link from "next/link";
import { DataContext } from "../../context/DataProvider";

export const Logo = () => {
  const { color } = useContext(DataContext);

  return <div className="logo">
    <Link href="/">
      <span
        className="font-[homefont] text-[45px]"
        style={{ color: color }}
      >
        S</span>
      <span className="
      font-bold
      ">alman </span>
    </Link>
  </div>
}
