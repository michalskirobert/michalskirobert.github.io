import { CustomPage } from "@src/components/shared/page";
import Image from "next/image";

import photographyOffer from "@public/photography_offer_grid.jpg";
import softwareOffer from "@public/software_offer_grid.jpg";
import Link from "next/link";

export default function OfferPage() {
  return (
    <section className="!flex flex-col justify-center items-center my-10 p-2 min-h-[65.9vh]">
      <h1 className="text-center !mb-2 !text-[var(--clr-secondary)]">Offers</h1>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <Link href="/offer/photography">
          <Image
            className="!w-full !max-h-[300px] object-cover shadow-bs"
            src={photographyOffer}
            alt="Offer"
            width={0}
            height={0}
          />
        </Link>
        <Link href="/offer/software">
          <Image
            className="!w-full !max-h-[300px] object-cover shadow-bs"
            src={softwareOffer}
            alt="Offer"
            width={0}
            height={0}
          />
        </Link>
      </div>
    </section>
  );
}
