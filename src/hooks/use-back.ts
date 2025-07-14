import { useRouter } from "next/navigation";

export const useBack = () => {
  const router = useRouter();

  const handleBack = () => {
    if (
      document.referrer &&
      document.referrer.includes(window.location.hostname)
    ) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return { handleBack };
};
