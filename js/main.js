// ModelHub JavaScript Application

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initializeApp();
});

// Application State
const appState = {
    currentPage: 'home',
    models: [
        {
            id: '1',
            name: 'GPT-4 Text Generator',
            description: 'Advanced language model for high-quality text generation and completion tasks.',
            category: 'text',
            author: 'OpenAI Labs',
            rating: 4.8,
            views: 125000,
            downloads: 25400,
            price: 'Free',
            image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: '2',
            name: 'Image Classifier Pro',
            description: 'State-of-the-art image classification model trained on 10M+ diverse images.',
            category: 'image',
            author: 'VisionTech',
            rating: 4.6,
            views: 89000,
            downloads: 18200,
            price: '$9.99/mo',
            image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: '3',
            name: 'Sentiment Analyzer',
            description: 'Accurate sentiment analysis for social media, reviews, and customer feedback.',
            category: 'classification',
            author: 'DataMind',
            rating: 4.7,
            views: 67000,
            downloads: 14500,
            price: 'Free',
            image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: '4',
            name: 'Code Assistant AI',
            description: 'Intelligent code completion and generation for multiple programming languages.',
            category: 'code',
            author: 'CodeCraft AI',
            rating: 4.9,
            views: 156000,
            downloads: 32100,
            price: '$19.99/mo',
            image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: '5',
            name: 'Audio Transcriber',
            description: 'High-accuracy speech-to-text conversion supporting 50+ languages.',
            category: 'audio',
            author: 'SpeechLab',
            rating: 4.5,
            views: 43000,
            downloads: 9800,
            price: '$4.99/mo',
            image: 'https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
            id: '6',
            name: 'Style Transfer Network',
            description: 'Transform images with artistic styles using neural style transfer techniques.',
            category: 'image',
            author: 'ArtificialArt',
            rating: 4.4,
            views: 78000,
            downloads: 16700,
            price: 'Free',
            image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
    ],
    filteredModels: [],
    isAuthMode: 'signin' // 'signin' or 'signup'
};

// Initialize Application
function initializeApp() {
    setupEventListeners();
    renderModels();
    showPage('home');
}

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        appState.currentPage = pageId;
        
        // Update navigation active states
        updateNavigation(pageId);
        
        // Page-specific initialization
        if (pageId === 'explore') {
            renderModels();
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Re-initialize Lucide icons for new content
        setTimeout(() => lucide.createIcons(), 100);
    }
}

// Update Navigation Active States
function updateNavigation(activePageId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link (simplified)
    const activeLink = document.querySelector(`[onclick="showPage('${activePageId}')"]`);
    if (activeLink && activeLink.classList.contains('nav-link')) {
        activeLink.classList.add('active');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Filter functionality
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleFilter);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', handleFilter);
    }
    
    // Auth form
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', handleAuthSubmit);
    }
    
    // Upload form
    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        uploadForm.addEventListener('submit', handleUploadSubmit);
    }
    
    // File upload
    setupFileUpload();
    
    // Pricing model selection
    setupPricingSelection();
}

// Handle Search
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    filterModels(searchTerm);
}

// Handle Filter
function handleFilter() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    filterModels(searchTerm);
}

// Filter Models
function filterModels(searchTerm = '') {
    const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';
    const sortFilter = document.getElementById('sortFilter')?.value || 'popular';
    
    let filtered = appState.models.filter(model => {
        const matchesSearch = model.name.toLowerCase().includes(searchTerm) ||
                             model.description.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || model.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });
    
    // Sort models
    filtered.sort((a, b) => {
        switch (sortFilter) {
            case 'popular':
                return b.views - a.views;
            case 'rating':
                return b.rating - a.rating;
            case 'downloads':
                return b.downloads - a.downloads;
            case 'newest':
                return 0; // Would use actual date in real app
            default:
                return 0;
        }
    });
    
    appState.filteredModels = filtered;
    renderModels();
}

// Render Models
function renderModels() {
    const modelsGrid = document.getElementById('modelsGrid');
    if (!modelsGrid) return;
    
    const modelsToRender = appState.filteredModels.length > 0 ? appState.filteredModels : appState.models;
    
    if (modelsToRender.length === 0) {
        modelsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i data-lucide="brain" class="text-slate-600 mb-3" style="width: 4rem; height: 4rem;"></i>
                <h3 class="text-white mb-2">No models found</h3>
                <p class="text-slate-400">Try adjusting your search criteria or browse different categories.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    modelsGrid.innerHTML = modelsToRender.map(model => `
        <div class="col-md-6 col-lg-4">
            <div class="model-card h-100">
                <div class="position-relative overflow-hidden">
                    <img src="${model.image}" alt="${model.name}" class="w-100" style="height: 12rem; object-fit: cover;">
                    <div class="position-absolute top-0 end-0 m-3">
                        <span class="badge ${model.price === 'Free' ? 'badge-free' : 'badge-paid'} px-2 py-1">
                            ${model.price}
                        </span>
                    </div>
                </div>
                
                <div class="p-4">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <h5 class="text-white mb-0">${model.name}</h5>
                        <div class="d-flex align-items-center">
                            <i data-lucide="star" class="text-emerald-400 me-1" style="width: 1rem; height: 1rem; fill: currentColor;"></i>
                            <span class="text-slate-300 small">${model.rating}</span>
                        </div>
                    </div>
                    
                    <p class="text-slate-400 small mb-3" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        ${model.description}
                    </p>
                    
                    <div class="d-flex justify-content-between align-items-center text-slate-500 small mb-3">
                        <span>by ${model.author}</span>
                        <div class="d-flex gap-3">
                            <div class="d-flex align-items-center">
                                <i data-lucide="eye" class="me-1" style="width: 0.875rem; height: 0.875rem;"></i>
                                <span>${(model.views / 1000).toFixed(0)}k</span>
                            </div>
                            <div class="d-flex align-items-center">
                                <i data-lucide="download" class="me-1" style="width: 0.875rem; height: 0.875rem;"></i>
                                <span>${(model.downloads / 1000).toFixed(0)}k</span>
                            </div>
                        </div>
                    </div>
                    
                    <button class="btn btn-gradient-cyan w-100" onclick="tryModel('${model.id}')">
                        Try Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-initialize Lucide icons
    lucide.createIcons();
}

// Try Model
function tryModel(modelId) {
    const model = appState.models.find(m => m.id === modelId);
    if (model) {
        alert(`Opening ${model.name} demo...`);
        // In a real app, this would navigate to the model detail page
    }
}

// Handle Auth Form Submit
function handleAuthSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email') || event.target.querySelector('input[type="email"]').value;
    const password = formData.get('password') || event.target.querySelector('input[type="password"]').value;
    
    // Simulate authentication
    showLoading(event.target.querySelector('button[type="submit"]'));
    
    setTimeout(() => {
        hideLoading(event.target.querySelector('button[type="submit"]'));
        alert(`${appState.isAuthMode === 'signin' ? 'Sign in' : 'Sign up'} successful!`);
        showPage('home');
    }, 2000);
}

// Toggle Auth Mode
function toggleAuthMode() {
    appState.isAuthMode = appState.isAuthMode === 'signin' ? 'signup' : 'signin';
    
    const title = document.querySelector('#auth-page h2');
    const submitBtn = document.querySelector('#authForm button[type="submit"]');
    const toggleText = document.querySelector('#auth-page p');
    
    if (appState.isAuthMode === 'signup') {
        title.textContent = 'Create your account';
        submitBtn.textContent = 'Sign Up';
        toggleText.innerHTML = 'Already have an account? <button class="btn btn-link text-cyan-400 p-0" onclick="toggleAuthMode()">Sign in</button>';
    } else {
        title.textContent = 'Sign in to your account';
        submitBtn.textContent = 'Sign In';
        toggleText.innerHTML = 'Don\'t have an account? <button class="btn btn-link text-cyan-400 p-0" onclick="toggleAuthMode()">Sign up</button>';
    }
}

// Handle Upload Form Submit
function handleUploadSubmit(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('button[type="submit"]');
    showLoading(submitBtn);
    
    setTimeout(() => {
        hideLoading(submitBtn);
        showUploadSuccess();
    }, 3000);
}

// Show Upload Success
function showUploadSuccess() {
    const uploadPage = document.getElementById('upload-page');
    uploadPage.innerHTML = `
        <div class="min-vh-100 d-flex align-items-center justify-content-center">
            <div class="text-center" style="max-width: 28rem;">
                <div class="card bg-slate-800 border-slate-700">
                    <div class="card-body text-center p-5">
                        <div class="icon-box bg-gradient-cyan-subtle mx-auto mb-4" style="width: 4rem; height: 4rem;">
                            <i data-lucide="check-circle" class="text-emerald-400" style="width: 2rem; height: 2rem;"></i>
                        </div>
                        <h2 class="text-white mb-3">Model Uploaded Successfully!</h2>
                        <p class="text-slate-300 mb-4">
                            Your model is now being processed and will be available in the marketplace shortly.
                        </p>
                        <div class="d-grid gap-2">
                            <button class="btn btn-gradient-cyan" onclick="viewModel()">
                                View Model
                            </button>
                            <button class="btn btn-outline-light" onclick="showPage('upload'); location.reload();">
                                Upload Another Model
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

// View Model (placeholder)
function viewModel() {
    alert('Redirecting to model page...');
    showPage('explore');
}

// Setup File Upload
function setupFileUpload() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    
    if (!dropZone || !fileInput) return;
    
    // Drag and drop events
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drag-over');
    });
    
    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
    });
    
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileSelect(files[0]);
        }
    });
    
    // File input change
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFileSelect(e.target.files[0]);
        }
    });
}

// Handle File Select
function handleFileSelect(file) {
    const dropZone = document.getElementById('dropZone');
    const fileSize = (file.size / (1024 * 1024)).toFixed(2);
    
    dropZone.innerHTML = `
        <div class="text-center">
            <i data-lucide="file-text" class="text-cyan-400 mb-3" style="width: 3rem; height: 3rem;"></i>
            <p class="text-white mb-1">${file.name}</p>
            <p class="text-slate-400 small mb-3">${fileSize} MB</p>
            <button type="button" class="btn btn-sm btn-outline-cyan" onclick="removeFile()">
                Remove file
            </button>
        </div>
    `;
    
    lucide.createIcons();
}

// Remove File
function removeFile() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    
    if (fileInput) fileInput.value = '';
    
    dropZone.innerHTML = `
        <i data-lucide="upload" class="text-slate-400 mb-3" style="width: 3rem; height: 3rem;"></i>
        <p class="text-white mb-2">
            Drop your model file here, or 
            <label class="text-cyan-400 text-decoration-underline" style="cursor: pointer;">
                browse
                <input type="file" class="d-none" id="fileInput" accept=".pkl,.joblib,.h5,.pb,.onnx,.json">
            </label>
        </p>
        <p class="text-slate-400 small">Supports: .pkl, .joblib, .h5, .pb, .onnx, .json (Max 500MB)</p>
    `;
    
    lucide.createIcons();
    setupFileUpload(); // Re-setup event listeners
}

// Setup Pricing Selection
function setupPricingSelection() {
    const pricingRadios = document.querySelectorAll('input[name="pricing"]');
    const priceInput = document.getElementById('priceInput');
    
    pricingRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (priceInput) {
                if (e.target.value === 'free') {
                    priceInput.classList.add('d-none');
                } else {
                    priceInput.classList.remove('d-none');
                }
            }
        });
    });
}

// Loading States
function showLoading(button) {
    if (!button) return;
    
    button.disabled = true;
    const originalText = button.textContent;
    button.setAttribute('data-original-text', originalText);
    button.innerHTML = `
        <span class="loading me-2"></span>
        Loading...
    `;
}

function hideLoading(button) {
    if (!button) return;
    
    button.disabled = false;
    const originalText = button.getAttribute('data-original-text');
    button.textContent = originalText || 'Submit';
}

// Utility Functions
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling for anchor links
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize tooltips (if using Bootstrap tooltips)
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
});

// Export functions for global access
window.showPage = showPage;
window.tryModel = tryModel;
window.toggleAuthMode = toggleAuthMode;
window.viewModel = viewModel;
window.removeFile = removeFile;