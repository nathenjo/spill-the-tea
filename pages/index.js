import { React } from 'react';

import DesktopNav from '../components/desktop/navigation/nav';

export default function Home() {
    return (
        <div className='home'>
            <DesktopNav />
            <h2 className='home__title'>Spill the Tea LLC &trade;</h2>
            <div className='home__content'>
                <div className='home__content__businessinfo'>
                    <a target='_blank' type='address' className='home__content__businessinfo__address' href='https://www.google.com/maps/place/123+W+Home+Ave,+Hartsville,+SC+29550/@34.3757014,-80.0775729,17z/data=!3m1!4b1!4m5!3m4!1s0x885575de06eeb577:0x4bacdcf7e0d89ded!8m2!3d34.375697!4d-80.0753842'>Address: 123 W Home Ave.</a>
                    <p className='home__content__businessinfo__phone'>Phone: (843) 123-4567</p>
                    <label className='home__content__businessinfo__listlabel'>Business Hours: </label>
                    <ul className='home__content__businessinfo__list'>
                        <li className='home__content__businessinfo__list__item'><u>Tuesday</u>: 10:00 AM - 6:00 PM</li>
                        <li className='home__content__businessinfo__list__item'><u>Wednesday</u>: 10:00 AM - 6:00 PM</li>
                        <li className='home__content__businessinfo__list__item'><u>Thursday</u>: 10:00 AM - 6:00 PM</li>
                        <li className='home__content__businessinfo__list__item'><u>Friday</u>: 10:00 AM - 6:00 PM</li>
                        <li className='home__content__businessinfo__list__item'><u>Saturday</u>: 10:00 AM - 6:00 PM</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}