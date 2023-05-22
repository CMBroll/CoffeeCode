const inputs = document.querySelectorAll('.formItem input');
inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.length > 0) {
        input.classList.add('hasValue');
      } else {
        input.classList.remove('hasValue');
      }
    });
}); 