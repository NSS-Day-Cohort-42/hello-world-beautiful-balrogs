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
    imageAlt: "",
    description: ""
  },
  {
    name: "",
    image: "",
    imageAlt: "",
    description: ""
  },
  {
    name: "",
    image: "",
    imageAlt: "",
    description: ""
  }
]

export const useIcelandLandmarks = () => {
  return icelandLandmarks.slice()
}