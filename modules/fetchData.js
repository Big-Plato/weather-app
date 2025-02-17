export async function fetchData (location) {

    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TSAMXVSZW5U74VLCWBLLXWCNQ`);
            console.log(response.json());

    }
    catch (err) {
        console.error(err);
    }
    
}

