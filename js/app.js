const ETHPrice = 3130 * 3;
const BNBPrice = 430 * 3;
const BTCPrice = 44100 * 3;

const ETHWallet = '123231234124124124123213123213123123121';
const BNBWallet = '223231234124124124123213123213123123121';
const BTCWallet = '323231234124124124123213123213123123121';

const currentSelectText = document.getElementById("current-select");
const currentSelectIcon = document.querySelector("#current-select-icon img");
const seletResultWrap = document.querySelector('.select-result-wrap');
const selectItemWrap = document.querySelector('.select-item-wrap');
const selectArrow = document.querySelector('.select-arrow');
const selectItems = document.querySelectorAll('.select-item');
const attributeSelectValue = document.querySelectorAll('.select-text');
let inputCurrentValue = document.getElementById('current-number');
var chooseAttributeSelect = currentSelectText.getAttribute('data-valuta');
var inputAdidasValue = document.getElementById('adidas-value');
var valueAdidas;
const priceOfOne = document.querySelectorAll('.price-of-one');
var inputWallet = document.getElementById('wallet');

seletResultWrap.addEventListener('click', () => {
  selectItemWrap.classList.toggle('active');
  selectArrow.classList.toggle('active');
});

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener('click', () => {
    var chooseAttributeSelectValue = selectItems[i].children[0].getAttribute('data-valuta');
    var chooseSelectText = selectItems[i].children[0].innerHTML;
    var chooseSelectIcon = selectItems[i].children[1].children[0].getAttribute('src');
    currentSelectText.innerHTML = chooseSelectText;
    currentSelectIcon.src = chooseSelectIcon;
    selectItems.forEach((el) => {
      if (el.classList.contains('remove')) {
        el.classList.remove('remove');
      }
    });
    priceOfOne.forEach((el) => {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });
    currentSelectText.setAttribute("data-valuta", chooseAttributeSelectValue);
    chooseAttributeSelect = chooseAttributeSelectValue;
    if (chooseAttributeSelect === 'BNB') {
      inputWallet.value = BNBWallet;
      valueAdidas = Number(inputCurrentValue.value) * BNBPrice;
      inputAdidasValue.value = valueAdidas;
      for (let i = 0; i < priceOfOne.length; i++) {
        var showPriceOfOne = priceOfOne[i].getAttribute('data-price-one');
        if (showPriceOfOne === 'BNB') {
          priceOfOne[i].classList.add('active');
        }
      }
    } else if (chooseAttributeSelect === 'BTC') {
      inputWallet.value = BTCWallet;
      valueAdidas = Number(inputCurrentValue.value) * BTCPrice;
      inputAdidasValue.value = valueAdidas;
      for (let i = 0; i < priceOfOne.length; i++) {
        var showPriceOfOne = priceOfOne[i].getAttribute('data-price-one');
        if (showPriceOfOne === 'BTC') {
          priceOfOne[i].classList.add('active');
        }
      }
    } else if (chooseAttributeSelect === 'ETH') {
      inputWallet.value = ETHWallet;
      valueAdidas = Number(inputCurrentValue.value) * ETHPrice;
      inputAdidasValue.value = valueAdidas;
      for (let i = 0; i < priceOfOne.length; i++) {
        var showPriceOfOne = priceOfOne[i].getAttribute('data-price-one');
        if (showPriceOfOne === 'ETH') {
          priceOfOne[i].classList.add('active');
        }
      }
    }
    selectItemWrap.classList.remove('active');
    selectArrow.classList.remove('active');
    selectItems[i].classList.add('remove');
  })
}

inputCurrentValue.addEventListener('input', () => {
  if (chooseAttributeSelect === 'BNB') {
    inputWallet.value = BNBWallet;
    valueAdidas = Number(inputCurrentValue.value) * BNBPrice;
    inputAdidasValue.value = valueAdidas;
  } else if (chooseAttributeSelect === 'BTC') {
    inputWallet.value = BTCWallet;
    valueAdidas = Number(inputCurrentValue.value) * BTCPrice;
    inputAdidasValue.value = valueAdidas;
  } else if (chooseAttributeSelect === 'ETH') {
    inputWallet.value = ETHWallet;
    valueAdidas = Number(inputCurrentValue.value) * ETHPrice;
    inputAdidasValue.value = valueAdidas;
  }
});

function copyToClipboard(text) {
  const sampleTextarea = document.createElement("textarea");
  document.body.appendChild(sampleTextarea);
  sampleTextarea.value = text;
  sampleTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(sampleTextarea);
}

function copyValue(e) {
  e.preventDefault();
  const copyText = document.getElementById("wallet");
  copyToClipboard(copyText.value);
  const done = document.querySelector('.wallet__copy');
  done.classList.add('active');
}
