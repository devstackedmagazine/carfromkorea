import FAQCategory from "./FAQCategory";
import { FAQCategoryData } from "./types";

/**
 * FAQData
 * Separating static data from the component for maintainability.
 */
const faqData: FAQCategoryData[] = [
  {
    id: "buying-process",
    name: "Buying Process",
    items: [
      {
        id: 1,
        title: "How do I purchase a car?",
        answer: "Our purchasing process is streamlined for your convenience. You can start by reserving a vehicle online, scheduling a private consultation at our studio, or contacting our concierge team directly. From there, we handle all the paperwork digitally or in person, according to your preference."
      },
      {
        id: 2,
        title: "What documents do I need?",
        answer: "To purchase a vehicle, you will need a valid driver's license, proof of insurance, and payment information. If you are financing or trading in a vehicle, you may also need proof of income, proof of residence, and your current vehicle's title or payoff information."
      },
      {
        id: 3,
        title: "Can I test drive before buying?",
        answer: "Absolutely. We encourage private test drives to ensure the vehicle meets your expectations. Due to the high value of our inventory, test drives are available by appointment only. Please contact our concierge to schedule a viewing and test drive."
      },
      {
        id: 4,
        title: "Do you accept trade-ins?",
        answer: "Yes, we accept premium and luxury trade-ins. Our expert appraisers will provide a competitive market valuation for your current vehicle, which can be applied directly toward your new purchase."
      },
      {
        id: 5,
        title: "What's your return policy?",
        answer: "We stand behind the quality of our vehicles. We offer a 7-day or 250-mile return policy (whichever comes first) on most purchases, provided the vehicle is in its original condition. Some specialty and bespoke orders may be exempt."
      }
    ]
  },
  {
    id: "financing-payments",
    name: "Financing & Payments",
    items: [
      {
        id: 6,
        title: "Do you offer financing?",
        answer: "Yes, Threads Studio partners with top-tier financial institutions to offer bespoke financing solutions tailored to your unique financial profile, including custom lease structures and traditional financing."
      },
      {
        id: 7,
        title: "What are the interest rates?",
        answer: "Interest rates are highly competitive and depend on your credit profile, the loan term, and the specific vehicle. Contact our finance team for a personalized rate quote with no impact to your credit score."
      },
      {
        id: 8,
        title: "What's the minimum down payment?",
        answer: "While many transactions require a 10-20% down payment, we offer customized structures. In some cases, highly qualified buyers may qualify for zero down payment options."
      },
      {
        id: 9,
        title: "Can I pay early without penalty?",
        answer: "The majority of our premium automotive loans simple-interest loans with no prepayment penalties. We will ensure this is explicitly cleared up before any agreements are signed."
      },
      {
        id: 10,
        title: "Do you work with my bank or credit union?",
        answer: "Yes, we are happy to work directly with your preferred bank, wealth manager, or credit union. We will coordinate directly with them to handle the final paperwork and funding."
      }
    ]
  },
  {
    id: "shipping-delivery",
    name: "Shipping & Delivery",
    items: [
      {
        id: 11,
        title: "Do you deliver internationally?",
        answer: "Yes, we offer white-glove international shipping services. We coordinate with elite customs brokers and specialized global transport networks to secure safe delivery worldwide."
      },
      {
        id: 12,
        title: "How much does shipping cost?",
        answer: "Shipping costs vary based on the destination, shipping method (enclosed transport, air freight, ocean freight), and vehicle size. Domestic enclosed shipping typically starts around $1,500, while international quotes are provided upon request."
      },
      {
        id: 13,
        title: "How long is delivery?",
        answer: "Domestic delivery typically takes between 3 to 10 business days depending on distance and transport scheduling. Custom international deliveries take an average of 4-8 weeks."
      },
      {
        id: 14,
        title: "Can you deliver to my home address?",
        answer: "Yes, our enclosed transport carriers provide door-to-door, white-glove service straight to your driveway, garage, or designated facility."
      },
      {
        id: 15,
        title: "Do you provide shipping insurance?",
        answer: "All vehicles shipped through our logistics network are fully insured end-to-end for their full purchase value during transit."
      }
    ]
  },
  {
    id: "warranty-support",
    name: "Warranty & Support",
    items: [
      {
        id: 16,
        title: "What warranties are included?",
        answer: "Most of our vehicles still carry the remainder of their original factory warranties. For vehicles out of warranty, we offer comprehensive extended service contracts from top-tier providers."
      },
      {
        id: 17,
        title: "Where can I service my vehicle?",
        answer: "You can service your vehicle at any authorized, certified dealership for your brand worldwide. If purchased with an extended warranty, you may also use any ASE-certified luxury mechanic."
      },
      {
        id: 18,
        title: "Do you provide post-purchase support?",
        answer: "Absolutely. When you buy from Threads Studio, you gain a lifetime Concierge contact who can assist with scheduling maintenance, future transport, specialized detailing, and future acquisitions."
      },
      {
        id: 19,
        title: "Are the vehicles inspected?",
        answer: "Every vehicle in our inventory undergoes a rigorous 150-point mechanical, electrical, and cosmetic inspection by certified master technicians prior to being listed."
      },
      {
        id: 20,
        title: "Can I get a copy of the vehicle history?",
        answer: "Yes, a complimentary, complete Carfax/AutoCheck history report and our internal condition report are provided alongside every vehicle."
      }
    ]
  }
];

/**
 * FAQSection Component
 * 
 * Main container for the FAQs.
 * Manages the layout and maps over category data.
 */
export default function FAQSection() {
  return (
    <section className="bg-[#111415] py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about purchasing, financing, and shipping your next luxury vehicle with Threads Studio.
          </p>
        </div>

        <div className="flex flex-col">
          {faqData.map((category) => (
            <FAQCategory key={category.id} category={category} />
          ))}
        </div>
        
        <div className="mt-12 text-center border-t border-[#2A2E34] pt-12">
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-[#3A4569] text-white rounded-md bg-[#3A4569]/10 hover:bg-[#3A4569]/20 transition-colors duration-300 font-medium"
          >
            Contact Our Concierge
          </a>
        </div>
      </div>
    </section>
  );
}
