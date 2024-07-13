import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({});

  // useEffect does not allow passing asynchronous directly so we first crete a normal fn and then in that fn we create async fn
  useEffect(() => {
    async function getInitialQutes() {
      const response = await fetch(RANDOM_QUOTE_URL); // fetch api and store it in variable
      const jsonResponse = await response.json(); // Parse the response body as JSON
      const randomQuote = jsonResponse.quote;
      console.log(randomQuote);
      setQuote(randomQuote);
    }
    getInitialQutes();
  }, []);

  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL); // fetch api and store it in variable
    const jsonResponse = await response.json(); // Parse the response body as JSON
    const randomQuote = jsonResponse.quote;
    console.log(randomQuote);
    setQuote(randomQuote);
  }

  return (
    <div>
      <button onClick={fetchQuote}>Get Quote Using Handler</button>
      <h2>
        {quote.text} - {quote.author}
      </h2>
    </div>
  );
}
