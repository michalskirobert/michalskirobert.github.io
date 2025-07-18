import CategoryPicker from "@src/components/category-picker";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio",
    description:
      "Explore the portfolio of Robert Michalski — full-stack software engineer and professional photographer. See featured projects in React, Next.js, and product/fashion photography.",
  };
};

export default async function portfolioPage() {
  return <CategoryPicker type="portfolio" />;
}
