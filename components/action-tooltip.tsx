import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface ActionTooltipProps {
  children: React.ReactNode;
  label: string;
  side? : "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
}
const ActionTooltip = ({ children, side, align, label }: ActionTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p>{label.toLowerCase()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
};

export default ActionTooltip;
