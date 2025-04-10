import Link from "next/link";

export const metadata = {
  title: "Pricing - ShopStore",
  description: "Check out our pricing plans and subscriptions",
};

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export default function PricingPage() {
  const pricingTiers: PricingTier[] = [
    {
      name: "Basic",
      price: 9.99,
      description: "Perfect for casual shoppers",
      features: [
        "Free standard shipping",
        "Access to sales and promotions",
        "24/7 customer support",
        "30-day returns"
      ],
      ctaText: "Get Started"
    },
    {
      name: "Premium",
      price: 19.99,
      description: "For regular shoppers who want more",
      features: [
        "Everything in Basic plan",
        "Free express shipping",
        "Early access to new products",
        "Exclusive discounts",
        "Priority customer support"
      ],
      ctaText: "Try Premium",
      popular: true
    },
    {
      name: "Enterprise",
      price: 49.99,
      description: "For serious shoppers and businesses",
      features: [
        "Everything in Premium plan",
        "Personal shopping assistant",
        "VIP member events",
        "Custom product requests",
        "Dedicated account manager",
        "Bulk order discounts"
      ],
      ctaText: "Contact Sales"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Subscription Plans</h1>
        <p className="text-xl text-gray-600">
          Choose the perfect shopping plan for your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <div 
            key={index} 
            className={`rounded-lg overflow-hidden border ${tier.popular ? 'border-blue-500 shadow-lg transform md:-translate-y-4' : 'border-gray-200'}`}
          >
            {tier.popular && (
              <div className="bg-blue-500 text-white text-center py-2 font-medium">
                Most Popular
              </div>
            )}
            <div className={`p-8 ${tier.popular ? 'bg-white' : 'bg-gray-50'}`}>
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 px-6 rounded-md font-medium ${
                  tier.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {tier.ctaText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-3xl mx-auto text-center bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6 text-left">
          <div>
            <h3 className="text-lg font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-gray-600">Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your billing period.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">How do I upgrade my plan?</h3>
            <p className="text-gray-600">You can upgrade your plan anytime from your account settings. The new pricing will be prorated for the remainder of your billing cycle.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Do you offer group or team pricing?</h3>
            <p className="text-gray-600">Yes, we offer special pricing for teams. Please contact our sales team for more information about our enterprise plans.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">We accept all major credit cards, PayPal, and Apple Pay. For enterprise plans, we also offer invoicing options.</p>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-6">Our team is happy to answer your questions about our pricing plans.</p>
        <Link 
          href="#" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 inline-block"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
} 