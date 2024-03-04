document.addEventListener('DOMContentLoaded', function () {
  const inputText = document.getElementById('input-texto');
  const encodeBtn = document.getElementById('btn-cripto');
  const decodeBtn = document.getElementById('btn-descripto');
  const outputText = document.getElementById('msg');

  encodeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const text = inputText.value.toLowerCase();
    if (validateInput(text)) {
      outputText.value = encode(text);
    } else {
      showError('Digite apenas letras minúsculas e sem acento.');
    }
  });

  decodeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const text = inputText.value.toLowerCase();
    outputText.value = decode(text);
  });

  document.getElementById('btn-copy').addEventListener('click', function (e) {
    e.preventDefault();
    if (outputText.value) {
      navigator.clipboard.writeText(outputText.value);
      clearTextareas();
    } else {
      showError('Nada para copiar.');
    }
  });

  function encode(text) {
    // Mapeie cada caractere para sua codificação correspondente
    const encodedText = text
      .split('')
      .map(char => {
        switch (char) {
          case 'a':
            return 'ai';
          case 'e':
            return 'enter';
          case 'i':
            return 'imes';
          case 'o':
            return 'ober';
          case 'u':
            return 'ufat';
          default:
            return char;
        }
      })
      .join('');

    return encodedText;
  }

  function decode(text) {
    // Substitua cada sequência de codificação pela letra correspondente
    const decodedText = text
      .replace(/ai/g, 'a')
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');

    return decodedText;
  }

  function validateInput(text) {
    // Verifique se o texto contém apenas letras minúsculas e sem acento
    return /^[a-z]+$/.test(text);
  }

  function showError(message) {
    alert(message);
  }

  function clearTextareas() {
    inputText.value = '';
    outputText.value = '';
    inputText.focus();
  }
});
