// import { Button } from "@base-ui/react";
// import React from "react";

// const Hero = ()=>{
//     return(
//        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//                 <div>
//                     <h1 className="text-4xl md:text-6xl font-bold mb-4">Latest Electronics at Best Prices</h1>
//                     <p className="text-xl mb-6 text-blue-100">Discover cutting-edge technology with unbeatable deals on smartphones, laptops and more.</p>
//                 <div className="flex flex-col  sm:flex-row gap-4">
//                     <Button className="bg-white text-blue-600 hover:bg-gray-100">Shop Now</Button>
//                     <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent">Your Deals</Button>
//                 </div>
//                 </div>
//                 <div className="relative">
//                     <img src="/ekart-hero.png" alt="" width={500} height={400} className="rounded-lg shadow-2xl"/>
//                 </div>
//             </div>
//         </div>
//        </section>
//     )
// }

// export default Hero;

// import { Button } from "@base-ui/react";
// import React from "react";

// const Hero = () => {
//   return (
//     <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 pt-32">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-10 items-center">

//           {/* Left Content */}
//           <div>
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//               Latest Electronics <br /> at Best Prices
//             </h1>

//             <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-xl">
//               Discover cutting-edge technology with unbeatable deals on
//               smartphones, laptops and more.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">
//                 Shop Now
//               </Button>

//               <Button className="border border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-6 py-3 rounded-lg font-semibold">
//                 Your Deals
//               </Button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center md:justify-end">
//             <img
//               src="/ekart-hero.png"
//               alt="Smartphone"
//               className="w-[500px] md:w-[600px] object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Button } from "../components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Latest Electronics <br /> at Best Prices
            </h1>

            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-xl">
              Discover cutting-edge technology with unbeatable deals on
              smartphones, laptops and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3">
                Shop Now
              </Button>

              <Button className="border border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-6 py-3 rounded-lg font-semibold">
             Your Deals
             </Button>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">

            <img
              src="/ekart-hero.png"
              alt="Smartphone"
              className="w-[420px] md:w-[520px] object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;