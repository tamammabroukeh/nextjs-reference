"use client"
import type { ButtonVariantProps } from "@nextui-org/theme";
import type { AriaButtonProps } from "@nextui-org/use-aria-button";
import type { ReactNode } from "react";
import type { HTMLNextUIProps } from "@nextui-org/system";

import { Spinner } from "@nextui-org/spinner";
import { forwardRef } from "@nextui-org/system";
import { Ripple } from "@nextui-org/ripple";
import { ReactRef } from "@nextui-org/react-utils";
import { MouseEventHandler } from "react";
import { useButton } from "@nextui-org/button";
import React from "react";
interface Props extends HTMLNextUIProps<"button"> {
  ref?: ReactRef<HTMLButtonElement | null>;
  disableRipple?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  spinner?: ReactNode;
  spinnerPlacement?: "start" | "end";
  isLoading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface ButtonProps extends UseButtonProps {}

export type UseButtonProps = Props &
  Omit<AriaButtonProps, keyof ButtonVariantProps> &
  Omit<ButtonVariantProps, "isInGroup">;

const Button = forwardRef<"button", ButtonProps>((props, ref) => {
  const {
    Component,
    domRef,
    children,
    styles,
    spinnerSize,
    spinner = <Spinner color="current" size={spinnerSize} />,
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly,
  } = useButton({ ...props, ref });

  return (
    <Component ref={domRef} className={styles} {...getButtonProps()}>
      {startContent}
      {isLoading && spinnerPlacement === "start" && spinner}
      {isLoading && isIconOnly ? null : children}
      {isLoading && spinnerPlacement === "end" && spinner}
      {endContent}
      {!disableRipple && <Ripple {...getRippleProps()} />}
    </Component>
  );
});

Button.displayName = "NextUI.Button";

export default Button;
