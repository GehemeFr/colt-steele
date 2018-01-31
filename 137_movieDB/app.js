var movies = [
  {
    name: "Les bronzés",
    rating: 5,
    hasWatched: true
  },
  {
    name: "La blague atomique",
    rating: 2,
    hasWatched: false
  },
  {
    name: "Au bon dieu",
    rating: 4.5,
    hasWatched: true
  },
]

movies.forEach(function(movie){
  var result = "You have ";
  if (movie.hasWatched === true) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.name + "\" - ";
  result += movie.rating + " stars.";
  console.log(result);
})
