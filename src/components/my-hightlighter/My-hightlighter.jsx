import React from "react";
import PropTypes from 'prop-types';
import Highlighter from "react-highlight-words";
import { stripHtml } from "string-strip-html";

const MyHightlighter = ({highlight, content}) => {
    return(
        <Highlighter
            highlightClassName="search-highlighter"
            searchWords={[highlight]}
            highlightTag={'span'}
            autoEscape={true}
            textToHighlight={stripHtml(content).result}
          /> 
    )
}

MyHightlighter.propTypes = {
    highlight: PropTypes.string,
    content: PropTypes.string,
};

export default MyHightlighter;