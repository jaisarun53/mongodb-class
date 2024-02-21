Use("imdb");
// skip=(page-1)*limit
let page = 1;
const limit = 10;
let skip = (page - 1) * limit;
let searchText = "G";
let sortOrder = "asc";

de.movies.aggregate([
  {
    $match: {},
  },
]);
