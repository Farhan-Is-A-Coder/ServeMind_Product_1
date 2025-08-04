import React, { useState } from 'react';
import { Check, Zap, Crown, Building2, ArrowRight } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for getting started',
      features: [
        '5 API calls per day',
        'Access to basic models',
        'Community support',
        'Basic analytics',
        'Standard rate limits'
      ],
      cta: 'Get Started',
      popular: false,
      color: 'from-slate-600 to-slate-700'
    },
    {
      name: 'Pro',
      price: { monthly: 29, annual: 290 },
      description: 'For growing developers and teams',
      features: [
        '10,000 API calls per month',
        'Access to all models',
        'Priority support',
        'Advanced analytics',
        'Custom rate limits',
        'API key management',
        'Webhook support'
      ],
      cta: 'Start Pro Trial',
      popular: true,
      color: 'from-cyan-500 to-emerald-500'
    },
    {
      name: 'Enterprise',
      price: { monthly: 99, annual: 990 },
      description: 'For large-scale applications',
      features: [
        'Unlimited API calls',
        'Custom model deployment',
        'Dedicated support',
        'Advanced security',
        'SLA guarantees',
        'Custom integrations',
        'On-premise options',
        'Team management'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your AI model needs. Scale as you grow with flexible pricing options.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === 'annual' ? 'text-white' : 'text-slate-400'}`}>
              Annual
            </span>
            {billingCycle === 'annual' && (
              <span className="ml-2 px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full text-white">
                Save 17%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-slate-800 rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/20 scale-105' 
                    : 'border-slate-700'
                } hover:border-cyan-400 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="text-slate-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-600 hover:to-emerald-600 shadow-lg hover:shadow-xl'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600 hover:border-cyan-400'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Can I change plans anytime?</h3>
                <p className="text-slate-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">What payment methods do you accept?</h3>
                <p className="text-slate-300">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Is there a free trial?</h3>
                <p className="text-slate-300">Yes, all paid plans come with a 14-day free trial. No credit card required.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">What happens if I exceed my limits?</h3>
                <p className="text-slate-300">We'll notify you before you reach your limits. You can upgrade or purchase additional credits.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Do you offer refunds?</h3>
                <p className="text-slate-300">Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Need a custom solution?</h3>
                <p className="text-slate-300">Contact our sales team for custom pricing and enterprise solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;