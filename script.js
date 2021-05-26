//to get the elements we are working with
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

//to set up the quote array for the json object
let apiQuotes = [];

//function to show new quote
function newQuote() {

    //to return a random quote index
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //to check if it works
    console.log(quote);
}

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
        newQuote();
    } catch (error) {
        //this is where we can handle the error
    }
}

//on load
getQuotes();