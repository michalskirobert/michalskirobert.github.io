import CategoryPicker from "@src/components/category-picker";

export const generateMetadata = async () => {
  return {
    title: "NurByte | My portfolio",
    description:
      "Explore NurByte’s service offerings by Robert Michalski — professional software development and photography solutions. From custom React apps to fashion and product photography, find the perfect service for your projec",
  };
};

export default function OfferPage() {
  return <CategoryPicker type="offer" />;
}
