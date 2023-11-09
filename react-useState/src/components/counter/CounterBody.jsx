import { cn } from "src/lib/utils/mergeCss";

function CounterBody({ children, className }) {
  return (
    <aside
      className={cn(
        "max-w-[280px] shadow-sm shadow-stone-300 pt-4 pb-4 px-4 rounded-md bg-stone-50   text-stone-500",
        className
      )}
    >
      {children}
    </aside>
  );
}

export { CounterBody };
