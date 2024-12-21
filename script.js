const apiLoads = async(searchText = 'phone')=>{

    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await response.json();
    const phoneData = data.data;
    displayData(phoneData);

    console.log(data.data)
}


const displayData = (phoneData)=>{
    console.log(phoneData)
    const cardContainer = document.getElementById("card-container");
    cardContainer.textContent = '';

    phoneData.forEach(phone => {

        console.log(phone)

        const div = document.createElement('div')
        div.classList = `col-lg-3 mb-3`
        div.innerHTML = `
            <div class="card px-4 pt-4 pb-2" >
                <img src="${phone.image}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <p class="card-text">${phone.phone_name}</p>
                    <a href="${phone.slug}" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `

        cardContainer.appendChild(div);
    });

}

// get Search Text

const getSearchText = ()=>{
    const searchfield = document.querySelector('#search-field');
    console.log(searchfield.value);
    const searchTextValue = searchfield.value;
    apiLoads(searchTextValue);
}




apiLoads()