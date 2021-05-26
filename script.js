//to set up the quote array for the json object
let apiQuotes = [];

//to get quotes from API 
//async makes a function return a promise
//promise contains a response object
async function getQuotes() {

    const apiUrl = 'https://type.fit/api/quotes';

    try {
        //await makes a function wait for a response
        const response = await fetch(apiUrl);
        //to populate the empty array with the json object
        apiQuotes = await response.json();
        //to get one specific quote, not all of them, we use an index number
        console.log(apiQuotes[13]);
    } catch (error) {
        //this is where we can handle the error
    }
}

//on load
getQuotes();