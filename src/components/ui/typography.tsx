import {cn} from "@/lib/utils";
import {cva, VariantProps} from "class-variance-authority";
import React, {ElementType, forwardRef} from "react";

const TypographyVariants = cva("text-gray-900", {
  variants: {
    variant: {
      // display
      display: "text-[64px] leading-[72px]",
      //   heading
      h1: "text-[32px] leading-[40px]",
      h2: "text-[28px] leading-[32px]",
      h3: "text-[24px] leading-[32px]",
      h4: "text-[16px] leading-[56px]",
      h5: "text-[14px] leading-[48px]",
      //   body
      xxl: "text-[24px] leading-[32px]",
      xl: "text-[20px] leading-[28px]",
      l: "text-[18px] leading-[24px]",
      m: "text-[16px] leading-[24px]",
      s: "text-[14px] leading-[20px]",
      tiny: "text-[12px] leading-[16px]",
      xs: "text-[11px] leading-[12px]",
    },
    weight: {
      300: "font-light",
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
      700: "font-bold",
    },
  },
  defaultVariants: {
    variant: "m",
    weight: 400,
  },
});

type TypographyVariantType = Exclude<
  VariantProps<typeof TypographyVariants>["variant"],
  null | undefined
>;

const elementMap: Record<TypographyVariantType, React.ElementType> = {
  display: "h1",
  //   heading
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  //   body
  xxl: "p",
  xl: "p",
  l: "p",
  m: "p",
  s: "p",
  tiny: "p",
  xs: "p",
};

type TypographyProps<T extends React.ElementType = "p"> = {
  as?: T;
} & VariantProps<typeof TypographyVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as">;

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({className, children, variant = "m", weight = 400, as, ...props}, ref) => {
    const Element = as || elementMap[variant || "m"] || "p";
    return (
      <Element
        ref={ref}
        {...props}
        className={cn(TypographyVariants({variant, weight, className}))}
      >
        {children}
      </Element>
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
