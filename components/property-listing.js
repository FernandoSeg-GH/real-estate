import Link from "next/link";
import SectionTitle from "./global/section-title";
import PropertyCard from "./property-card";

const PropertyListing = ({ data }) => {
  return (
    <div className="featured-list section-padding">
      <div className="container">
        <SectionTitle title="Propiedades" />
        <div className="featured-listing__wrapper">
          <div className="row">
            {data === null || undefined || 0 ? (
              <span className="error">Propiedad no disponible</span>
            ) : null}
            {data?.slice(0, 6).map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
          {data === null || undefined || 0 ? (
            ""
          ) : (
            <div className="text-center mt-4">
              <Link href="/all-property" className="button-primary">
                Mirar todo
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
