import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming"); // term to search
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]); // results from search request
  // console.log(results);

  //* Runs every time term changes
  // term change every time user types
  useEffect(() => {
    // we queue up a change to debouncedTerm
    // every time we run this useEffect
    const timerId = setTimeout(() => {
      setDebouncedTerm(term); // this change will trigger the other useEffect 
    }, 1000);

    return () => {
      clearTimeout(timerId);
    }
  }, [term]);

  //* Makes the request with the debounced term
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      //* set data to state
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  //* ===== Fetch data | First Approach
  // useEffect(() => {
  //   // first param is a function
  //   const search = async () => {
  //     const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
  //       params: {
  //         action: "query",
  //         list: "search",
  //         origin: "*",
  //         format: "json",
  //         srsearch: debouncedTerm,
  //       },
  //     });
  //     //* set data to state
  //     setResults(data.query.search);
  //   };

  //   //* ===== Initial Search
  //   if (term && !results.length) {
  //     search();
  //   } else {
  //     //* ===== Timeout
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 500);

  //     //* ==== CleanUp Function
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, [term, results.length]);




  //* ========= Create List of data
  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
