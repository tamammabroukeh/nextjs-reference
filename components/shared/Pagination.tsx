// "use client";
// import {
//   paginationLimit,
//   Pages,
//   startPage,
// } from "@/utils/constants/pagination";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useCallback } from "react";
// import { Pagination as NextUiPagination } from "@nextui-org/react";
// import { calcTotalPages } from "@/utils/pagination";
// type Props = {
//   paginationType: "offer" | "discount-code";
//   total: number;
// };
// const Pagination = ({ paginationType, total }: Props) => {
//   // hooks
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const { replace } = useRouter();
//   // constants
//   const offersCurrentPage =
//     parseInt(searchParams.get(Pages.OFFERS)!) || startPage;
//   const discountCurrentPage =
//     parseInt(searchParams.get(Pages.DISCOUNT)!) || startPage;
//   const totalPages = calcTotalPages(total, paginationLimit);
//   // functions
//   const changePage = useCallback(
//     (page: number) => {
//       const params = new URLSearchParams(searchParams.toString());
//       if (paginationType === "offer") {
//         params.set(Pages.OFFERS, page.toString());
//       } else {
//         params.set(Pages.DISCOUNT, page.toString());
//       }
//       replace(`${pathname}?${params}`, { scroll: false });
//     },
//     [searchParams, paginationType, replace, pathname]
//   );
//   return total > paginationLimit ? (
//     <NextUiPagination
//       isCompact
//       showControls={!!totalPages}
//       total={totalPages}
//       initialPage={startPage}
//       variant="light"
//       dir="ltr"
//       color="secondary"
//       className="mt-5"
//       classNames={{
//         base: "!flex !justify-center !items-center",
//       }}
//       onChange={(page) => changePage(page)}
//       page={
//         paginationType === "discount-code"
//           ? discountCurrentPage
//           : offersCurrentPage
//       }
//     />
//   ) : (
//     ""
//   );
// };
// export default Pagination;
