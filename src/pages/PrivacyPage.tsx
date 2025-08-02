import React from 'react';
import { Calendar, Shield } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
            <div className="flex items-center text-slate-400 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Last updated: January 27, 2025</span>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
              <Shield className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-slate-300">
                <p className="font-medium text-white mb-1">Your Privacy Matters</p>
                <p>We are committed to protecting your privacy and being transparent about how we handle your data.</p>
              </div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                
                <h3 className="text-lg font-medium text-cyan-400 mb-3">Account Information</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  When you create an account, we collect:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-6">
                  <li>Name and email address</li>
                  <li>Username and password (encrypted)</li>
                  <li>Profile information you choose to provide</li>
                  <li>Payment information (processed securely by our payment providers)</li>
                </ul>

                <h3 className="text-lg font-medium text-cyan-400 mb-3">Usage Data</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  We automatically collect information about how you use our service:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-6">
                  <li>API requests and responses (excluding sensitive content)</li>
                  <li>Model usage statistics and performance metrics</li>
                  <li>Device information and IP addresses</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and features used</li>
                </ul>

                <h3 className="text-lg font-medium text-cyan-400 mb-3">Model Data</h3>
                <p className="text-slate-300 leading-relaxed">
                  When you upload models or use our API, we may collect model files, training data 
                  descriptions, and input/output examples for quality assurance and service improvement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Detect and prevent fraud and abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information. We may share information in these situations:
                </p>
                
                <h3 className="text-lg font-medium text-cyan-400 mb-3">Service Providers</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  We work with third-party service providers who help us operate our platform:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-6">
                  <li>Cloud hosting providers (AWS, Google Cloud)</li>
                  <li>Payment processors (Stripe, PayPal)</li>
                  <li>Analytics services (with anonymized data)</li>
                  <li>Customer support tools</li>
                </ul>

                <h3 className="text-lg font-medium text-cyan-400 mb-3">Legal Requirements</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We may disclose information if required by law, court order, or government request, 
                  or to protect our rights, property, or safety.
                </p>

                <h3 className="text-lg font-medium text-cyan-400 mb-3">Business Transfers</h3>
                <p className="text-slate-300 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be 
                  transferred as part of that transaction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Encryption in transit and at rest</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Secure data centers with physical security measures</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  We retain your information for as long as necessary to provide our services:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Account data: Until you delete your account</li>
                  <li>Usage logs: 90 days for operational purposes</li>
                  <li>Model data: As long as the model is active on our platform</li>
                  <li>Payment records: 7 years for tax and legal compliance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights and Choices</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                
                <h3 className="text-lg font-medium text-cyan-400 mb-3">Access and Portability</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  You can access and download your personal data through your account settings.
                </p>

                <h3 className="text-lg font-medium text-cyan-400 mb-3">Correction and Updates</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  You can update your account information at any time through your profile settings.
                </p>

                <h3 className="text-lg font-medium text-cyan-400 mb-3">Deletion</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  You can delete your account and associated data by contacting our support team.
                </p>

                <h3 className="text-lg font-medium text-cyan-400 mb-3">Marketing Communications</h3>
                <p className="text-slate-300 leading-relaxed">
                  You can opt out of marketing emails by clicking the unsubscribe link or updating 
                  your notification preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Tracking</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4 mb-4">
                  <li>Keep you logged in to your account</li>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze how our service is used</li>
                  <li>Provide personalized content and features</li>
                </ul>
                <p className="text-slate-300 leading-relaxed">
                  You can control cookies through your browser settings, but some features may not 
                  work properly if cookies are disabled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. International Data Transfers</h2>
                <p className="text-slate-300 leading-relaxed">
                  Our services are hosted in the United States. If you access our service from outside 
                  the US, your information may be transferred to, stored, and processed in the US. 
                  We ensure appropriate safeguards are in place for international transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Children's Privacy</h2>
                <p className="text-slate-300 leading-relaxed">
                  Our service is not intended for children under 13. We do not knowingly collect 
                  personal information from children under 13. If we become aware that we have 
                  collected such information, we will take steps to delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
                <p className="text-slate-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  material changes by email or through our service. Your continued use of our 
                  service after changes become effective constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="p-4 bg-slate-700 rounded-lg">
                  <p className="text-slate-300">
                    <strong>Email:</strong> privacy@modelhub.com<br />
                    <strong>Address:</strong> 123 AI Street, San Francisco, CA 94105<br />
                    <strong>Data Protection Officer:</strong> dpo@modelhub.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;