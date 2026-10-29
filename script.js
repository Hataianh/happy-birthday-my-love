// Điền đường dẫn ảnh vào các dấu ngoặc kép bên dưới, theo thứ tự xuất hiện trên thiệp.
const photoUrls = [
  "https://www.dropbox.com/scl/fi/yr0sw810xe89eyp8w29bg/1793259147556_2272107706395109432_4751996825859230786_8ecd62df944751591c69cfb8b8fd16be.jpg?rlkey=tyyh5jtgjit6rkgsw7eg7gkmn&raw=1", // Ảnh lớn ở đầu trang
  "https://www.dropbox.com/scl/fi/fatn54z8dxsaetzqyj5f3/1793259147569_2272107706395109432_4751996825859230786_6b8ba0a153c058a3450322d1a3e59ede.jpg?rlkey=h1tak36r79kb2metien90uu8y&raw=1", // Kỷ niệm 01
  "https://www.dropbox.com/scl/fi/6j09rghz2uoszuxogwq8w/1793259147620_2272107706395109432_4751996825859230786_8745d12160aab132e2306711419da29a.jpg?rlkey=kd7jytzf93d09z7r6qmpfzk05&raw=1", // Kỷ niệm 02
  "https://www.dropbox.com/scl/fi/dccm2qpv5r4yk7qiytok2/1793259147501_2272107706395109432_4751996825859230786_6c203c74c2dad6cf674d73e51e3c9703.jpg?rlkey=qxfqni1xhg30fyssbexxp26mw&raw=1"  // Kỷ niệm 03
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
