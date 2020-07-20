const icelandCities = [
  {
    name: "Reykjavik",
    image: "./images/iceland/Reykjavik.jpg",
    imageAlt: "city view with snowcovered mountains in the background"
  },
  {
    name: "Húsavík",
    image: "./images/iceland/Husavik.jpg",
    imageAlt: "looking ashore from the ocean with ships and a little village in the foreground and a lush green mountain shrowded in cloud cover"
  },
  {
    name: "Siglufjörður",
    image: "./images/iceland/Siglufjorour.jpg",
    imageAlt: "looking down a small town street lined with blue and red buildings"
  },
  {
    name: "Vestmannaeyjar",
    image: "./images/iceland/Vestmannaeyjar.jpg",
    imageAlt: "arial view of a lush green island with ships docked"
  }
]

export const useIcelandCities = () => {
  return icelandCities.slice()
}