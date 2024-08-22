import AnimatedGradientButton from "./magicui/AnimatedGradientButton";
import { cn } from "../lib/utils";

interface LibrarySelectorButtonProps {
  text: string;
  logo?: string;
  className?: string;
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const LibrarySelectorButton = ({
  text,
  logo,
  className = "h-24 w-20",
  selected,
  onClick,
}: LibrarySelectorButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center mr-2">
      <AnimatedGradientButton
        className={cn(
          "rounded-full",
          selected && "shadow-[inset_0_-5px_10px_#9FA3F9]"
        )}
        onClick={onClick}
      >
        <div
          className={cn(
            "p-1 duration-300 ease-in-out group-hover:translate-y-0.5",
            selected && "translate-y-0.5"
          )}
        >
          {logo ? (
            <img src={logo} className={cn(className)} alt="Logo" />
          ) : (
            <div className={className} />
          )}
        </div>
      </AnimatedGradientButton>

      <span
        className={cn(
          `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent bg-white/40 text-sm transition-shadow duration-500 ease-out [--bg-size:300%] dark:bg-black/40,`
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default LibrarySelectorButton;
