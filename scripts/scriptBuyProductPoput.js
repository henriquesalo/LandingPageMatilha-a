function openPopup(title, price, imageSrc) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-price').textContent = price;
    document.getElementById('popup-image').src = imageSrc;
    document.getElementById('popup').style.display = 'block';
  }

function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }