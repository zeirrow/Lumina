import { products } from "../../data/data";
import Animation from "../ui/Animation";

const ProductShowcase = () => {
  return (
    <section className="bg-[#F9F6F2] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Animation idxndex={0} className="text-center mb-16">
          <span className="text-[#C28F79] tracking-widest text-sm mb-4 block">
            OUR FORMULATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#7C4D39] mb-6 leading-tight">
            Skincare <span className="italic font-light">Redefined</span>
          </h2>
        </Animation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product) => (
            <Animation idxndex={product.id} key={product.id} className="group relative">
              {/* Product tag */}
              {product.tag && (
                <div
                  className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium ${
                    product.tag === "BESTSELLER"
                      ? "bg-[#7C4D39] text-white"
                      : "bg-[#C28F79] text-white"
                  }`}
                >
                  {product.tag}
                </div>
              )}

              {/* Image with hover zoom */}
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square bg-white shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00000008] z-10" />
                {/* Replace with actual Image component */}
                <div className="absolute inset-0 bg-[#E2C7B7] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full rounded-3xl transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="px-4">
                <h3 className="text-2xl font-serif text-[#7C4D39] mb-2">
                  {product.name}
                </h3>
                <p className="text-[#7C4D39]/90 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#7C4D39]">
                    {product.price}
                  </span>
                  <button className="text-[#C28F79] hover:text-[#7C4D39] font-medium underline underline-offset-4 transition-colors">
                    Discover →
                  </button>
                </div>
              </div>
            </Animation>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-16">
          <button className="border border-[#7C4D39] text-[#7C4D39] hover:bg-[#7C4D39] hover:text-white px-8 py-3 rounded-full transition-all duration-300">
            Explore Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
