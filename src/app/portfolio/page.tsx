import CategoryPicker from "@src/components/category-picker";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio",
    description: "",
  };
};

export default async function portfolioPage() {
  return <CategoryPicker type="portfolio" />;
}
