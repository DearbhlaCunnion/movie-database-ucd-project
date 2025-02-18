document.addEventListener('DOMContentLoaded', function () {
  const searchBtn = document.getElementById('searchBtn');
  const searchQueryInput = document.getElementById('searchQuery');

  if (searchBtn && searchQueryInput) {
    searchBtn.addEventListener('click', function () {
      const query = searchQueryInput.value.trim();
      if (query) {
        window.location.href = `/movie-database-ucd-project/results?query=${encodeURIComponent(query)}`;
      } else {
        alert('Please enter a search query.');
      }
    });
  }
});