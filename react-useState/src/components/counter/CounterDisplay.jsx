import { cn } from "src/lib/utils/mergeCss";

function CounterDisplay({className, count  }) {
  return (
    <output
      className={cn("text-8xl font-bold text-center block py-2", className)}
    >
      { count || 0 }
    </output>
  );
}

export { CounterDisplay };
