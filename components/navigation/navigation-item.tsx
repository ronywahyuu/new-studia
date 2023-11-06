"use client";

interface NavigationItemProps {
  title: string;
  icon: React.ReactNode;
}

const NavigationItem = ({ title, icon }: NavigationItemProps) => {
  return (
    <div className="space-y-3 text-cyan-950">
      <button className="flex items-center justify-center gap-3 py-2 ">
        {icon && <div>{icon}</div>}
        <span className=" font-medium">{title}</span>
      </button>
    </div>
  );
};

export default NavigationItem;
