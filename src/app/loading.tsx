import logo from "@public/assets/logo.png";
import { CustomLoader } from "@src/components/shared/loader";
import Image from "next/image";

export default function Loading() {
  return (
    <section className="!flex flex-col items-center justify-center min-h-[100vh] w-full">
      <Image
        src={logo}
        className="h-full w-[150px] object-contain"
        height={0}
        width={0}
        alt="NurByte"
      />
      <CustomLoader />
    </section>
  );
}
