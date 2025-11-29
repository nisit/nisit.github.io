
// Portfolio Interaction & Animation Scripts
class PortfolioManager {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollProgress();
        this.initSmoothScroll();
        this.initIntersectionObserver();
        this.initSkillBars();
        this.initRadarChart();
    }

    // Scroll Progress Bar
    initScrollProgress() {
		window.addEventListener('scroll', () => {
			const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scrolled = (window.scrollY / windowHeight) * 100;
			document.getElementById('progressBar').style.width = scrolled + '%';
		});
    }

    // Smooth Scroll for Anchor Links
    initSmoothScroll() {
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const target = document.querySelector(this.getAttribute('href'));
				if (target) {
					target.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
				}
			});
		});
    }

    // Intersection Observer for Fade-in Animations
    initIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all animated elements
        const animatedElements = [
            '.philosophy-card',
            '.project-card',
            '.timeline-item',
            '.expertise-category',
            '.value-card',
            '.process-step',
            '.contact-card',
            '.social-card',
            '.solution-card',
            '.stat-card'
        ];

        animatedElements.forEach(selector => {
            document.querySelectorAll(selector).forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                el.style.transitionDelay = `${index * 0.1}s`;
                observer.observe(el);
            });
        });

        // Observe section headers
        document.querySelectorAll('.section-header').forEach((el) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
            observer.observe(el);
        });
    }

    // Animated Skill Bars
    initSkillBars() {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    if (progressBar) {
                        const percentage = progressBar.dataset.percentage;
                        progressBar.style.width = percentage + '%';
                    }
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-item').forEach(item => {
            skillObserver.observe(item);
        });
    }

	// ---------- TECH RADAR CHART ----------
	initRadarChart() {
		// Initialise the configurations here.
		const ctx = document.getElementById('techRadar').getContext('2d');
		const techData = {
			labels: [
				'WordPress', 'WooCommerce', 'Gutenberg',
				'React/Next.js', 'Node.js', 'Django/Flask', 'GraphQL',
				'Python', 'PyTorch/TensorFlow', 'LLMs (LLaMA)',
				'Docker', 'AWS/GCP', 'CI/CD'
			],
			datasets: [{
				label: 'Expertise Level',
				data: [5, 5, 4, 5, 5, 4, 3, 5, 4, 3, 4, 4, 4], // Your expertise levels
				fill: true,
				backgroundColor: 'rgba(0, 230, 118, 0.15)', /* Accent color */
				borderColor: 'rgba(0, 230, 118, 0.8)', /* Accent color */
				pointBackgroundColor: [
					'#06B6D4', '#0EA5E9', '#67E8F9',  // Cyan for WordPress
					'#8B5CF6', '#A855F7', '#C4B5FD', '#E9D5FF',  // Purple for Full-Stack
					'#FB923C', '#FBBF24', '#FDE047',  // Orange for AI/ML
					'#14B8A6', '#2DD4BF', '#5EEAD4'   // Teal for Cloud/DevOps
				],
				pointBorderColor: 'var(--primary)',
				pointBorderWidth: 2,
				pointRadius: window.innerWidth < 480 ? 5 : 6, // Responsive point size
				pointHoverRadius: window.innerWidth < 480 ? 8 : 9,
				pointHoverBorderWidth: 3,
				borderWidth: 2
			}]
		};
		const chartOptions = {
			responsive: true,
			maintainAspectRatio: true,
			aspectRatio: 1,
			interaction: {
				mode: 'point', // Better for touch
				intersect: true
			},
			elements: {
				line: { tension: 0.3 }
			},
			plugins: {
				legend: { display: false },
				tooltip: {
					backgroundColor: 'var(--secondary)',
					titleFont: { size: 15, weight: 'bold', family: 'IBM Plex Sans' },
					bodyFont: { size: 14, family: 'IBM Plex Sans' },
					padding: 14,
					cornerRadius: 8,
					borderColor: 'var(--border)',
					borderWidth: 1,
					displayColors: false,
					callbacks: {
						label: function(context) {
							const skill = context.label;
							const level = context.raw;
							const yearsMap = {
								'WordPress': '15+', 'WooCommerce': '10+', 'Gutenberg': '5+',
								'React/Next.js': '8+', 'Node.js': '10+', 'Django/Flask': '7+', 'GraphQL': '3+',
								'Python': '12+', 'PyTorch/TensorFlow': '4+', 'LLMs (LLaMA)': '1+',
								'Docker': '6+', 'AWS/GCP': '8+', 'CI/CD': '10+'
							};
							const levelTextMap = ['', 'Learning', 'Familiar', 'Proficient', 'Expert', 'Mastery'];
							const levelName = levelTextMap[level];
							const years = yearsMap[skill] || 'N/A';
							return [`Level: ${levelName} (${level}/5)`, `Experience: ${years} years`];
						}
					}
				}
			},
			scales: {
				r: {
					angleLines: { color: 'var(--border)' },
					grid: { color: 'rgba(44, 44, 44, 0.5)' },
					pointLabels: {
						font: { 
							size: window.innerWidth < 480 ? 10 : 13,
							weight: '600',
							family: 'IBM Plex Mono'
						},
						color: 'var(--text-muted)'
					},
					ticks: {
						backdropColor: 'var(--tertiary)',
						color: 'var(--text-muted)',
						font: {
							size: window.innerWidth < 480 ? 10 : 12,
							family: 'IBM Plex Mono'
						},
						stepSize: 1,
						showLabelBackdrop: false,
						callback: value => ['', '1', '2', '3', '4', '5'][value]
					},
					min: 0,
					max: 5
				}
			},
			animation: {
				duration: 1500,
				easing: 'easeOutQuart'
			}
		};

		// Plot the chart here.
		let radarChart = new Chart(ctx, {
			type: 'radar',
			data: techData,
			options: chartOptions
		});

		// Handle window resize for better mobile experience
		window.addEventListener('resize', () => {
			radarChart.resize();
		});
	}
}


// Render Dynamic Content from Data
class ContentRenderer {
    constructor(data) {
        this.data = data;
    }

    // SVG icons for different link types
    getProjectSvgIcon(type) {
        const icons = {
            external: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>`,
            internal: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
            github: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1-3-1.4-3.5-.5-.3-1.2-.3-1.8.1 0 0-1.5 1-3 1.5-1.2-.3-2.4-.3-3.5 0-1.5-.5-3-1.5-3-1.5-.6-.4-1.3-.3-1.8.1-.4.5-1.4 3-1.4 3-.5.92-.78 2.03-.75 3.18 0 3.5 3 5.5 6 5.5-.3.6-.6 1.2-.6 2v4"/></svg>`
        };
        return icons[type] || icons.external;
    }

    renderHero() {
        const heroContent = document.querySelector('header .hero-content');
        if (!heroContent) return;

        const ctaButtons = this.data.hero.ctas.map(cta => `
            <a href="${cta.href}" class="btn btn-${cta.type}">
                ${cta.icon}
                ${cta.text}
            </a>
        `).join('');

        const stats = this.data.hero.stats.map(stat => `
            <div class="stat-item">
                <span class="stat-number">${stat.number}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('');

        heroContent.innerHTML = `
            <div class="label mono">${this.data.hero.label}</div>
            <h1>
                ${this.data.hero.name}<br>
                <span class="text-gradient">${this.data.hero.tagline}</span>
            </h1>
            <p class="hero-description">
                ${this.data.hero.description}
            </p>
            <div class="cta-group">
                ${ctaButtons}
            </div>
            <div class="stats">
                ${stats}
            </div>
        `;
    }

    renderPhilosophy() {
        const container = document.querySelector('#philosophy .philosophy-grid');
        if (!container) return;

        container.innerHTML = this.data.philosophy.map(item => `
            <div class="philosophy-card">
                <div class="philosophy-icon">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    renderWhyWorkWithMe() {
        const container = document.querySelector('#why-me .value-props');
        if (!container) return;

        container.innerHTML = this.data.whyWorkWithMe.map(item => `
            <div class="value-card">
                <div class="value-number">${item.number}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    renderProcess() {
        const container = document.querySelector('#process .process-steps');
        if (!container) return;

        container.innerHTML = this.data.process.map(step => `
            <div class="process-step">
                <div class="step-number">${step.number}</div>
                <div class="step-content">
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                </div>
            </div>
        `).join('');
    }

    renderTechRadar() {
        const section = document.querySelector('#techRadarSection');
        if (!section) return;

        // Render legend
        const legendContainer = section.querySelector('.radar-legend');
        if (legendContainer) {
            legendContainer.innerHTML = this.data.techRadar.legend.map(item => `
                <div class="legend-item">
                    <div class="legend-dot" style="background: ${item.color};"></div>
                    <span>${item.label}</span>
                </div>
            `).join('');
        }

        // Render marquee (duplicate items for seamless loop)
        const marqueeContent = section.querySelector('.marquee-content');
        if (marqueeContent) {
            const marqueeItems = this.data.techRadar.marquee.map(tech => 
                `<span class="tech-item">${tech}</span>`
            ).join('');
            // Duplicate for seamless loop
            marqueeContent.innerHTML = marqueeItems + marqueeItems;
        }

        // Render expertise categories
        const expertiseContainer = section.querySelector('.expertise-categories');
        if (expertiseContainer) {
            expertiseContainer.innerHTML = this.data.techRadar.expertise.map(category => `
                <div class="expertise-category">
                    <h3>${category.category}</h3>
                    <div class="tech-grid">
                        ${category.technologies.map(tech => 
                            `<div class="tech-item">${tech}</div>`
                        ).join('')}
                    </div>
                </div>
            `).join('');
        }
    }

    renderProjects() {
        const container = document.querySelector('.projects-grid');
        if (!container) return;

        container.innerHTML = this.data.projects.map(project => `
            <div class="project-card">
                <div class="project-content">
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link.url}" class="project-link"${project.link.target ? ` target="${project.link.target}"` : ''}>
                        ${project.link.text}
                        ${this.getProjectSvgIcon(project.link.type)}
                    </a>
                </div>
            </div>
        `).join('');
    }

    renderJourney() {
        const container = document.querySelector('#journey .timeline');
        if (!container) return;

        container.innerHTML = this.data.journey.map(item => `
            <div class="timeline-item reveal">
                <div class="timeline-content">
                    <div class="timeline-year mono">${item.year}</div>
                    <h3>${item.title}</h3>
                    <div class="timeline-company">
                        ${item.company}${item.location ? ` • ${item.location}` : ''}
                    </div>
                    <div class="timeline-description">
                        ${item.description}
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderEducation() {
        const container = document.querySelector('#education .philosophy-grid');
        if (!container) return;

        container.innerHTML = this.data.education.map(item => {
            if (item.type === 'degree') {
                return `
                    <div class="philosophy-card">
                        <h3>${item.degree}</h3>
                        <p style="color: var(--accent); font-weight: 600; margin-bottom: 0.5rem;">
                            ${item.institution}
                        </p>
                        <p>${item.year}</p>
                    </div>
                `;
            } else if (item.type === 'certifications') {
                const certificationsList = item.certifications.map(cert => 
                    `<strong>${cert.category}</strong> ${cert.details}`
                ).join('<br>');
                
                return `
                    <div class="philosophy-card">
                        <h3>${item.degree}</h3>
                        <p>${certificationsList}</p>
                    </div>
                `;
            }
        }).join('');
    }

    renderSocial() {
        const container = document.querySelector('#connect .social-connect-grid');
        if (!container) return;

        container.innerHTML = this.data.social.map(item => `
            <div class="social-card">
                <div class="social-icon">
                    ${item.icon}
                </div>
                <h3>${item.platform}</h3>
                <p>${item.description}</p>
                <a href="${item.url}" target="_blank" class="btn">
                    ${item.buttonText}
                </a>
            </div>
        `).join('');
    }

    renderContact() {
        const container = document.querySelector('#contact .contact-grid');
        if (!container) return;

        container.innerHTML = this.data.contact.map(item => {
            let content = `
                <div class="contact-card">
                    <div class="contact-icon">${item.icon}</div>
                    <h3>${item.title}</h3>
            `;

            if (item.type === 'calendly') {
                content += `
                    <a href="${item.link.url}" target="${item.link.target}" class="calendly-link">
                        ${item.link.text}
                    </a>
                `;
            } else if (item.type === 'location') {
                content += `
                    <iframe
                        src="${item.iframe.src}"
                        width="${item.iframe.width}"
                        height="${item.iframe.height}"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <a href="${item.link.url}"
                       target="${item.link.target}"
                       rel="${item.link.rel}">
                        ${item.link.text}
                    </a>
                `;
            }

            content += `</div>`;
            return content;
        }).join('');
    }

    renderFooter() {
        const footer = document.querySelector('footer .container');
        if (!footer) return;

        footer.innerHTML = `
            <p>&copy; ${this.data.footer.copyright}</p>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">
                ${this.data.footer.tagline}
            </p>
        `;
    }

    renderAll() {
        this.renderHero();
        this.renderPhilosophy();
		this.renderProcess();
		this.renderWhyWorkWithMe();
		 this.renderTechRadar();
        this.renderProjects();
        this.renderJourney();
		this.renderEducation();
        this.renderSocial();
		this.renderContact();
		this.renderFooter();
    }
}


	// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    // Render content from data
    const renderer = new ContentRenderer(portfolioData);
    renderer.renderAll();

    // Initialize portfolio manager
    const portfolio = new PortfolioManager();
});