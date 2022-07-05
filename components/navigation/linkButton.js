import { React } from 'react';

export default function LinkButton(props) {
    const { text } = props;
    return (
        <a href={`/${text.toLowerCase()}`}>{text}</a>
    )
}