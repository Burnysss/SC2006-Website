



    // Array to store data associated with each symbol
    let symbolData = [];
    function getAlphaVantagedata() {
        const apiKey = "UABDDO1ICUMBFPZ2";
        const symbol = document.getElementById('searchtext2').value;
        const url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + symbol + '&apikey=' + apiKey;
        requestFile(url, apiKey, symbol);
    }

    function requestFile(url, apiKey, symbol) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onerror = function(xhr) { console.log('error:', xhr); };
        xhr.onload = function() {
            const response = xhr.responseText;
            divContents.innerText = response;
            const json = JSON.parse(response);
            const bestMatches = json["bestMatches"];
            bestMatches.forEach(match => {
                const symbol = match["1. symbol"];
                const name = match["2. name"];
                const sType = match["3. type"];  
                const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&apikey=' + apiKey;
                makeApiRequest(apiUrl, symbol, name,sType); // Pass symbol and name to makeApiRequest
            });
        };
        xhr.send(null);
    }

    function makeApiRequest(apiUrl, symbol, name,sType) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl, true);
        xhr.onerror = function(xhr) { console.log('error:', xhr); };
        xhr.onload = function() {
            const response = xhr.responseText;
            console.log(response);
            const json = JSON.parse(response);
            const timeSeries = json["Time Series (Daily)"];
            const firstTimestamp = Object.keys(timeSeries)[0];
            const timestampData = timeSeries[firstTimestamp];
            // Generate unique identifier using symbol and name
            const identifier = symbol + "-" + name;

            // Check if symbol data already exists in symbolData array
            let symbolFound = false;
            symbolData.forEach(dataObj => {
                if (dataObj.identifier === identifier) { // Check against identifier
                    dataObj.data.push(timestampData["1. open"]);
                    symbolFound = true;
                }
            });

            // If symbol data doesn't exist, create a new entry
            if (!symbolFound) {
                symbolData.push({ identifier: identifier, symbol: symbol, name: name,type: sType, data: timestampData["1. open"]  }); // Store identifier, symbol, and name
            }

            updateUI(symbolData);
        };
        xhr.send(null);
    }

    function updateUI(data) {
        const divContents = document.getElementById('divContents');
        divContents.innerHTML = '';
        // Display data for each symbol
        data.forEach((dataObj, index) => {
            const symbol = dataObj.symbol;
            const type = dataObj.type;
    
            divContents.innerHTML += `
                <div class="filterDiv ${type} col-md-3 " id="itemlist">
                    <div class="center itemimgpad">
                        <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <h3 id="stockname">${symbol}</h3>
                            <h3 id="stocktype">$:${dataObj.data}</h3>
                        </div>
                        <div class="col-md-4" >
                        </div>
                        <div class="col-md-4 center" >
                            <button style="font-size:24px" class="hearts" id="index-${index}" onclick="showNotification(event)"><i class="fa fa-heart"></i></button>
                        </div>
                    </div>
                    <a id="index-${index}" href="#" onclick="showMoreinfo(event)">View Details</a>


                </div>
                `;
        });
    }
    function showMoreinfo(event) {
        const clickedId = event.target.id;
        if (clickedId) {
            const index = clickedId.split("-")[1]; // Extract index from id
            const selectedItem = symbolData[index];
            const addinfo = document.getElementById('addinfo');
            // Set the inner HTML of the addinfo paragraph tag with the desired information
            addinfo.innerHTML = `Symbol: ${selectedItem.symbol}, Type: ${selectedItem.type}, Data: ${selectedItem.data}`;
            // Show the moreinfo div
            document.getElementById('moreinfo').style.display = 'block';
        }
    }
    function hideMoreinfo() {
        var popup = document.getElementById("moreinfo");
        popup.style.display = "none";
    }

