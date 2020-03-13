// LICENSE : MIT
"use strict";

export const nodeTypes = {
    "document": "Document",
    "paragraph": "Paragraph",
    "block_quote": "BlockQuote",
    "list_item": "ListItem",
    "bullet_list": "List",
    "title": "Header",
    "literal_block": "CodeBlock",
    "comment": "Comment",
    "reference": "Link",
    "meta": "Html",
    "text": "Str",
    "emphasis": "Emphasis",
    "strong": "Strong",
    "image": "Image",
    "inline": "Code"
};

export const reSTAttributeToType = {
    "tagname": "type",
    "rawsource": "raw",
    "text": "value"
};
