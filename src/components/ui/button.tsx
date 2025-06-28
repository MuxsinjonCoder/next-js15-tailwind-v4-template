import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center cursor-pointer justify-center gap-2 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-md",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 flex items-center justify-center rounded-md",
        secondary:
          "bg-secondary border border-primary text-secondary-foreground shadow-sm hover:bg-secondary/90 rounded-md flex items-center justify-center",
        danger:
          "bg-destructive text-primary-foreground shadow-sm hover:bg-destructive/90 rounded-md",
        nav: "text-white bg-primary rounded-r-full hover:bg-primary/90",
        navHover:
          "bg-transparent hover:bg-primary/70 hover:text-white rounded-r-full",
        ghost: "bg-transparent hover:bg-primary/20 rounded-md",
        icon: "bg-transparent py-2 px-2 hover:bg-primary/20 rounded-full",
        outline: "bg-transparent border-2 rounded-md",
        submit:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 flex items-center justify-center rounded-md",
      },
      size: {
        default: "py-2 px-4 w-full",
        sm: "p-2",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
