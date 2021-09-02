const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
    data.docs.forEach(elem => {
        console.log('forEach', elem);
        const div = document.createElement('div')
        div.classList.add('col-md-3')
        div.innerHTML = `<div class=rounded overflow-hidden border p-2>
            <img class="w-100"src="https://cover.openlibrary.rog/b/id/${data.docs.cover_i}-m.jpg" alt="">
            </div>
            <div class"py-2 d-flex justify-content-between aling-items-center d-md-block text-md-center">
            <h1>${data.docs.title}</h1>
            <button class="btn btn-info>Details</button>
            </div>`;
        bookcontainer.appendChild(div);


    })

}

