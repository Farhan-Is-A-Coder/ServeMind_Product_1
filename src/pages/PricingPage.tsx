import React, { useState } from 'react';
import { Check, Zap, Shield, Globe, Headphones, Star, ArrowRight } from 'lucide-react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for exploring and testing models',
      price: { monthly: 0, annual: 0 },
      color: 'gray',
      features: [
        '1,000 API calls per month',
        'Access to free models',
        'Basic support',
        'Community forum access',
        'Rate limiting: 10 calls/minute',
      ],
      limitations: [
        'No premium models',
        'Limited support',
        'ModelHub branding',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      description: 'For developers building production applications',
      price: { monthly: 29, annual: 290 },
      color: 'indigo',
      features: [
        '100,000 API calls per month',
        'Access to all models',
        'Priority support',
        'Advanced analytics',
        'Rate limiting: 100 calls/minute',
        'Custom model deployment',
        'Webhook support',
        'Team collaboration (5 members)',
      ],
      limitations: [],
      cta: 'Start Pro Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large teams and enterprise needs',
      price: { monthly: 199, annual: 1990 },
      color: 'purple',
      features: [
        'Unlimited API calls',
        'Private model hosting',
        'Dedicated support manager',
        'Custom SLA',
        'On-premise deployment',
        'Advanced security features',
        'Custom integrations',
        'Unlimited team members',
        'Priority model training',
        'White-label solution',
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'What happens if I exceed my API limits?',
      answer: 'We provide soft limits with overage billing. You\'ll receive notifications before hitting limits, and can upgrade or purchase additional capacity as needed.',
    },
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.',
    },
    {
      question: 'Do you offer custom pricing for high-volume usage?',
      answer: 'Absolutely! For usage over 10M API calls per month, we offer custom pricing with volume discounts. Contact our sales team for a quote.',
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'Yes, we offer a 14-day free trial for Pro and Enterprise plans with full access to all features. No credit card required.',
    },
  ];

  const getPrice = (plan: typeof plans[0]) => {
    const price = isAnnual ? plan.price.annual : plan.price.monthly;
    return price === 0 ? 'Free' : `$${price}`;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (plan.price.annual === 0) return null;
    const monthlyCost = plan.price.monthly * 12;
    const savings = monthlyCost - plan.price.annual;
    return Math.round((savings / monthlyCost) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your AI model deployment needs. All plans include our core features with varying limits and support levels.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1 text-green-600 font-semibold">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-200 hover:shadow-lg ${
                plan.popular 
                  ? 'border-indigo-500 ring-2 ring-indigo-500 ring-opacity-20' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-indigo-600">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{getPrice(plan)}</span>
                    {plan.price.monthly > 0 && (
                      <span className="text-gray-500 ml-1">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {isAnnual && getSavings(plan) && (
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Save {getSavings(plan)}%
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Features</th>
                  {plans.map(plan => (
                    <th key={plan.name} className="text-center py-4 px-4 font-semibold text-gray-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: 'API Calls', values: ['1,000/month', '100,000/month', 'Unlimited'] },
                  { feature: 'Model Access', values: ['Free models only', 'All models', 'All models + Private'] },
                  { feature: 'Support', values: ['Community', 'Priority', 'Dedicated manager'] },
                  { feature: 'Analytics', values: ['Basic', 'Advanced', 'Custom'] },
                  { feature: 'Team Members', values: ['1', '5', 'Unlimited'] },
                  { feature: 'SLA', values: ['None', '99.9%', 'Custom'] },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                    {row.values.map((value, valueIndex) => (
                      <td key={valueIndex} className="py-4 px-4 text-center text-gray-600">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Scale Your AI Applications?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust ModelHub for their AI model deployment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;