
import React from 'react';
const WhatWeOfferSection = () => {
  return (
    <div className=" bg-gray-100 pt-12">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What We Offer</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
          
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Explore AI Opportunities</h3>
            <p className="text-gray-700 mb-4">
              Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.
            </p>
          </div>

         
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Design AI Trust Layer</h3>
            <p className="text-gray-700 mb-4">
              Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.
            </p>
          </div>

          
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Scalability-Focused Solutions</h3>
            <p className="text-gray-700 mb-4">
              Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.
            </p>
          </div>

          
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">End to End Workflow Automation</h3>
            <p className="text-gray-700 mb-4">
              Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOfferSection;

