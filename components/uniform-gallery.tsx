import { PRODUCT_LINES } from "@/lib/constants";
import { UniformCard } from "@/components/uniform-card";

export function UniformGallery() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PRODUCT_LINES.map((line, index) => (
        <UniformCard key={line.slug} line={line} index={index} />
      ))}
    </div>
  );
}
