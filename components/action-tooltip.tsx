import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface ActionTooltipProps {
  align?: "start" | "center" | "end";
  children: React.ReactNode;
  className?: string;
  label: string;
  side? : "left" | "right" | "top" | "bottom";
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
