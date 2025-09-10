const websiteData = {
    stats: [
        { label: "Projects Completed", value: "500+" },
        { label: "Happy Clients", value: "250+" },
        { label: "Years of Experience", value: "10+" },
        { label: "Team Members", value: "25+" }
    ],
    features: [
        {
            icon: "💡",
            title: "Innovative Solutions",
            description: "Cutting-edge technology solutions designed to solve complex business challenges and drive innovation."
        },
        {
            icon: "🔒",
            title: "Secure & Reliable",
            description: "Enterprise-grade security measures and reliable infrastructure to protect your business data and operations."
        },
        {
            icon: "⚡",
            title: "Fast Implementation",
            description: "Rapid deployment and implementation to get your solutions up and running quickly with minimal downtime."
        }
    ],
    team: [
        {
            name: "Aftab Shaikh",
            role: "CEO & Founder",
            initial: "Sk",
            bio: "10+ years of experience in technology leadership and business strategy."
        },
        {
            name: "Sk",
            role: "CTO",
            initial: "SS",
            bio: "Expert in software architecture and emerging technologies with 12+ years experience."
        },
        {
            name: "John",
            role: "Lead Designer",
            initial: "JN",
            bio: "Creative professional specializing in user experience and modern design principles."
        }
    ],
    services: [
        {
            icon: "🌐",
            title: "Web Development",
            description: "Custom web applications and websites built with modern frameworks and technologies for optimal performance and user experience.",
            features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Performance Focused"]
        },
        {
            icon: "📱",
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
            features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Optimization"]
        },
        {
            icon: "☁️",
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and migration services to modernize your business operations and reduce costs.",
            features: ["Cloud Migration", "Infrastructure Management", "Auto Scaling", "Cost Optimization"]
        },
        {
            icon: "🤖",
            title: "AI & Machine Learning",
            description: "Intelligent automation and data analytics solutions to enhance decision-making and operational efficiency.",
            features: ["Predictive Analytics", "Process Automation", "Data Mining", "Custom AI Models"]
        },
        {
            icon: "🔐",
            title: "Cybersecurity",
            description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
            features: ["Security Audits", "Threat Protection", "Compliance", "Incident Response"]
        },
        {
            icon: "📊",
            title: "Data Analytics",
            description: "Advanced analytics and business intelligence solutions to unlock insights from your data.",
            features: ["Business Intelligence", "Data Visualization", "Real-time Analytics", "Custom Dashboards"]
        }
    ]
};

// === State & DOM Elements ===
let currentPage = 'home';
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');
const CONTACT_ENDPOINT = 'php/contact.php'; // PHP backend

// === Initialize App ===
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadDynamicContent();
    initializeContactForm();
    initializeMobileMenu();
});

// === Navigation System ===
function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page');
            showPage(pageName);
        });
    });
}

function showPage(pageName) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageName) {
            page.classList.add('active');
        }
    });

    currentPage = pageName;
    navMenu.classList.remove('active'); // close mobile menu
}

// === Mobile Menu ===
function initializeMobileMenu() {
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// === Dynamic Content ===
function loadDynamicContent() {
    loadStats();
    loadFeatures();
    loadTeam();
    loadServices();
}

function loadStats() {
    const statsGrid = document.getElementById('statsGrid');
    statsGrid.innerHTML = '';
    websiteData.stats.forEach(stat => {
        const statElement = document.createElement('div');
        statElement.className = 'stat-item';
        statElement.innerHTML = `<h3>${stat.value}</h3><p>${stat.label}</p>`;
        statsGrid.appendChild(statElement);
    });
}

function loadFeatures() {
    const featuresGrid = document.getElementById('featuresGrid');
    featuresGrid.innerHTML = '';
    websiteData.features.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.className = 'card';
        featureElement.innerHTML = `
            <div class="card-icon">${feature.icon}</div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresGrid.appendChild(featureElement);
    });
}

function loadTeam() {
    const teamGrid = document.getElementById('teamGrid');
    teamGrid.innerHTML = '';
    websiteData.team.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'card team-member';
        memberElement.innerHTML = `
            <div class="member-photo">${member.initial}</div>
            <h3>${member.name}</h3>
            <h4 style="color: var(--secondary-color); margin-bottom: 1rem;">${member.role}</h4>
            <p>${member.bio}</p>
        `;
        teamGrid.appendChild(memberElement);
    });
}

function loadServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = '';
    websiteData.services.forEach(service => {
        const featuresHtml = service.features.map(feature => 
            `<span class="tag">${feature}</span>`
        ).join('');
        const serviceElement = document.createElement('div');
        serviceElement.className = 'card';
        serviceElement.innerHTML = `
            <div class="card-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div>${featuresHtml}</div>
        `;
        servicesGrid.appendChild(serviceElement);
    });
}

// === Contact Form ===
function initializeContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmissionAPI();
    });
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    const errorElement = document.getElementById(fieldName + 'Error');
    let errorMessage = '';

    switch(fieldName) {
        case 'name':
            if (!value) errorMessage = 'Name is required';
            else if (value.length < 2) errorMessage = 'Name must be at least 2 characters long';
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) errorMessage = 'Email is required';
            else if (!emailRegex.test(value)) errorMessage = 'Enter a valid email';
            break;
        case 'subject':
            if (!value) errorMessage = 'Subject is required';
            else if (value.length < 5) errorMessage = 'Subject must be at least 5 characters long';
            break;
        case 'message':
            if (!value) errorMessage = 'Message is required';
            else if (value.length < 10) errorMessage = 'Message must be at least 10 characters long';
            break;
    }

    if (errorMessage) {
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
        field.style.borderColor = 'var(--accent-color)';
        return false;
    } else {
        errorElement.style.display = 'none';
        field.style.borderColor = '#e0e0e0';
        return true;
    }
}

function validateForm() {
    const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
    let isFormValid = true;
    inputs.forEach(input => {
        if (!validateField(input)) isFormValid = false;
    });
    return isFormValid;
}

async function handleFormSubmissionAPI() {
    if (!validateForm()) return;

    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoading = document.getElementById('btnLoading');
    btnText.classList.add('hidden');
    btnLoading.classList.remove('hidden');
    submitBtn.disabled = true;

    try {
        const formEl = document.getElementById('contactForm');
        const formData = new FormData(formEl);
        const response = await fetch(CONTACT_ENDPOINT, { method: 'POST', body: formData });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const result = await response.json();

        if (result.success) {
            document.getElementById('successMessage').style.display = 'block';
            formEl.reset();
            setTimeout(() => document.getElementById('successMessage').style.display = 'none', 5000);
        } else {
            alert(result.message || 'Something went wrong. Try again.');
        }
    } catch (error) {
        console.error('Form submission failed:', error);
        alert('Server error. Please try again later.');
    } finally {
        btnText.classList.remove('hidden');
        btnLoading.classList.add('hidden');
        submitBtn.disabled = false;
    }
}
