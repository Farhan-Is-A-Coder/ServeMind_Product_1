import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Lock, Check, AlertCircle } from 'lucide-react';

const CheckoutPage = () => {
  const { plan } = useParams();
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'US'
    }
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const plans = {
    pro: {
      name: 'Pro',
      monthly: 29,
      annual: 290,
      features: ['100,000 API calls/month', 'All models access', 'Priority support', 'Advanced analytics']
    },
    enterprise: {
      name: 'Enterprise',
      monthly: 199,
      annual: 1990,
      features: ['Unlimited API calls', 'Private hosting', 'Dedicated support', 'Custom SLA']
    }
  };

  const currentPlan = plans[plan as keyof typeof plans];
  const price = billingCycle === 'annual' ? currentPlan?.annual : currentPlan?.monthly;
  const savings = currentPlan && billingCycle === 'annual' ? 
    Math.round(((currentPlan.monthly * 12 - currentPlan.annual) / (currentPlan.monthly * 12)) * 100) : 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('billing.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        billingAddress: { ...prev.billingAddress, [field]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to success page or dashboard
    }, 3000);
  };

  if (!currentPlan) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Plan not found</h1>
          <Link to="/pricing" className="text-cyan-400 hover:text-cyan-300">
            Return to pricing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/pricing"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to pricing
          </Link>
          <h1 className="text-3xl font-bold text-white">Complete your subscription</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 h-fit">
            <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">{currentPlan.name} Plan</span>
                <span className="text-white font-semibold">${price}</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    billingCycle === 'monthly'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    billingCycle === 'annual'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Annual {savings > 0 && <span className="text-emerald-400">(-{savings}%)</span>}
                </button>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-4 mb-6">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-white">Total</span>
                <span className="text-cyan-400">${price}/{billingCycle === 'annual' ? 'year' : 'month'}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-white">Included features:</h3>
              {currentPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-slate-300">
                  <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-6">Payment Information</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                  placeholder="your@email.com"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center justify-center p-3 border rounded-lg transition-colors ${
                      paymentMethod === 'card'
                        ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                        : 'border-slate-600 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`flex items-center justify-center p-3 border rounded-lg transition-colors ${
                      paymentMethod === 'paypal'
                        ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                        : 'border-slate-600 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    PayPal
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <>
                  {/* Card Details */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      required
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        required
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        required
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      required
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Billing Address */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Billing Address</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="billing.street"
                        required
                        value={formData.billingAddress.street}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                        placeholder="Street Address"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="billing.city"
                          required
                          value={formData.billingAddress.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                          placeholder="City"
                        />
                        <input
                          type="text"
                          name="billing.state"
                          required
                          value={formData.billingAddress.state}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                          placeholder="State"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="billing.zipCode"
                          required
                          value={formData.billingAddress.zipCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400"
                          placeholder="ZIP Code"
                        />
                        <select
                          name="billing.country"
                          value={formData.billingAddress.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white"
                        >
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Security Notice */}
              <div className="flex items-start space-x-3 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                <Lock className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-300">
                  <p className="font-medium text-white mb-1">Secure Payment</p>
                  <p>Your payment information is encrypted and secure. We never store your card details.</p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-4 px-6 rounded-lg hover:from-cyan-400 hover:to-emerald-400 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing Payment...
                  </div>
                ) : (
                  `Subscribe to ${currentPlan.name} - $${price}/${billingCycle === 'annual' ? 'year' : 'month'}`
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                By subscribing, you agree to our{' '}
                <Link to="/terms" className="text-cyan-400 hover:text-cyan-300">Terms of Service</Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;