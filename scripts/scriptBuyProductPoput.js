function openPopup(title, price, imageSrc) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-price').textContent = price;
    document.getElementById('popup-image').src = imageSrc;
    document.getElementById('popup').style.display = 'block';
  }

function openTirantePopup() {
    document.getElementById('popup-title-tirante').innerText = 'TIRANTE';
    document.getElementById('popup-price-tirante').innerText = 'R$ 15,00';
    document.getElementById('popup-image-tirante').src = '../img/products/caneca/preto/tirante.jpg';
    document.getElementById('popup-tirante').style.display = 'block';
  }
  
function openCanecaPopup() {
    document.getElementById('popup-title-caneca').innerText = 'CANECA VERMELHA';
    document.getElementById('popup-price-caneca').innerText = 'R$ 35,00';
    document.getElementById('popup-image-caneca').src = '../img/products/caneca/vermelho/caneca-frente.jpg';
    document.getElementById('popup-caneca').style.display = 'block';
  }

function openKitPopup() {
    document.getElementById('popup-title-kit').innerText = 'KIT CANECA + TIRANTE';
    document.getElementById('popup-price-kit').innerText = 'R$ 45,00';
    document.getElementById('popup-image-kit').src = '../img/products/caneca/preto/completo.jpg';
    document.getElementById('popup-kit').style.display = 'block';
  }

function openSilverPopup() {
    document.getElementById('popup-title-silver').innerText = 'SILVER DOG';
    document.getElementById('popup-price-silver').innerText = 'EM BREVE';
    document.getElementById('popup-image-silver').src = '../img/products/prata/prata-frente.jpg';
    document.getElementById('popup-silver').style.display = 'block';
  }

function openRubyPopup() {
    document.getElementById('popup-title-ruby').innerText = 'RUBY DOG';
    document.getElementById('popup-price-ruby').innerText = 'EM BREVE';
    document.getElementById('popup-image-ruby').src = '../img/products/rubi/frente.jpg';
    document.getElementById('popup-ruby').style.display = 'block';
  }

function openForallPopup() {
    document.getElementById('popup-title-forall').innerText = 'FOR ALL THE DOGS';
    document.getElementById('popup-price-forall').innerText = 'EM BREVE';
    document.getElementById('popup-image-forall').src = '../img/products/Bege/frente.jpg';
    document.getElementById('popup-forall').style.display = 'block';
  }

  function openWinePopup() {
    document.getElementById('popup-title-wine').innerText = 'WINE CROPPED';
    document.getElementById('popup-price-wine').innerText = 'EM BREVE';
    document.getElementById('popup-image-wine').src = '../img/products/previas/cropped.jpg';
    document.getElementById('popup-wine').style.display = 'block';
  }
  
function openBlackPopup() {
    document.getElementById('popup-title-black').innerText = 'BLACK CROPPED';
    document.getElementById('popup-price-black').innerText = 'EM BREVE';
    document.getElementById('popup-image-black').src = '../img/products/previas/cropped.jpg';
    document.getElementById('popup-black').style.display = 'block';
  }
  
function openCamisetaPopup() {
    document.getElementById('popup-title-camiseta').innerText = 'CAMISETA TORCEDOR';
    document.getElementById('popup-price-camiseta').innerText = 'R$ 70,00 / 75,00';
    document.getElementById('popup-image-camiseta').src = '../img/products/previas/camiseta-torcedor.jpg';
    document.getElementById('popup-camiseta').style.display = 'block';
  }
  
function openSambaDollPopup() {
    document.getElementById('popup-title-samba').innerText = 'SAMBA DOLL';
    document.getElementById('popup-price-samba').innerText = 'EM BREVE';
    document.getElementById('popup-image-samba').src = '../img/products/previas/samba-doll.jpg';
    document.getElementById('popup-samba').style.display = 'block';
  }
  
function openSambaCancaoPopup() {
    document.getElementById('popup-title-samba-cancao').innerText = 'SAMBA CANÇÃO';
    document.getElementById('popup-price-samba-cancao').innerText = 'EM BREVE';
    document.getElementById('popup-image-samba-cancao').src = '../img/products/previas/samba-cancao.jpg';
    document.getElementById('popup-samba-cancao').style.display = 'block';
  }
  
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-tirante').style.display = 'none';
    document.getElementById('popup-caneca').style.display = 'none';
    document.getElementById('popup-kit').style.display = 'none';
    document.getElementById('popup-silver').style.display = 'none';
    document.getElementById('popup-ruby').style.display = 'none';
    document.getElementById('popup-forall').style.display = 'none';
    document.getElementById('popup-wine').style.display = 'none';
    document.getElementById('popup-black').style.display = 'none';
    document.getElementById('popup-camiseta').style.display = 'none';
    document.getElementById('popup-samba').style.display = 'none';
    document.getElementById('popup-samba-cancao').style.display = 'none';
  }