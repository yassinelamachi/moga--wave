// Mogawave Translation System
// Supports: English, French, Spanish

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.booking': 'Book a Lesson',
        'nav.reviews': 'Reviews',
        'nav.gallery': 'Gallery',
        'nav.about': 'About Us',
        'nav.contact': 'Contact',
        
        // Index Page
        'hero.title': 'Ride the Waves & Find Your Flow',
        'hero.subtitle': "Experience the thrill of surfing and the serenity of yoga with professional guidance in Morocco's most beautiful coastal city.",
        'hero.cta': 'Book Your Lesson Now',
        'hero.learn': 'Learn More',
        
        'features.title': 'Why Choose Mogawave?',
        'features.certified.title': 'Certified Instructors',
        'features.certified.desc': 'Professional trainers with years of experience in both surfing and yoga.',
        'features.flexible.title': 'Flexible Scheduling',
        'features.flexible.desc': 'Book your lessons at your own pace with flexible time slots available.',
        'features.safety.title': 'Safety First',
        'features.safety.desc': 'We prioritize your safety with proper equipment and professional guidance.',
        'features.community.title': 'Vibrant Community',
        'features.community.desc': 'Join our growing community of water sports and wellness enthusiasts.',
        
        'lessons.title': 'Our Lessons',
        'lessons.surf.title': '🏄 Surf Lessons',
        'lessons.surf.desc': 'Learn to ride the perfect waves with expert instruction.',
        'lessons.yoga.title': '🧘 Yoga Lessons',
        'lessons.yoga.desc': 'Find your inner peace with serene beachside yoga sessions.',
        
        'cta.title': 'Ready to Get Started?',
        'cta.subtitle': 'Book your first lesson today and discover a new passion.',
        'cta.button': 'Start Your Journey',
        
        // Booking Page
        'booking.title': 'Book Your Lesson',
        'booking.subtitle': 'Choose your lesson type and select your preferred date and time.',
        'booking.lesson_type': 'Lesson Type',
        'booking.lesson_type_select': 'Select a lesson type',
        'booking.lesson_type_surf': '🏄 Surf Lesson',
        'booking.lesson_type_yoga': '🧘 Yoga Lesson',
        'booking.name': 'Full Name',
        'booking.email': 'Email Address',
        'booking.whatsapp': 'WhatsApp Number (Optional)',
        'booking.date': 'Preferred Lesson Date',
        'booking.contact': 'Preferred Contact Method',
        'booking.contact_whatsapp': 'WhatsApp',
        'booking.contact_email': 'Email',
        'booking.contact_instagram': 'Instagram',
        'booking.message': 'Additional Message (Optional)',
        'booking.submit': 'Book My Lesson',
        'booking.success': '✅ Booking submitted successfully!<br>We will contact you shortly to confirm the booking!',
        'booking.error': 'Please try again or contact us directly.',
        'booking.invalid_date': 'Please select a future date for your lesson.',
        
        // Reviews Page
        'reviews.title': 'Reviews',
        'reviews.subtitle': 'Share your experience and help others choose the best lessons.',
        'reviews.name': 'Your Name',
        'reviews.rating': 'Rating',
        'reviews.message': 'Your Review',
        'reviews.submit': 'Submit Review',
        'reviews.thanks': 'Thank you — your review has been submitted!',
        'reviews.placeholder_name': 'Full name',
        'reviews.placeholder_message': 'Tell others about your experience...',
        'reviews.no_reviews': 'No reviews yet. Be the first to leave one!',
        
        // Gallery Page
        'gallery.title': 'Gallery',
        'gallery.subtitle': 'Explore our stunning moments from lessons and events.',
        
        // About Page
        'about.title': 'About Mogawave',
        'about.intro': 'Welcome to Mogawave, your ultimate destination for professional surf and yoga lessons in Essaouira, Morocco.',
        'about.mission': 'Our Mission',
        'about.mission_text': 'We are dedicated to providing exceptional water sports and wellness experiences for people of all levels. Whether you\'re a complete beginner or looking to refine your skills, we have the perfect program for you.',
        'about.story': 'Our Story',
        'about.story_text': 'Founded in 2020, Mogawave has quickly become the go-to choice for quality lessons in Essaouira. Our team of certified instructors is passionate about sharing their love for surfing and yoga with the world.',
        'about.values': 'Our Values',
        'about.values_text': 'Excellence, Safety, Community, and Passion guide everything we do. We believe in creating a welcoming environment where everyone can thrive.',
        
        // Footer
        'footer.about': 'Professional surf and yoga lessons in Essaouira, Morocco. Experience the best waves and find your zen with certified instructors.',
        'footer.contact': 'Contact Info',
        'footer.hours': 'Hours',
        'footer.hours_days': 'Monday - Sunday',
        'footer.hours_time': '8:00 AM - 6:00 PM',
        'footer.hours_lessons': 'Lessons available on request',
        'footer.copyright': '© 2024 Mogawave Surf & Yoga Lessons. All rights reserved.',
    },
    
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.booking': 'Réserver une leçon',
        'nav.reviews': 'Avis',
        'nav.gallery': 'Galerie',
        'nav.about': 'À propos',
        'nav.contact': 'Contact',
        
        // Index Page
        'hero.title': 'Dominez les vagues et trouvez votre flow',
        'hero.subtitle': "Vivez l'adrénaline du surf et la sérénité du yoga avec un guide professionnel dans la plus belle ville côtière du Maroc.",
        'hero.cta': 'Réservez votre leçon maintenant',
        'hero.learn': 'En savoir plus',
        
        'features.title': 'Pourquoi choisir Mogawave?',
        'features.certified.title': 'Instructeurs certifiés',
        'features.certified.desc': 'Des formateurs professionnels avec des années d\'expérience en surf et yoga.',
        'features.flexible.title': 'Horaires flexibles',
        'features.flexible.desc': 'Réservez vos leçons à votre rythme avec des créneaux disponibles.',
        'features.safety.title': 'Sécurité avant tout',
        'features.safety.desc': 'Nous donnons la priorité à votre sécurité avec un équipement approprié.',
        'features.community.title': 'Communauté dynamique',
        'features.community.desc': 'Rejoignez notre communauté croissante d\'amateurs de sports nautiques.',
        
        'lessons.title': 'Nos leçons',
        'lessons.surf.title': '🏄 Leçons de surf',
        'lessons.surf.desc': 'Apprenez à dompter les vagues parfaites avec un enseignement expert.',
        'lessons.yoga.title': '🧘 Leçons de yoga',
        'lessons.yoga.desc': 'Trouvez votre paix intérieure avec des séances de yoga au bord de la mer.',
        
        'cta.title': 'Prêt à commencer?',
        'cta.subtitle': 'Réservez votre première leçon dès aujourd\'hui et découvrez une nouvelle passion.',
        'cta.button': 'Commencez votre parcours',
        
        // Booking Page
        'booking.title': 'Réserver votre leçon',
        'booking.subtitle': 'Choisissez votre type de leçon et sélectionnez votre date préférée.',
        'booking.lesson_type': 'Type de leçon',
        'booking.lesson_type_select': 'Sélectionnez un type de leçon',
        'booking.lesson_type_surf': '🏄 Leçon de surf',
        'booking.lesson_type_yoga': '🧘 Leçon de yoga',
        'booking.name': 'Nom complet',
        'booking.email': 'Adresse e-mail',
        'booking.whatsapp': 'Numéro WhatsApp (Optionnel)',
        'booking.date': 'Date préférée de la leçon',
        'booking.contact': 'Méthode de contact préférée',
        'booking.contact_whatsapp': 'WhatsApp',
        'booking.contact_email': 'E-mail',
        'booking.contact_instagram': 'Instagram',
        'booking.message': 'Message supplémentaire (Optionnel)',
        'booking.submit': 'Réserver ma leçon',
        'booking.success': '✅ Réservation soumise avec succès!<br>Nous vous contacterons bientôt pour confirmer la réservation!',
        'booking.error': 'Veuillez réessayer ou nous contacter directement.',
        'booking.invalid_date': 'Veuillez sélectionner une date future pour votre leçon.',
        
        // Reviews Page
        'reviews.title': 'Avis',
        'reviews.subtitle': 'Partagez votre expérience et aidez les autres à choisir les meilleures leçons.',
        'reviews.name': 'Votre nom',
        'reviews.rating': 'Note',
        'reviews.message': 'Votre avis',
        'reviews.submit': 'Envoyer l\'avis',
        'reviews.thanks': 'Merci — votre avis a été envoyé !',
        'reviews.placeholder_name': 'Nom complet',
        'reviews.placeholder_message': 'Parlez aux autres de votre expérience...',
        'reviews.no_reviews': 'Aucun avis pour le moment. Soyez le premier à en laisser un !',
        
        // Gallery Page
        'gallery.title': 'Galerie',
        'gallery.subtitle': 'Explorez nos magnifiques moments de leçons et événements.',
        
        // About Page
        'about.title': 'À propos de Mogawave',
        'about.intro': 'Bienvenue chez Mogawave, votre destination ultime pour des leçons de surf et de yoga professionnelles à Essaouira, Maroc.',
        'about.mission': 'Notre mission',
        'about.mission_text': 'Nous nous engageons à offrir des expériences exceptionnelles en sports nautiques et bien-être pour les personnes de tous niveaux.',
        'about.story': 'Notre histoire',
        'about.story_text': 'Fondée en 2020, Mogawave est rapidement devenue le choix incontournable pour des leçons de qualité à Essaouira.',
        'about.values': 'Nos valeurs',
        'about.values_text': 'Excellence, Sécurité, Communauté et Passion guident tout ce que nous faisons.',
        
        // Footer
        'footer.about': 'Leçons professionnelles de surf et yoga à Essaouira, Maroc. Découvrez les meilleures vagues et trouvez votre zen.',
        'footer.contact': 'Informations de contact',
        'footer.hours': 'Horaires',
        'footer.hours_days': 'Lundi - Dimanche',
        'footer.hours_time': '8h00 - 18h00',
        'footer.hours_lessons': 'Leçons disponibles sur demande',
        'footer.copyright': '© 2024 Mogawave Leçons de surf et yoga. Tous droits réservés.',
    },
    
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.booking': 'Reservar una lección',
        'nav.reviews': 'Opiniones',
        'nav.gallery': 'Galería',
        'nav.about': 'Acerca de',
        'nav.contact': 'Contacto',
        
        // Index Page
        'hero.title': 'Domina las olas y encuentra tu flujo',
        'hero.subtitle': 'Vive la emoción del surf y la serenidad del yoga con una guía profesional en la ciudad costera más hermosa de Marruecos.',
        'hero.cta': 'Reserva tu lección ahora',
        'hero.learn': 'Aprende más',
        
        'features.title': '¿Por qué elegir Mogawave?',
        'features.certified.title': 'Instructores certificados',
        'features.certified.desc': 'Entrenadores profesionales con años de experiencia en surf y yoga.',
        'features.flexible.title': 'Horarios flexibles',
        'features.flexible.desc': 'Reserva tus lecciones a tu ritmo con horarios disponibles flexibles.',
        'features.safety.title': 'Seguridad primero',
        'features.safety.desc': 'Priorizamos tu seguridad con equipo apropiado y guía profesional.',
        'features.community.title': 'Comunidad vibrante',
        'features.community.desc': 'Únete a nuestra creciente comunidad de entusiastas de deportes acuáticos.',
        
        'lessons.title': 'Nuestras lecciones',
        'lessons.surf.title': '🏄 Lecciones de surf',
        'lessons.surf.desc': 'Aprende a dominar las olas perfectas con instrucción experta.',
        'lessons.yoga.title': '🧘 Lecciones de yoga',
        'lessons.yoga.desc': 'Encuentra tu paz interior con sesiones de yoga junto al mar.',
        
        'cta.title': '¿Listo para comenzar?',
        'cta.subtitle': 'Reserva tu primera lección hoy y descubre una nueva pasión.',
        'cta.button': 'Comienza tu viaje',
        
        // Booking Page
        'booking.title': 'Reserva tu lección',
        'booking.subtitle': 'Elige tu tipo de lección y selecciona tu fecha preferida.',
        'booking.lesson_type': 'Tipo de lección',
        'booking.lesson_type_select': 'Selecciona un tipo de lección',
        'booking.lesson_type_surf': '🏄 Lección de surf',
        'booking.lesson_type_yoga': '🧘 Lección de yoga',
        'booking.name': 'Nombre completo',
        'booking.email': 'Correo electrónico',
        'booking.whatsapp': 'Número de WhatsApp (Opcional)',
        'booking.date': 'Fecha preferida de la lección',
        'booking.contact': 'Método de contacto preferido',
        'booking.contact_whatsapp': 'WhatsApp',
        'booking.contact_email': 'Correo electrónico',
        'booking.contact_instagram': 'Instagram',
        'booking.message': 'Mensaje adicional (Opcional)',
        'booking.submit': 'Reserva mi lección',
        'booking.success': '✅ ¡Reserva enviada exitosamente!<br>¡Te contactaremos pronto para confirmar la reserva!',
        'booking.error': 'Por favor intenta de nuevo o contáctanos directamente.',
        'booking.invalid_date': 'Por favor selecciona una fecha futura para tu lección.',
        
        // Reviews Page
        'reviews.title': 'Opiniones',
        'reviews.subtitle': 'Comparte tu experiencia y ayuda a otros a elegir las mejores lecciones.',
        'reviews.name': 'Tu nombre',
        'reviews.rating': 'Valoración',
        'reviews.message': 'Tu reseña',
        'reviews.submit': 'Enviar reseña',
        'reviews.thanks': '¡Gracias — tu reseña ha sido enviada!',
        'reviews.placeholder_name': 'Nombre completo',
        'reviews.placeholder_message': 'Cuéntales sobre tu experiencia...',
        'reviews.no_reviews': 'Aún no hay opiniones. ¡Sé el primero en dejar una!',
        
        // Gallery Page
        'gallery.title': 'Galería',
        'gallery.subtitle': 'Explora nuestros hermosos momentos de lecciones y eventos.',
        
        // About Page
        'about.title': 'Acerca de Mogawave',
        'about.intro': 'Bienvenido a Mogawave, tu destino definitivo para lecciones profesionales de surf y yoga en Essaouira, Marruecos.',
        'about.mission': 'Nuestra misión',
        'about.mission_text': 'Nos dedicamos a proporcionar experiencias excepcionales en deportes acuáticos y bienestar para personas de todos los niveles.',
        'about.story': 'Nuestra historia',
        'about.story_text': 'Fundada en 2020, Mogawave se ha convertido rápidamente en la opción preferida para lecciones de calidad en Essaouira.',
        'about.values': 'Nuestros valores',
        'about.values_text': 'Excelencia, Seguridad, Comunidad y Pasión guían todo lo que hacemos.',
        
        // Footer
        'footer.about': 'Lecciones profesionales de surf y yoga en Essaouira, Marruecos. Vive las mejores olas y encuentra tu zen.',
        'footer.contact': 'Información de contacto',
        'footer.hours': 'Horarios',
        'footer.hours_days': 'Lunes - Domingo',
        'footer.hours_time': '8:00 AM - 6:00 PM',
        'footer.hours_lessons': 'Lecciones disponibles bajo demanda',
        'footer.copyright': '© 2024 Mogawave Lecciones de Surf y Yoga. Todos los derechos reservados.',
    }
};

// Translation System
class TranslationSystem {
    constructor() {
        this.currentLang = localStorage.getItem('mogawave_lang') || 'en';
        this.initialized = false;
    }

    init() {
        this.setupTranslationButton();
        this.applyTranslations(this.currentLang);
        this.initialized = true;
    }

    setupTranslationButton() {
        // Create translation button if it doesn't exist
        const navContainer = document.querySelector('.nav-container');
        if (!navContainer || document.getElementById('langSelector')) return;

        const langHTML = `
            <div class="language-selector" id="langSelector">
                <button class="lang-toggle" id="langToggle">
                    <i class="fas fa-globe"></i>
                </button>
                <div class="lang-menu">
                    <button class="lang-option" data-lang="en">🇬🇧 English</button>
                    <button class="lang-option" data-lang="fr">🇫🇷 Français</button>
                    <button class="lang-option" data-lang="es">🇪🇸 Español</button>
                </div>
            </div>
        `;

        navContainer.insertAdjacentHTML('beforeend', langHTML);

        // Setup event listeners
        document.getElementById('langToggle').addEventListener('click', () => {
            document.querySelector('.lang-menu').classList.toggle('active');
        });

        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                this.setLanguage(lang);
                document.querySelector('.lang-menu').classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                document.querySelector('.lang-menu').classList.remove('active');
            }
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('mogawave_lang', lang);
        this.applyTranslations(lang);
        document.documentElement.lang = lang;
    }

    applyTranslations(lang) {
        const texts = translations[lang];
        
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (texts[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = texts[key];
                } else {
                    element.innerHTML = texts[key];
                }
            }
        });

        // Update page language attribute
        document.documentElement.lang = lang;
    }

    t(key) {
        return translations[this.currentLang][key] || key;
    }
}

// Initialize translation system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.translator = new TranslationSystem();
    window.translator.init();
});
