const symbolSearch = document.getElementById("search-bar").value;
const apiKey = "&apikey=UABDDO1ICUMBFPZ2";
const BASE_URL = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + symbolSearch + apiKey;

const API = { get };

function get(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.bestMatches && data.bestMatches.length > 0) {
                return formatData(data);
            } else {
                throw new Error('No matching symbols found');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error, e.g., display error message to the user
        });
}

// Call the API using the BASE_URL
API.get(BASE_URL);

const jsonData = `{
  "bestMatches": [
      {
          "1. symbol": "EBIT-U.TRT",
          "2. name": "Bitcoin ETF",
          "3. type": "ETF",
          "4. region": "Toronto",
          "5. marketOpen": "09:30",
          "6. marketClose": "16:00",
          "7. timezone": "UTC-05",
          "8. currency": "CAD",
          "9. matchScore": "0.7778"
      },
      // other objects omitted for brevity
  ]
}`;

// Parse the JSON data
const parsedData = JSON.parse(jsonData);

// Accessing the bestMatches array
const bestMatches = parsedData.bestMatches;

// Loop through each item in the bestMatches array
bestMatches.forEach(match => {
  // Accessing properties of each match
  const symbol = match["1. symbol"];
  const name = match["2. name"];
  const type = match["3. type"];
  const region = match["4. region"];
  const marketOpen = match["5. marketOpen"];
  const marketClose = match["6. marketClose"];
  const timezone = match["7. timezone"];
  const currency = match["8. currency"];
  const matchScore = match["9. matchScore"];
  
  // Do whatever you need to do with the data, such as logging it
  console.log(`Symbol: ${symbol}, Name: ${name}, Type: ${type}, Region: ${region}, Market Open: ${marketOpen}, Market Close: ${marketClose}, Timezone: ${timezone}, Currency: ${currency}, Match Score: ${matchScore}`);
});