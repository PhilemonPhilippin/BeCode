let waypointOne = new Waypoint({
  element: document.getElementById("section-1"),
  handler: function (direction) {
    if (direction == "up") alert("I told you !");
  },
  offset: "-200%",
});

let waypointTwo = new Waypoint({
  element: document.getElementById("section-2"),
  handler: function (direction) {
    if (direction == "down") alert("Are you sure ? Things are wild down there");
  },
  offset: "100%",
});
