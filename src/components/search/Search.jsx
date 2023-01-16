import React, {useEffect, useState} from 'react';
import Table from '../table/Table';
import Button from '../button/Button';
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [queryHighlight, setQueryHightlight] = useState("");
  const [isHighlighted, setIsHighlighted] = useState(false);

  let dataLimit = 12;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&&origin=*&format=json&srlimit=${dataLimit}&srsearch=${query}`);
      setData(res.data.query.search);
    };    

    if (query.length >= 1) fetchData();
  }, [query]);

  return (
    <section className="search">
      <div className="container">
        <div className="search--wrap">
          <div className="search-field">
            <input 
            type="search" 
            placeholder="Search..." 
            name="searchField"
            className="field" 
            onFocus={() => setIsHighlighted(false)}
            onChange={(e) => setQuery(e.target.value)} 
            />
          </div>

          <div className="hightlighter">
            <div className="hightlighter-holder">
                <input 
                    type="text" 
                    placeholder="Highlight text" 
                    className="field"
                    name="highlightText"
                    onFocus={(e) => setQueryHightlight(query)} 
                    onChange={(e) => setQueryHightlight(e.target.value)}
                    value={queryHighlight}
                />
                {<Button 
                    classes="hightlighter-btn btn-main"
                    btnHandler={() => setIsHighlighted(true)}
                    btnName="Highlight all"
                />}
            </div>
          </div>
        </div>

        
        <div className="search-result">
        {(!query.length) && 
          <div className="search-message">Start your searching</div>
        }
        {(!!query.length && !data.length) && 
          <div className="search-message">No results</div>
        }
        {(!!query.length && !!data.length) &&
          <Table 
            data={data} 
            handleHightlight={isHighlighted} 
            highlight={queryHighlight} 
            query={query}
          />  
        }
        </div>
      </div>
    </section>
  );
}

export default Search;
