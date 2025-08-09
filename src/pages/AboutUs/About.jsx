import React, { useEffect } from 'react'
import BrandIntro from '../../component/BrandIntro/BrandIntro'
import './about.css'
import Heroabout from '../../component/heroAbout/Heroabout'
import BrandVision from '../../component/brandvision/BrandVision';
import BrandAdvantages from '../../component/BrandAdvantages/BrandAdvantages';
import StoreStats from '../../component/StoreStats/StoreStats';
import BrandAchievements from '../../component/BrandAchievements/BrandAchievements';
import BrandClosing from '../../component/BrandClosing/BrandClosing';

function About() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className='about-page'>
            {/* hero-about  */}
            <Heroabout />
            <hr />
            {/* BrandIntro  */}
            <BrandIntro />
            <hr />
            {/* BrandVision  */}
            <BrandVision />
            <hr />
            {/* BrandAdvantages  */}
            <BrandAdvantages />
            <hr />

            {/* StoreStats  */}
            <StoreStats />
            <hr />
            {/* BrandAchievements  */}
            <BrandAchievements />
            <hr />
            {/* BrandClosing  */}
            <BrandClosing />





        </div>
    )
}

export default About
