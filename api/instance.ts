import { ERRORS } from "@/utils/errors";
const apiFetcher = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const { headers, method, ...restOptions } = options || {};
  const init = {
    method: method ?? "GET",
    headers: {
      ...(headers || {}),
    },
    ...restOptions,
  };

  try {
    const response = await fetch(`${process.env.END_POINT}${url}`, init);

    // console.log(response)
    if (!response.ok) {
      const error = new Error("error while fetching data");
    // @ts-ignore
      if (response?.status !== 404) {
        // @ts-ignore
        error.info = await response.json();
      }
      // @ts-ignore
      error.status = response.status;
      switch (response.status) {
        case 400:
          error.message = ERRORS[400];
          break;
        case 401:
          error.message = ERRORS[401];
          break;
        case 403:
          error.message = ERRORS[403];
          break;
        case 404:
          error.message = ERRORS[404];
          break;
        case 500:
          error.message = ERRORS[500];
          break;
        case 503:
          error.message = ERRORS[503];
          break;
        default:
          // @ts-ignore
          error.message = `Unhandled status code: ${error.status}`;
          break;
      }
      throw error;
    }

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default apiFetcher;
