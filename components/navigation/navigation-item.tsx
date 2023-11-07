"use client";

import Link from "next/link";

interface NavigationItemProps {
  title: string;
  icon: React.ReactNode;
  route?: string;
  onClick?: () => void;
}

const NavigationItem = ({
  title,
  icon,
  onClick,
  route = "/",
}: NavigationItemProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const activeLink = "bg-cyan-100 text-cyan-950";

  return (
    <div className="space-y-3 text-cyan-950" onClick={handleClick}>
      <Link href={route}>
        <button className="flex items-center justify-center gap-3 py-2 ">
          {icon && <div>{icon}</div>}
          <span className=" font-medium">{title}</span>
        </button>
      </Link>
    </div>
    // <Link href={route} className="">
    // </Link>
  );
};

export default NavigationItem;
