const icelandLandmarks = [
  {
    name: "The Blue Lagoon",
    image: "./images/iceland/theBlueLagoon.jpg",
    imageAlt: "Hotsprings with stairs to enter and people talking",
    description: "The geothermal spa is a great way relax and pamper yourself after a trip outdoors, exploring Iceland’s many incredible natural phenomena. Be sure to book ahead of time - this attraction gets very crowded."
  },
  {
    name: "Dettifoss Waterfall",
    image: "./images/iceland/dettifossWaterfall.jpg",
    imageAlt: "Huge Waterfall with a few people looking from the foreground",
    description: "Enormous Dettifoss Waterfall is the largest in Iceland, and reputed to be one of the most beautiful waterfalls in the world. It plummets 330 ft. There are a few hiking trails you can use to take in the massive and thundering falls."
  },
  {
    name: "Northern Lights",
    image: "./images/iceland/northernLights.jpg",
    imageAlt: "view of the sky with swirls of green",
    description: "Also called Aurora Borealis, the lights resemble green clouds in the sky to the naked eye, and can really come to life through the camera."
  },
  {
    name: "Vik Black Sand beaches",
    image: "./images/iceland/VikBlackSandBeach.jpg",
    imageAlt: "Beach with black sand and lush green cliffs in the background",
    description: "The black sand beaches of Vik are a very popular attraction on the shores of Reynisfjara at the southern tip of Iceland. People have been known to get injured by the especially strong waves and currents of these ocean waters, so be extremely cautious as you marvel at the alluring black sands and stunning views!"
  }
]

export const useIcelandLandmarks = () => {
  return icelandLandmarks.slice()
}