function exploreNow() {
    window.location.href = "explore.html";
  }

// Optional: Search interaction
document.getElementById('searchInput').addEventListener('input', function () {
  const keyword = this.value.toLowerCase();
  console.log("Searching for:", keyword);
});
function handleSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();

  const pages = {
    "pop": "pop.html",
    "rap": "rap.html",
    "love": "love.html",
    "sad": "sad.html",
    "vibe": "vibe.html",
    "party": "party.html",
    "krsna": "krsna.html",
    "arijit": "arijit.html",
    "arijit singh": "arijit.html",
    "masoom": "masoom.html",
    "masoom sharma": "masoom.html",
    "eminem": "eminem.html"
  };

  // Check if the input matches any key in the object
  if (pages[input]) {
    window.location.href = pages[input];
  } else {
    alert("No results found for: " + input);
  }
}