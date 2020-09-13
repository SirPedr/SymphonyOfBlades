enum AvailableTexts {
  INTRODUCTION = "INTRODUCTION",
}
const DisplayTexts: { [index in AvailableTexts]: string | Array<string> } = {
  INTRODUCTION: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis volutpat sem. Pellentesque a gravida turpis. Mauris ullamcorper, ligula sed vestibulum tristique, massa quam blandit orci, sed pulvinar urna libero eu sem.",
    "Nam tempus ex feugiat ultrices finibus. Pellentesque non sem egestas, pretium dui vel, facilisis nisi.",
  ],
};

export default DisplayTexts;
