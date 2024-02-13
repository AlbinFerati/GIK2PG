document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var formData = new FormData(this);

  fetch('/submit', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      console.error('There was a problem with your fetch operation:', error);
    });
});
