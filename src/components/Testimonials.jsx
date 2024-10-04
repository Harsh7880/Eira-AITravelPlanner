/* eslint-disable react/no-unescaped-entities */
import { TESTIMONIALS } from "../utils/constants";
const Testimonials = () => {
  return (
    <div className="my-24 lg:px-24">
      <div className="flex items-center justify-center px-64">
        <h2 className="mb-6 text-center text-5xl font-bold text-[#002c6a]">
          {TESTIMONIALS.title}
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5 px-12">
        <div className="col-span-4 bg-[#b0efef] px-8 py-10 rounded-xl">
          <p className="text-lg font-medium">{TESTIMONIALS.review1}</p>
        </div>
        <div className="col-span-4 bg-[#b0efef] px-8 py-10 rounded-xl">
          <p className="text-lg font-medium">{TESTIMONIALS.review2}</p>
        </div>
        <div className="col-span-4 bg-[#b0efef] px-8 py-10 rounded-xl">
          <p className="text-lg font-medium">{TESTIMONIALS.review3}</p>
        </div>
        <div className="col-span-6 bg-[#b0efef] px-8 py-10 rounded-xl">
          <p className="text-lg font-medium">{TESTIMONIALS.review4}</p>
        </div>
        <div className="col-span-6 bg-[#b0efef] px-8 py-10 rounded-xl">
          <p className="text-lg font-medium">{TESTIMONIALS.review5}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
