import { React } from 'react';

export default function LinkButton(props) {
    const { text, className } = props;
    return (
        <a className={`link__button ${className}`} href={`/${text.toLowerCase()}`}>{text}</a>
    )
}