let resuts = document.querySelector('.resuts')
let button = document.querySelector('button')
let input = document.querySelector('input')

button.addEventListener("click", function (event) {
    event.preventDefault();

    let search = input.value;

    fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let filteredData = data.filter(function (prod) {
                return prod.name.toLowerCase().includes(search.toLowerCase());
            });

            resuts.innerHTML = "";

            for (let prod of filteredData) {
                let name = prod.name;
                let img = prod.pic;
                let price = prod.price;
    
                let box = document.createElement('div');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let imgEl = document.createElement('img');
    
                imgEl.src = img;
                h2.textContent = name;
                p.textContent = price;
    
                box.appendChild(imgEl)
                box.appendChild(h2)
                box.appendChild(p)
                
                

                resuts.appendChild(box)
            }
        })

})

fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        for (let prod of data) {
            let name = prod.name;
            let img = prod.pic;
            let price = prod.price;

            let box = document.createElement('div');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let imgEl = document.createElement('img');

            imgEl.src = img;
            h2.textContent = name;
            p.textContent = `${price}$`;

            box.appendChild(imgEl)
            box.appendChild(h2)
            box.appendChild(p)

            resuts.appendChild(box)
        }
    })