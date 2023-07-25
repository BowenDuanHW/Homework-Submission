window.addEventListener('DOMContentLoaded', (event) => {
    // Fetch the list of cat breeds
    axios.get('https://api.thecatapi.com/v1/breeds')
        .then(response => {
            let breeds = response.data;
            let datalist = document.getElementById('breeds');
            // Populate the datalist with options
            breeds.forEach(breed => {
                let option = document.createElement('option');
                option.value = breed.id;
                option.text = breed.name;
                datalist.appendChild(option);
            });
        });
});

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    // Get the selected breed
    let breed = document.querySelector('input').value;
    // Fetch images of the selected breed
    axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=10`)
        .then(response => {
            let images = response.data;
            let imagesDiv = document.getElementById('images');
            imagesDiv.innerHTML = '';
            // Display the images
            images.forEach(image => {
                let img = document.createElement('img');
                img.src = image.url;
                img.width = 200;
                imagesDiv.appendChild(img);
            });
        });
});
