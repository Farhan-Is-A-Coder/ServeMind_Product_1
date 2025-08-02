import React from 'react';
import { Calendar } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">Terms of Service</h1>
            <div className="flex items-center text-slate-400">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Last updated: January 27, 2025</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-300 leading-relaxed">
                  By accessing and using ModelHub ("the Service"), you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  ModelHub is a Model-as-a-Service platform that allows users to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Access and use AI/ML models through our API</li>
                  <li>Upload and share their own models</li>
                  <li>Monetize their models through our platform</li>
                  <li>Integrate AI capabilities into their applications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  To access certain features of the Service, you must register for an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Acceptable Use</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Upload malicious code, viruses, or harmful content</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Generate harmful, illegal, or offensive content</li>
                  <li>Attempt to reverse engineer or compromise our systems</li>
                  <li>Use the service for competitive intelligence or benchmarking</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Model Uploads and Content</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  When uploading models or content to our platform:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>You retain ownership of your intellectual property</li>
                  <li>You grant us a license to host, distribute, and operate your models</li>
                  <li>You warrant that you have the right to upload and share the content</li>
                  <li>You agree that your models will be subject to our review process</li>
                  <li>We reserve the right to remove content that violates our policies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Payment and Billing</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  For paid services:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Fees are charged in advance on a monthly or annual basis</li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>We may change our pricing with 30 days notice</li>
                  <li>You're responsible for all taxes and fees</li>
                  <li>Failure to pay may result in service suspension</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. API Usage and Limits</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  API usage is subject to rate limits and quotas based on your subscription plan. 
                  Excessive usage may result in temporary throttling or account suspension.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Privacy and Data</h2>
                <p className="text-slate-300 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy to understand 
                  how we collect, use, and protect your information. By using our service, you 
                  consent to our data practices as described in our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Intellectual Property</h2>
                <p className="text-slate-300 leading-relaxed">
                  The Service and its original content, features, and functionality are owned by 
                  ModelHub and are protected by international copyright, trademark, patent, trade 
                  secret, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Disclaimers</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  The Service is provided "as is" without warranties of any kind. We disclaim all 
                  warranties, express or implied, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Non-infringement of third-party rights</li>
                  <li>Accuracy, reliability, or completeness of content</li>
                  <li>Uninterrupted or error-free service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Limitation of Liability</h2>
                <p className="text-slate-300 leading-relaxed">
                  In no event shall ModelHub be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including without limitation, loss of profits, 
                  data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Termination</h2>
                <p className="text-slate-300 leading-relaxed">
                  We may terminate or suspend your account and access to the Service immediately, 
                  without prior notice, for conduct that we believe violates these Terms or is 
                  harmful to other users, us, or third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibent text-white mb-4">13. Changes to Terms</h2>
                <p className="text-slate-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of 
                  significant changes via email or through the Service. Continued use of the Service 
                  after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Information</h2>
                <p className="text-slate-300 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-slate-700 rounded-lg">
                  <p className="text-slate-300">
                    <strong>Email:</strong> legal@modelhub.com<br />
                    <strong>Address:</strong> 123 AI Street, San Francisco, CA 94105<br />
                    <strong>Phone:</strong> +1 (555) 123-4567
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

export default TermsPage;