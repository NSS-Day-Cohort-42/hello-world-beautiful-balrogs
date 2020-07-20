const icelandHeadsOfState = [
  {
    name: "Guðni Th. Jóhannesson",
    image: "./images/iceland/icelandCurrentPresident.jpg",
    imageAlt: "Current president of iceland head shot",
    description: "Icelandic politician serving as the sixth and current president of Iceland. He took office in 2016 after winning a plurality of the vote in the 2016 election"
  },
  {
    name: "Katrín Jakobsdóttir",
    image: "./images/iceland/KatrinJakobsdottir.jpg",
    imageAlt: "Katrín Jakobsdóttir head shot",
    description: "Icelandic politician serving as the 28th and current Prime Minister of Iceland since 2017."
  }
]

export const useIcelandHeadsOfState = () => {
  return icelandHeadsOfState.slice()
}