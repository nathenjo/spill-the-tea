import { React } from 'react';
import LinkButton from './linkButton';

export default function Nav() {
    return(
        <nav>
            <LinkButton text='Menu' />
            <LinkButton text='About' />
            <LinkButton text='Events' />
        </nav>
    )
}