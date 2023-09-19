var searchInputEl = $('#search-value')
var searchBtnEl = $('#search-btn');
var mediaQuery;

function submitSearch(event) {
    event.preventDefault();
    mediaQuery = searchInputEl.val().trim();
    location.replace("search-results.html");
    getStreamInfo(mediaQuery);
}
function getStreamInfo(mediaQuery){
    
    console.log(mediaQuery)
};


searchBtnEl.on('click', submitSearch);
$('#back-btn').on('click', function(){
    location.replace("index.html");

})