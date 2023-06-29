const img = [
  "url('https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg')",
  "url('https://i.pinimg.com/originals/df/17/7d/df177da18a4b9936da4767e240e3b34b.jpg')",
  "url('https://i.pinimg.com/originals/0e/6c/ce/0e6cce5efd588685f61a7561c881ff3d.jpg')",
  "url('https://i.pinimg.com/originals/39/60/78/396078652ee90370db06582a1ef01bd8.jpg')",
  "url('https://images.hdqwalls.com/download/big-planet-space-art-4k-cm-1920x1080.jpg')",
];

function randombg() {
  const selected = Math.floor(Math.random() * img.length);
  document.body.style.backgroundImage = img[selected];
}
