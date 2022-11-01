import * as React from 'react';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Bold = ({ children }) => <strong>{children}</strong>;

const Text = ({ children }) => <p>{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};

const RichTextRenderer = ({richText}) => {
    return (
        <>
        {documentToReactComponents(richText, options)}
        </>
    )
}

export default RichTextRenderer;