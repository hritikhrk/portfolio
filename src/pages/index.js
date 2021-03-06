import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection';
import InterestSection from '../components/InterestSection';
import ResumeSection from '../components/ResumeSection';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection />
            <ResumeSection />
            <InterestSection />
            <ContactSection />
            <FooterSection />
        </>
    );
};

export default Home;