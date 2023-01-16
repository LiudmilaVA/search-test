import React from "react";
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import MyHightlighter from "../my-hightlighter/My-hightlighter.jsx";

const Table = ({data, handleHightlight, highlight, query}) => {
    return(
        <>
        <div className="search-message">Top {data.length} wiki search results for "{query}"</div>
        <table className="result">
            <thead>
                <tr className="result-row">
                    <th className="result-title">Title</th>
                    <th className="result-title">Content</th>
                </tr>
            </thead>
            <tbody>    
                {data.map((item) => (
                    <tr className="result-row" key={item.pageid}>
                            <td className="result-data">
                                {handleHightlight ? 
                                <MyHightlighter 
                                highlight={highlight} 
                                content={item.title} />
                              : item.title}</td>
                        <td className="result-data">{handleHightlight ? 
                                <MyHightlighter
                                highlight={highlight} 
                                content={item.snippet}
                                />
                              : parse(item.snippet)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

Table.propTypes = {
    data: PropTypes.array,
    handleHightlight: PropTypes.bool,
    highlight: PropTypes.string,
    query: PropTypes.string,
};

export default Table;