import { React } from 'react';
import LinkButton from './linkButton';

export default function DesktopNav() {
    return(
        <nav className='desktop-nav'>
            <a className='desktop-nav__button link__button' href='/'>Home</a>
            <LinkButton className='desktop-nav__button' text='Menu' />
            <LinkButton className='desktop-nav__button' text='About' />
            <LinkButton className='desktop-nav__button' text='Events' />
        </nav>
    )
}