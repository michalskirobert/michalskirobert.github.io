import { ROUTER_PATHS } from "@src/utils/constants";
import { usePathname, useRouter } from "next/navigation";

export const useBack = () => {
  const router = useRouter();

  const pathname = usePathname();

  const handleBack = () => {
    if (pathname === "/") return;

    const previousPathName = pathname.split("/").slice(0, -1).join("/");

    router.push(previousPathName || ROUTER_PATHS.HOME);
  };

  return { handleBack };
};
