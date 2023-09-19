var searchInputEl = $('#search-value').val();
var searchBtnEl = $('#search-btn');

function submitSearch(event) {
    event.preventDefault();

    location.replace();
    console.log('redirect works')
}

searchBtnEl.on('click', submitSearch);