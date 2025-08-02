import React, { useState } from 'react';
import { Book, Code, Zap, Shield, Globe, Copy, Check } from 'lucide-react';

const DocumentationPage = () => {
  const [activeSection, setActiveSection] = useState('quickstart');
  const [copiedCode, setCopiedCode] = useState('');

  const sections = [
    { id: 'quickstart', name: 'Quick Start', icon: Zap },
    { id: 'authentication', name: 'Authentication', icon: Shield },
    { id: 'models', name: 'Models API', icon: Book },
    { id: 'examples', name: 'Code Examples', icon: Code },
    { id: 'sdks', name: 'SDKs & Libraries', icon: Globe },
  ];

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const CodeBlock = ({ code, language, id }: { code: string; language: string; id: string }) => (
    <div className="relative bg-slate-900 rounded-lg p-4 border border-slate-700">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-slate-400 uppercase tracking-wide">{language}</span>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center space-x-1 text-slate-400 hover:text-cyan-400 transition-colors"
        >
          {copiedCode === id ? (
            <>
              <Check className="h-4 w-4" />
              <span className="text-xs">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="text-sm text-slate-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-xl text-slate-300">
            Everything you need to integrate ModelHub into your applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="sticky top-8 space-y-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeSection === section.id
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <section.icon className="h-5 w-5" />
                  <span>{section.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              {activeSection === 'quickstart' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Quick Start Guide</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Get up and running with ModelHub in minutes. This guide will walk you through 
                      making your first API call and integrating AI models into your application.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">1. Get Your API Key</h3>
                    <p className="text-slate-300 mb-4">
                      First, sign up for a ModelHub account and get your API key from the dashboard.
                    </p>
                    <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                      <p className="text-cyan-400 font-mono text-sm">
                        Dashboard → Settings → API Keys → Create New Key
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">2. Make Your First Request</h3>
                    <p className="text-slate-300 mb-4">
                      Here's a simple example using curl to call a text generation model:
                    </p>
                    <CodeBlock
                      id="first-request"
                      language="bash"
                      code={`curl -X POST "https://api.modelhub.com/v1/models/gpt-4/generate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Write a short story about AI",
    "max_tokens": 100,
    "temperature": 0.7
  }'`}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">3. Handle the Response</h3>
                    <p className="text-slate-300 mb-4">
                      The API will return a JSON response with the generated content:
                    </p>
                    <CodeBlock
                      id="response-example"
                      language="json"
                      code={`{
  "id": "gen_123456789",
  "model": "gpt-4",
  "choices": [
    {
      "text": "In a world where artificial intelligence...",
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 8,
    "completion_tokens": 100,
    "total_tokens": 108
  }
}`}
                    />
                  </div>

                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
                    <h4 className="font-semibold text-cyan-400 mb-2">🚀 You're Ready!</h4>
                    <p className="text-slate-300">
                      That's it! You've successfully made your first API call. Check out the other 
                      sections for more advanced usage patterns and examples.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'authentication' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Authentication</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      ModelHub uses API keys for authentication. Include your API key in the 
                      Authorization header of every request.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">API Key Format</h3>
                    <CodeBlock
                      id="auth-header"
                      language="http"
                      code={`Authorization: Bearer mk_live_1234567890abcdef`}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Environment Variables</h3>
                    <p className="text-slate-300 mb-4">
                      Store your API key securely using environment variables:
                    </p>
                    <CodeBlock
                      id="env-vars"
                      language="bash"
                      code={`# .env file
MODELHUB_API_KEY=mk_live_1234567890abcdef

# Usage in your application
export MODELHUB_API_KEY=mk_live_1234567890abcdef`}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Rate Limits</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-600">
                            <th className="text-left py-3 px-4 font-medium text-white">Plan</th>
                            <th className="text-left py-3 px-4 font-medium text-white">Rate Limit</th>
                            <th className="text-left py-3 px-4 font-medium text-white">Monthly Quota</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-300">
                          <tr className="border-b border-slate-700">
                            <td className="py-3 px-4">Free</td>
                            <td className="py-3 px-4">10 requests/minute</td>
                            <td className="py-3 px-4">1,000 requests</td>
                          </tr>
                          <tr className="border-b border-slate-700">
                            <td className="py-3 px-4">Pro</td>
                            <td className="py-3 px-4">100 requests/minute</td>
                            <td className="py-3 px-4">100,000 requests</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4">Enterprise</td>
                            <td className="py-3 px-4">1,000 requests/minute</td>
                            <td className="py-3 px-4">Unlimited</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'models' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Models API</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Comprehensive reference for all model endpoints and parameters.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">List Available Models</h3>
                    <CodeBlock
                      id="list-models"
                      language="http"
                      code={`GET https://api.modelhub.com/v1/models

Response:
{
  "models": [
    {
      "id": "gpt-4",
      "name": "GPT-4 Text Generator",
      "type": "text-generation",
      "pricing": "free"
    },
    {
      "id": "image-classifier-pro",
      "name": "Image Classifier Pro",
      "type": "image-classification",
      "pricing": "paid"
    }
  ]
}`}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Text Generation</h3>
                    <CodeBlock
                      id="text-generation"
                      language="http"
                      code={`POST https://api.modelhub.com/v1/models/{model_id}/generate

Parameters:
{
  "prompt": "string (required)",
  "max_tokens": "integer (default: 100)",
  "temperature": "float (default: 0.7)",
  "top_p": "float (default: 1.0)",
  "stop": "array of strings (optional)"
}`}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Image Classification</h3>
                    <CodeBlock
                      id="image-classification"
                      language="http"
                      code={`POST https://api.modelhub.com/v1/models/{model_id}/classify

Parameters:
{
  "image": "base64 encoded image or image URL",
  "top_k": "integer (default: 5)",
  "confidence_threshold": "float (default: 0.1)"
}`}
                    />
                  </div>
                </div>
              )}

              {activeSection === 'examples' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Code Examples</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Ready-to-use code examples in popular programming languages.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">JavaScript/Node.js</h3>
                    <CodeBlock
                      id="js-example"
                      language="javascript"
                      code={`const axios = require('axios');

async function generateText(prompt) {
  try {
    const response = await axios.post(
      'https://api.modelhub.com/v1/models/gpt-4/generate',
      {
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': \`Bearer \${process.env.MODELHUB_API_KEY}\`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error:', error.response.data);
    throw error;
  }
}

// Usage
generateText('Write a haiku about programming')
  .then(result => console.log(result))
  .catch(error => console.error(error));`}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Python</h3>
                    <CodeBlock
                      id="python-example"
                      language="python"
                      code={`import requests
import os

def generate_text(prompt, max_tokens=100, temperature=0.7):
    url = "https://api.modelhub.com/v1/models/gpt-4/generate"
    
    headers = {
        "Authorization": f"Bearer {os.getenv('MODELHUB_API_KEY')}",
        "Content-Type": "application/json"
    }
    
    data = {
        "prompt": prompt,
        "max_tokens": max_tokens,
        "temperature": temperature
    }
    
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    
    return response.json()["choices"][0]["text"]

# Usage
try:
    result = generate_text("Write a haiku about programming")
    print(result)
except requests.exceptions.RequestException as e:
    print(f"Error: {e}")`}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">React Hook</h3>
                    <CodeBlock
                      id="react-hook"
                      language="javascript"
                      code={`import { useState, useCallback } from 'react';

export function useModelHub() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateText = useCallback(async (prompt, options = {}) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          ...options
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate text');
      }
      
      const data = await response.json();
      return data.choices[0].text;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { generateText, loading, error };
}

// Usage in component
function TextGenerator() {
  const { generateText, loading, error } = useModelHub();
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    try {
      const text = await generateText('Write a story about AI');
      setResult(text);
    } catch (err) {
      console.error('Generation failed:', err);
    }
  };

  return (
    <div>
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Text'}
      </button>
      {error && <p>Error: {error}</p>}
      {result && <p>{result}</p>}
    </div>
  );
}`}
                    />
                  </div>
                </div>
              )}

              {activeSection === 'sdks' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">SDKs & Libraries</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Official and community SDKs to make integration even easier.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        name: 'JavaScript SDK',
                        description: 'Official JavaScript/TypeScript SDK',
                        install: 'npm install @modelhub/sdk',
                        status: 'Official'
                      },
                      {
                        name: 'Python SDK',
                        description: 'Official Python SDK',
                        install: 'pip install modelhub-python',
                        status: 'Official'
                      },
                      {
                        name: 'Go SDK',
                        description: 'Official Go SDK',
                        install: 'go get github.com/modelhub/go-sdk',
                        status: 'Official'
                      },
                      {
                        name: 'Ruby Gem',
                        description: 'Community-maintained Ruby gem',
                        install: 'gem install modelhub',
                        status: 'Community'
                      }
                    ].map((sdk, index) => (
                      <div key={index} className="bg-slate-700 p-6 rounded-lg border border-slate-600">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-white">{sdk.name}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            sdk.status === 'Official' 
                              ? 'bg-emerald-500/20 text-emerald-400' 
                              : 'bg-cyan-500/20 text-cyan-400'
                          }`}>
                            {sdk.status}
                          </span>
                        </div>
                        <p className="text-slate-300 text-sm mb-4">{sdk.description}</p>
                        <code className="text-xs bg-slate-800 px-2 py-1 rounded text-cyan-400">
                          {sdk.install}
                        </code>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">JavaScript SDK Example</h3>
                    <CodeBlock
                      id="js-sdk"
                      language="javascript"
                      code={`import { ModelHub } from '@modelhub/sdk';

const client = new ModelHub({
  apiKey: process.env.MODELHUB_API_KEY
});

// Generate text
const result = await client.models.generate('gpt-4', {
  prompt: 'Write a poem about the ocean',
  maxTokens: 100
});

console.log(result.text);

// Classify image
const classification = await client.models.classify('image-classifier-pro', {
  image: 'https://example.com/image.jpg'
});

console.log(classification.predictions);`}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;