function decodeText() {
  var inputText = document.getElementById('inputText').value;
  var decodedText = inputText.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
  document.getElementById('decodedText').innerText = decodedText;
}

function encodeText() {
  var inputText = document.getElementById('inputText').value;
  var encodedText = inputText.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
  document.getElementById('decodedText').innerText = encodedText;
}
