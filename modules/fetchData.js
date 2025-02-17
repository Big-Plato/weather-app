export async function fetchData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TSAMXVSZW5U74VLCWBLLXWCNQ&unitGroup=metric&iconSet=icons2`
    );
    return response.json();
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.log(`${err.name}: ${err.message}`);
    } else {
      throw err;
    }
  }
}
