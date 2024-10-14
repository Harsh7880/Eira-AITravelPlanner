import {FOOTER_DESCRIPTION} from '../utils/constants'
const Footer = () => {
  return (
    <div className="py-10">
      <hr className="w-[90%] mb-8 mx-auto" />
      <h2 className="text-center font-medium lg:text-lg text-sm text-gray-500">
        {FOOTER_DESCRIPTION}
      </h2>
    </div>
  );
};

export default Footer;
