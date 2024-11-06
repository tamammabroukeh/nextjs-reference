import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient({
  handleServerError(e: Error) {
    return "Something went wrong with " + e;
  },
});