// Điền đường dẫn ảnh vào các dấu ngoặc kép bên dưới, theo thứ tự xuất hiện trên thiệp.
const photoUrls = [
  "", // Ảnh lớn ở đầu trang
  "", // Kỷ niệm 01
  "", // Kỷ niệm 02
  ""  // Kỷ niệm 03
];

document.querySelectorAll('[data-photo]').forEach((frame) => {
  const url = photoUrls[Number(frame.dataset.photo)];
  if (!url) return;
  const image = document.createElement('img');
  image.alt = 'Ảnh kỷ niệm của chúng mình';
  image.addEventListener('load', () => {
    frame.replaceChildren(image);
    frame.classList.add('has-image');
  });
  image.src = url;
});
