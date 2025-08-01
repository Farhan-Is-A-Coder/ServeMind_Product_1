import React, { useState } from 'react';
import { Upload, FileText, DollarSign, Tag, Info, CheckCircle } from 'lucide-react';

const UploadPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: '',
    pricingModel: 'free',
    price: '',
    apiEndpoint: '',
    documentation: '',
    modelFile: null as File | null,
  });

  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const categories = [
    { id: 'text', name: 'Text Generation' },
    { id: 'image', name: 'Image Processing' },
    { id: 'classification', name: 'Classification' },
    { id: 'code', name: 'Code Generation' },
    { id: 'audio', name: 'Audio Processing' },
    { id: 'video', name: 'Video Processing' },
    { id: 'nlp', name: 'Natural Language Processing' },
    { id: 'cv', name: 'Computer Vision' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, modelFile: files[0] }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, modelFile: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploadStatus('uploading');
    
    // Simulate upload process
    setTimeout(() => {
      setUploadStatus('success');
    }, 3000);
  };

  if (uploadStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Model Uploaded Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Your model is now being processed and will be available in the marketplace shortly.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                View Model
              </button>
              <button 
                onClick={() => setUploadStatus('idle')}
                className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Upload Another Model
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload Your AI Model</h1>
          <p className="text-lg text-gray-600">
            Share your AI model with the community and start monetizing your expertise.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Info className="h-5 w-5 mr-2" />
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Model Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter a descriptive title for your model"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Describe what your model does, its capabilities, and use cases"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="machine learning, nlp, computer vision (comma separated)"
                />
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Upload className="h-5 w-5 mr-2" />
              Model File
            </h2>

            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-indigo-500 bg-indigo-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {formData.modelFile ? (
                <div className="space-y-2">
                  <FileText className="h-12 w-12 text-indigo-600 mx-auto" />
                  <p className="text-lg font-medium text-gray-900">{formData.modelFile.name}</p>
                  <p className="text-sm text-gray-500">
                    {(formData.modelFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, modelFile: null }))}
                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                  >
                    Remove file
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      Drop your model file here, or{' '}
                      <label className="text-indigo-600 hover:text-indigo-700 cursor-pointer">
                        browse
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleFileSelect}
                          accept=".pkl,.joblib,.h5,.pb,.onnx,.json"
                        />
                      </label>
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Supports: .pkl, .joblib, .h5, .pb, .onnx, .json (Max 500MB)
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* API Configuration */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Tag className="h-5 w-5 mr-2" />
              API Configuration
            </h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="apiEndpoint" className="block text-sm font-medium text-gray-700 mb-2">
                  API Endpoint (Optional)
                </label>
                <input
                  type="url"
                  id="apiEndpoint"
                  name="apiEndpoint"
                  value={formData.apiEndpoint}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="https://your-api-endpoint.com/predict"
                />
                <p className="text-sm text-gray-500 mt-1">
                  If you have an existing API endpoint, provide it here. Otherwise, we'll create one for you.
                </p>
              </div>

              <div>
                <label htmlFor="documentation" className="block text-sm font-medium text-gray-700 mb-2">
                  API Documentation
                </label>
                <textarea
                  id="documentation"
                  name="documentation"
                  rows={4}
                  value={formData.documentation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Describe the input/output format, parameters, and usage examples"
                />
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              Pricing Model
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'free', name: 'Free', desc: 'Open source, community access' },
                  { id: 'paid', name: 'Paid', desc: 'Charge per API call or subscription' },
                  { id: 'freemium', name: 'Freemium', desc: 'Free tier with premium features' },
                ].map(option => (
                  <label
                    key={option.id}
                    className={`flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      formData.pricingModel === option.id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="pricingModel"
                      value={option.id}
                      checked={formData.pricingModel === option.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="font-medium text-gray-900">{option.name}</span>
                    <span className="text-sm text-gray-500 mt-1">{option.desc}</span>
                  </label>
                ))}
              </div>

              {formData.pricingModel !== 'free' && (
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                    Price per API call (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      step="0.001"
                      min="0"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="0.01"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              disabled={uploadStatus === 'uploading'}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploadStatus === 'uploading' ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Uploading...
                </div>
              ) : (
                'Upload Model'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;