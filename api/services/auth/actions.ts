"use server";
/* eslint-disable prettier/prettier */
import { flattenValidationErrors } from "next-safe-action";

import { REGISTER_ROUTE } from "./constants";

import { SignUpSchema } from "@/schemas/SignUpSchema";
import { actionClient } from "@/lib/safe-action";
import apiFetcher from "@/api/instance";
import { headers } from "@/api/constants";
import { TSignUpResponse } from "@/api/types/auth/types";

export const SignUpAction = actionClient
  .schema(SignUpSchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(
    async ({
      parsedInput
    }) => {
      const { name, email, password,confirmpassword:
        password_confirmation } = parsedInput

      try {
        const res = await apiFetcher<TSignUpResponse>(REGISTER_ROUTE, {
          method: "POST",
          headers,
          body: JSON.stringify({
            name,
            email,
            password,
            password_confirmation,
          }),
        });

        console.log("res", res);

        // @ts-ignore
        // if (!res.ok) {
        //   // @ts-ignore
        //   if (res?.status === 409) {
        //     return { message: `Duplicate Username` };
        //     // @ts-ignore
        //   } else if (res?.status === 400) {
        //     return { message: `Missing field` };
        //   } else {
        //     throw new Error("Invalid Email Or Password");
        //   }
        // }

        return { message: "Your account created successfully", res };
      } catch (error: any) {
        console.log("hi", error);
        console.log("error", error);
        // if(error.status === 404){
        throw new Error("Please try again");
        // }
      }
    },
  );