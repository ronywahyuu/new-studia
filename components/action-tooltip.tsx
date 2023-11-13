import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface ActionTooltipProps {
  children: React.ReactNode;
  label: string;
  side? : "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  className?: string;
}
const ActionTooltip = ({ children, side, align, label, className }: ActionTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger className={className} asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
};

export default ActionTooltip;
