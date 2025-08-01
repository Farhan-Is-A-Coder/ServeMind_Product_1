import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Eye, Download, Share2, Heart, Play, Code, MessageSquare } from 'lucide-react';

const ModelDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('demo');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Mock model data - would come from API in real app
  const model = {
    id: '1',
    name: 'GPT-4 Text Generator',
    description: 'Advanced language model for high-quality text generation and completion tasks. This model has been fine-tuned on diverse datasets to provide coherent, contextually relevant responses across multiple domains.',
    category: 'text',
    author: 'OpenAI Labs',
    rating: 4.8,
    views: 125000,
    downloads: 25400,
    price: 'Free',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Multi-language support',
      'Context-aware responses',
      'Creative writing capabilities',
      'Code generation',
      'Summarization'
    ],
    usage: {
      endpoint: 'https://api.modelhub.com/v1/text-generation',
      method: 'POST',
      parameters: {
        'prompt': 'string',
        'max_tokens': 'integer (default: 100)',
        'temperature': 'float (default: 0.7)'
      }
    }
  };

  const handleDemo = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setOutputText(`Generated response for: "${inputText}"\n\nThis is a simulated response from the GPT-4 model. In a real implementation, this would be the actual model output based on your input prompt.`);
      setIsLoading(false);
    }, 2000);
  };

  const tabs = [
    { id: 'demo', name: 'Try Demo', icon: Play },
    { id: 'api', name: 'API Usage', icon: Code },
    { id: 'details', name: 'Details', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/explore"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Explore
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Model Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-8">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{model.name}</h1>
                    <p className="text-gray-600">by {model.author}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    model.price === 'Free' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-indigo-100 text-indigo-800'
                  }`}>
                    {model.price}
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{model.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{(model.views / 1000).toFixed(0)}k views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{(model.downloads / 1000).toFixed(0)}k</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{model.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {model.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                    Use Model
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <tab.icon className="h-4 w-4" />
                      <span>{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'demo' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Try the Model</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Input Prompt
                          </label>
                          <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Enter your text prompt here..."
                            rows={4}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          />
                        </div>
                        <button
                          onClick={handleDemo}
                          disabled={!inputText.trim() || isLoading}
                          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? 'Generating...' : 'Generate'}
                        </button>
                      </div>
                    </div>

                    {(outputText || isLoading) && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Model Output
                        </label>
                        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 min-h-[100px]">
                          {isLoading ? (
                            <div className="flex items-center space-x-2 text-gray-600">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600"></div>
                              <span>Generating response...</span>
                            </div>
                          ) : (
                            <pre className="whitespace-pre-wrap text-gray-900">{outputText}</pre>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'api' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">API Usage</h3>
                      <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm overflow-x-auto">
                        <div className="mb-4">
                          <span className="text-green-400">POST</span> {model.usage.endpoint}
                        </div>
                        <div className="text-gray-300">
{`{
  "prompt": "Your input text here",
  "max_tokens": 100,
  "temperature": 0.7
}`}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Parameters</h4>
                      <div className="space-y-3">
                        {Object.entries(model.usage.parameters).map(([param, desc]) => (
                          <div key={param} className="border border-gray-200 rounded-lg p-3">
                            <div className="font-mono text-sm text-indigo-600">{param}</div>
                            <div className="text-sm text-gray-600 mt-1">{desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Model Details</h3>
                      <div className="prose max-w-none text-gray-700">
                        <p>
                          This advanced language model represents the cutting edge of natural language processing technology. 
                          Trained on a diverse corpus of text data, it excels at understanding context, maintaining coherence 
                          across long conversations, and generating human-like responses.
                        </p>
                        <h4 className="text-base font-semibold text-gray-900 mt-6 mb-3">Training Data</h4>
                        <p>
                          The model has been trained on a carefully curated dataset spanning multiple languages, domains, 
                          and writing styles. This includes books, articles, academic papers, and web content, ensuring 
                          broad knowledge coverage and linguistic versatility.
                        </p>
                        <h4 className="text-base font-semibold text-gray-900 mt-6 mb-3">Performance Metrics</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>BLEU Score: 0.82</li>
                          <li>Perplexity: 15.3</li>
                          <li>Response Time: &lt;200ms (p95)</li>
                          <li>Throughput: 1000+ tokens/second</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailPage;