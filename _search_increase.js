// 검색창 클릭 시 검색창 늘어남
function expandSearchBox() {
    const searchBox = document.querySelector('.search_box');
    searchBox.classList.add('expand');

    document.addEventListener('click', function(event) {
      if (!searchBox.contains(event.target)) {
        searchBox.classList.remove('expand');
      }
    });
}