/* eslint-disable prettier/prettier */
"use client";
import {
  IconAlertCircleFilled,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import { Input } from "@nextui-org/input";
import { FieldValues } from "react-hook-form";
import "@/styles/auth/styles.css";
import React, { FocusEvent } from "react";
import { Tooltip } from "@nextui-org/tooltip";

import { TFormInput } from "@/types/form";

const InputWithLabel = <TFieldValue extends FieldValues>({
  fieldTitle,
  nameInSchema,
  placeholder,
  register,
  onBlur,
  error,
  serverError,
  description,
}: TFormInput<TFieldValue>) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
      register(nameInSchema).onBlur(event);
    } else {
      register(nameInSchema).onBlur(event);
    }
  };

  const PasswordIcon = (nameInSchema === "password" ||
    nameInSchema === "confirmpassword") && (
    <button
      aria-label="toggle password visibility"
      className="focus:outline-none px-5"
      type="button"
      onClick={toggleVisibility}
    >
      {isVisible ? (
        <IconEye
          className={`text-2xl ${serverError ? "text-danger" : error ? "text-warning" : "text-default-400"} pointer-events-none`}
        />
      ) : (
        <IconEyeOff
          className={`text-2xl ${serverError ? "text-danger" : error ? "text-warning" : "text-default-400"} pointer-events-none`}
        />
      )}
    </button>
  );

  const errIcon = serverError
    ? "text-red-500"
    : error
      ? "text-yellow-500"
      : "text-blue-150";
  const errClass = serverError
    ? "text-red-500"
    : error
      ? "text-yellow-500"
      : "text-black-200";
  const errBorderInput = serverError
    ? "border-red-500"
    : error
      ? "border-yellow-500"
      : "";

  const typePasword =
    fieldTitle !== "Password" &&
    fieldTitle !== "Confirm Password" &&
    fieldTitle !== "Database Password";
  const fieldType = typePasword ? "text" : isVisible ? "text" : "password";

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-start items-center">
          <label className={`${errClass} text-sm`} htmlFor={fieldTitle}>
            {fieldTitle}
          </label>
          {description && (
            <Tooltip
              color="primary"
              content={description}
              delay={500}
              placement="top"
            >
              <IconAlertCircleFilled
                className={`w-4 h-4 ${errIcon}`}
                title="description"
              />
            </Tooltip>
          )}
        </div>
        <Input
          className={`w-full rounded-xl ${errClass}`}
          classNames={{
            inputWrapper: `p-0 border-1.5 ${errBorderInput}`,
            input: `p-5 rounded-xl`,
          }}
          id={fieldTitle}
          {...onBlurHandler}
          {...register(nameInSchema)}
          autoComplete="on"
          color={error ? "warning" : "default"}
          endContent={PasswordIcon}
          errorMessage={serverError === "" && error ? error : ""}
          isInvalid={!!serverError}
          placeholder={placeholder}
          radius="md"
          size="lg"
          type={fieldType}
          variant="bordered"
        />
      </div>
      {serverError === ""
        ? error && <p className={`text-xs m-0 p-0 text-yellow-500`}>{error}</p>
        : ""}
    </div>
  );
};

export default InputWithLabel;
