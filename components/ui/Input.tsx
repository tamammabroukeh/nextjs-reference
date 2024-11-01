// "use client";

// import type { InputVariantProps } from "@nextui-org/theme";
// import type { AriaTextFieldProps } from "@nextui-org/use-aria-textfield";
// import type { ReactNode } from "react";
// import type { HTMLNextUIProps } from "@nextui-org/system";

// import { forwardRef } from "@nextui-org/system";
// import { ReactRef } from "@nextui-org/react-utils";
// import { ChangeEventHandler } from "react";
// import { useInput } from "@nextui-org/input";
// import React from "react";

// interface Props extends HTMLNextUIProps<"input"> {
//   ref?: ReactRef<HTMLInputElement | null>;
//   disableRipple?: boolean;
//   startContent?: ReactNode;
//   endContent?: ReactNode;
//   isLoading?: boolean;
//   spinner?: ReactNode;
//   spinnerPlacement?: "start" | "end";
//   onChange?: ChangeEventHandler<HTMLInputElement>;
//   value?: string; // Ensure the value is a string
// }

// export interface InputProps extends UseInputProps {}

// export type UseInputProps = Props &
//   Omit<AriaTextFieldProps, keyof InputVariantProps | "value"> & // Omit 'value' from AriaTextFieldProps
//   Omit<InputVariantProps, "isInGroup">;

// const Input = forwardRef<"input", InputProps>((props, ref) => {
//   const {
//     Component,
//     domRef,
//     startContent,
//     endContent,
//     getInputProps,
//     classNames,
//   } = useInput({
//     ...props,
//     ref,
//   });

//   return (
//     <div className={classNames?.container}>
//       {startContent && (
//         <div className={classNames?.startContent}>{startContent}</div>
//       )}
//       <Component ref={domRef} {...getInputProps()} />
//       {endContent && <div className={classNames?.endContent}>{endContent}</div>}
//     </div>
//   );
// });

// Input.displayName = "NextUI.Input";

// export default Input;
