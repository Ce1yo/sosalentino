// Script pour la page de réservation

// Définir la date minimale (aujourd'hui)
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Gestion du formulaire de réservation
const reservationForm = document.getElementById('reservationForm');

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = new FormData(reservationForm);
    const data = Object.fromEntries(formData);
    
    // Validation personnalisée
    if (!validateForm(data)) {
        return;
    }
    
    // Afficher un message de confirmation
    showConfirmation(data);
    
    // Réinitialiser le formulaire
    reservationForm.reset();
});

// Fonction de validation
function validateForm(data) {
    const { firstName, lastName, email, phone, date, time, guests } = data;
    
    // Vérifier que tous les champs requis sont remplis (email optionnel)
    if (!firstName || !lastName || !phone || !date || !time || !guests) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return false;
    }
    
    // Valider l'email seulement s'il est fourni
    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return false;
        }
    }
    
    // Valider le téléphone (format français simple)
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert('Veuillez entrer un numéro de téléphone valide.');
        return false;
    }
    
    // Vérifier que la date n'est pas dans le passé
    const selectedDate = new Date(date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    if (selectedDate < currentDate) {
        alert('Veuillez sélectionner une date future.');
        return false;
    }
    
    // Vérifier si c'est un lundi (fermé)
    if (selectedDate.getDay() === 1) {
        alert('Nous sommes fermés le lundi. Veuillez choisir un autre jour.');
        return false;
    }
    
    return true;
}

// Fonction pour afficher la confirmation
function showConfirmation(data) {
    const { firstName, lastName, date, time, guests } = data;
    
    // Formater la date en français
    const dateObj = new Date(date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatted = dateObj.toLocaleDateString('fr-FR', options);
    
    // Construire le message
    let message = `Merci ${firstName} ${lastName} !\n\n`;
    message += `Votre demande de réservation a été enregistrée :\n\n`;
    message += `📅 Date : ${dateFormatted}\n`;
    message += `🕐 Heure : ${time}\n`;
    message += `👥 Nombre de personnes : ${guests}\n`;
    message += `\n✉️ Vous recevrez un email de confirmation dans les 24 heures.\n\n`;
    message += `À bientôt chez So Salentino ! 🍕`;
    
    alert(message);
    
    // Optionnel : faire défiler vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Validation en temps réel pour le nombre de personnes
const guestsSelect = document.getElementById('guests');
guestsSelect.addEventListener('change', (e) => {
    if (e.target.value === '9+') {
        const confirmLarge = confirm(
            'Pour les groupes de plus de 8 personnes, nous vous recommandons de nous contacter directement au +33 1 23 45 67 89.\n\n' +
            'Souhaitez-vous tout de même soumettre le formulaire ?'
        );
        
        if (!confirmLarge) {
            e.target.value = '';
        }
    }
});

// Améliorer l'UX avec des suggestions de dates
dateInput.addEventListener('focus', () => {
    // Ajouter une info-bulle ou un message
    console.log('Calendrier ouvert');
});

// Désactiver les heures de déjeuner le dimanche (uniquement déjeuner le dimanche)
const timeSelect = document.getElementById('time');
dateInput.addEventListener('change', (e) => {
    const selectedDate = new Date(e.target.value);
    const dayOfWeek = selectedDate.getDay();
    
    // Si c'est dimanche (0), désactiver les options de dîner
    const dinnerOptions = timeSelect.querySelectorAll('optgroup[label="Dîner"] option');
    
    if (dayOfWeek === 0) { // Dimanche
        dinnerOptions.forEach(option => {
            option.disabled = true;
            option.textContent = option.textContent + ' (Fermé)';
        });
        
        // Afficher un message
        if (timeSelect.value && parseInt(timeSelect.value.split(':')[0]) >= 19) {
            alert('Attention : Le dimanche, nous ne servons que le déjeuner (12h - 15h).');
            timeSelect.value = '';
        }
    } else {
        dinnerOptions.forEach(option => {
            option.disabled = false;
            option.textContent = option.textContent.replace(' (Fermé)', '');
        });
    }
});

// Animation au scroll pour les info-blocks
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Appliquer l'animation aux blocs d'info
document.addEventListener('DOMContentLoaded', () => {
    const infoBlocks = document.querySelectorAll('.info-block, .reservation-form-wrapper');
    
    infoBlocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(20px)';
        block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(block);
    });
});
