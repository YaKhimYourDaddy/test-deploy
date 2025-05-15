import { notFound } from "next/navigation";
import { MOCK_PROPERTIES } from "@/lib/constants";
import PropertyDetail from "@/components/property/PropertyDetail";

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return MOCK_PROPERTIES.map((property) => ({
    id: property.id,
  }));
}

export default function PropertyDetailPage({ params }: PropertyPageProps) {
  const property = MOCK_PROPERTIES.find((p) => p.id === params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PropertyDetail property={property} />
    </div>
  );
}
