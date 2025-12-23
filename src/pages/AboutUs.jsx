import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="bg-white text-[#1A1A1A] overflow-hidden py-20">
      <section className="relative min-h-[90vh] flex items-center px-4 lg:px-20 overflow-hidden bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#749B3F15] border border-[#749B3F20]">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#749B3F]"></span>
              </span>
              <span className="text-[#749B3F] text-xs font-bold tracking-widest uppercase">
                Redefining Freshness
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Pure. Local. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#749B3F] to-[#9DC862]">
                Uncompromising.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 max-w-lg leading-relaxed questrial">
              We don't just deliver food; we curate a lifestyle of wellness
              through Earth’s most vibrant, nutrient-dense harvests.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/shop"
                className="group relative bg-[#FF6A1A] text-white px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10">Explore the Harvest</span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Link>
              <button className="px-8 py-4 rounded-full border border-gray-200 font-bold hover:bg-gray-50 transition-colors">
                Watch Our Story
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-20 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800"
                alt="Premium Veggies"
              />
            </div>
            <div className="absolute -top-12 -right-12 z-10 w-64 h-64 bg-[#749B3F10] rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 z-30 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
              <p className="text-4xl font-bold text-[#749B3F]">98%</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Customer Loyalty
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Built on Integrity.
          </h2>
          <p className="text-gray-500 text-lg">
            Our four pillars of excellence drive every harvest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[600px]">
          <div className="md:col-span-8 bg-[#F4F6F6] rounded-[2rem] p-10 flex flex-col justify-end relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80&w=800"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              alt=""
            />
            <div className="relative z-10">
              <span className="text-[#FF6A1A] font-bold text-5xl mb-6 block">
                01
              </span>
              <h3 className="text-3xl font-bold mb-4">Hyper-Local Sourcing</h3>
              <p className="max-w-md text-gray-600">
                We partner only with farms within a 50-mile radius. This reduces
                carbon footprint and ensures you eat what was in the soil
                yesterday.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#749B3F] rounded-[2rem] p-10 text-white">
            <span className="text-white/40 font-bold text-5xl mb-6 block">
              02
            </span>
            <h3 className="text-3xl font-bold mb-4">Zero Chemical Policy</h3>
            <p className="text-white/80">
              Strictly no synthetic pesticides. We use regenerative practices to
              keep our soil—and your body—clean.
            </p>
          </div>

          <div className="md:col-span-4 bg-[#1A1A1A] rounded-[2rem] p-10 text-white">
            <span className="text-white/20 font-bold text-5xl mb-6 block">
              03
            </span>
            <h3 className="text-3xl font-bold mb-4">Tech-Enabled Freshness</h3>
            <p className="text-white/60">
              Using real-time logistics to track every crate from harvest to
              your doorstep in under 24 hours.
            </p>
          </div>

          <div className="md:col-span-8 bg-[#749B3F10] border border-[#749B3F20] rounded-[2rem] p-10 flex items-center justify-between">
            <div className="max-w-xs">
              <span className="text-[#749B3F] font-bold text-5xl mb-6 block">
                04
              </span>
              <h3 className="text-3xl font-bold mb-4">Sustainable Packaging</h3>
              <p className="text-gray-600">
                Our boxes are 100% compostable. No plastic. No waste. Just
                nature.
              </p>
            </div>
            <div className="hidden lg:block w-48 h-48 bg-white rounded-full shadow-inner p-4">
              <div className="w-full h-full border-4 border-dashed border-[#749B3F40] rounded-full flex items-center justify-center">
                <span className="text-3xl">🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
