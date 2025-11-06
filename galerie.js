// JavaScript pour la galerie grid avec défilement infini

document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');
    const originalContent = galleryGrid.innerHTML;
    
    // Dupliquer le contenu pour l'effet infini
    galleryGrid.innerHTML += originalContent;
    
    // Initialiser le lightbox
    initLightbox();
});

// Lightbox
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentImageIndex = 0;
    const images = [];
    
    // Construire le tableau d'images (sans doublons)
    const uniqueImages = new Set();
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const src = img.src;
        if (!uniqueImages.has(src)) {
            uniqueImages.add(src);
            images.push({
                src: src,
                alt: img.alt
            });
        }
    });

    // Ouvrir le lightbox au clic sur une image
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            currentImageIndex = images.findIndex(img => img.src === imgSrc);
            openLightbox();
        });
    });

    // Fonction pour ouvrir le lightbox
    function openLightbox() {
        lightbox.style.display = 'block';
        updateLightboxImage();
        document.body.style.overflow = 'hidden';
    }

    // Fonction pour fermer le lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Fonction pour mettre à jour l'image du lightbox
    function updateLightboxImage() {
        const currentImage = images[currentImageIndex];
        lightboxImg.src = currentImage.src;
        lightboxCaption.textContent = currentImage.alt;
    }

    // Navigation précédent
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    // Navigation suivant
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }

    // Event listeners
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);

    // Fermer en cliquant en dehors de l'image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navigation au clavier
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
}
