import React from 'react';
import { CtaText } from './types';

interface CTAProps {
  cta_text: CtaText;
}

/**
 * A Call-to-Action component with price and checkout button.
 * @param {CTAProps} props - Component properties.
 * @returns {JSX.Element} The CTA block.
 */
const CTA: React.FC<CTAProps> = ({ cta_text }): JSX.Element => {
  // A default price of 1000 is used as required[cite: 46].
  const price = 1000;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-gray-600">Price</p>
        <h3 className="text-3xl font-bold my-2">৳{price}</h3>
        <button className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300">
            {cta_text.checkout}
        </button>
    </div>
  );
};

export default CTA;