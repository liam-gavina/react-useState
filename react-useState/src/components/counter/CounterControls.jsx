import { cn } from "src/lib/utils/mergeCss";

function CounterControls({ children, className }) {
  return (
    <footer className={cn("text-base", className)}>
      {children || "Counter Footer"}
    </footer>
  );
}

export { CounterControls };
