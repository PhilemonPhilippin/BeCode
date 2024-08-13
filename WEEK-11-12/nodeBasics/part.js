const disneyMovies = [
  "Le livre de la jungle",
  "Le roi lion",
  "La petite sirène",
  "Tarzan",
];

// exports.returnDisneyMovies = () => disneyMovies;

const pi = Math.PI;

module.exports = class Circle {
  constructor(r) {
    this.area = pi * r ** 2;
    this.perimeter = 2 * pi * r;
  }

  returnDisneyMovies() {
    return disneyMovies;
  }
};
