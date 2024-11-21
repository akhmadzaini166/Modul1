const albums = [
    {
      title: "Nature Album",
      description: "A collection of beautiful nature photos.",
      photos: [
        "images/IMG (1).jpg",
        "images/IMG (5).jpg",
        "images/IMG (15).jpg"
      ]
    },
    {
      title: "Travel Album",
      description: "Photos from my travels around the world.",
      photos: [
        "images/IMG (16).jpg",
        "images/IMG (17).jpg",
        "images/IMG (18).jpg"
      ]
    },
    {
        title: "Travel Album",
        description: "Photos from my travels around the world.",
        photos: [
          "images/IMG (19).jpg",
          "images/IMG (20).jpg",
          "images/IMG (21).jpg"
        ]  
    },
    {
        title: "Travel Album",
        description: "Photos from my travels around the world.",
        photos: [
          "images/IMG (31).jpg",
          "images/IMG (23).jpg",
          "images/IMG (24).jpg"
        ]
    }
  ];
  
  let currentImageIndex = 0;
let currentAlbumIndex = 0;

function openLightbox(albumIndex) {
  currentAlbumIndex = albumIndex;
  currentImageIndex = 0;  // Reset to the first image of the selected album

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  lightbox.style.display = "flex";
  lightboxImage.src = albums[albumIndex].photos[currentImageIndex];
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

function nextImage() {
  const lightboxImage = document.getElementById("lightbox-image");
  currentImageIndex = (currentImageIndex + 1) % albums[currentAlbumIndex].photos.length;
  lightboxImage.src = albums[currentAlbumIndex].photos[currentImageIndex];
}

function previousImage() {
  const lightboxImage = document.getElementById("lightbox-image");
  currentImageIndex = (currentImageIndex - 1 + albums[currentAlbumIndex].photos.length) % albums[currentAlbumIndex].photos.length;
  lightboxImage.src = albums[currentAlbumIndex].photos[currentImageIndex];
}