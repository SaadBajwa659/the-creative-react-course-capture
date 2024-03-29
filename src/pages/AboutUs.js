import React from "react";
// Page Components
import AbouSection from '../components/AboutSection.js';
import ServicesSection from "../components/ServicesSection.js";
import FaqSection from "../components/FaqSection.js";
// Animations
import { motion } from "framer-motion"
import { pageAnimation } from "../animation.js"
import ScrollTop from "../components/ScrollTop.js";

const AboutUs = () => {
    return (
        <motion.div
            exit="exit"
            variants={pageAnimation}
            initial='hidden'
            animate='show'
        >
            <AbouSection />
            <ServicesSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>
    )
}

export default AboutUs;