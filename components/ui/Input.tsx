import { cn } from "@/utils/utils";

export default function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input 
            id="chat-input"
            type="text"
            className={cn(
                "px-4 py-2 border border-[#3e3e3e] rounded-lg",
                className
            )}
            {...props}
        />
    )
}