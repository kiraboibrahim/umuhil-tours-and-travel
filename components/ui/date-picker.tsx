"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DatePickerProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    icon?: React.ReactNode;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
    ({ value, onChange, placeholder = "Select date", className, icon, ...props }, ref) => {
        const inputRef = React.useRef<HTMLInputElement | null>(null);

        React.useImperativeHandle(ref, () => inputRef.current!);

        const handleContainerClick = () => {
            if (inputRef.current) {
                if (typeof inputRef.current.showPicker === "function") {
                    inputRef.current.showPicker();
                } else {
                    inputRef.current.focus();
                }
            }
        };

        return (
            <div
                onClick={handleContainerClick}
                className={cn(
                    "relative flex h-12 w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-[#33052A] shadow-sm transition-all duration-200 hover:border-[#E619B0]/50 focus-within:border-[#E619B0] focus-within:ring-2 focus-within:ring-[#E619B0]/20 cursor-pointer",
                    className
                )}
            >
                <div className="flex items-center gap-2.5 overflow-hidden w-full">
                    <span className="text-[#E619B0] flex-shrink-0">
                        {icon || <CalendarIcon className="h-4 w-4" />}
                    </span>
                    <span className={cn("truncate text-sm font-medium", !value && "text-gray-400")}>
                        {value ? new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : placeholder}
                    </span>
                </div>

                <input
                    ref={inputRef}
                    type="date"
                    value={value || ""}
                    onChange={(e) => onChange?.(e.target.value)}
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer pointer-events-auto"
                    {...props}
                />
            </div>
        );
    }
);

DatePicker.displayName = "DatePicker";
