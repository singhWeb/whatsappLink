function updateText() {
  var varCode = document.getElementById('varCode').value;
  var varNumber = document.getElementById('varNumber').value;
  var lnk = document.getElementById('lnk');
  lnk.href = "https://api.whatsapp.com/send/?phone=%2B" + varCode + varNumber + "&text&type=phone_number&app_absent=0";
  lnk.innerHTML = lnk.href;
}
