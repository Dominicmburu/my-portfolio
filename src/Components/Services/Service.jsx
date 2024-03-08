import React from "react";
import './Service.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./cv.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion';

const Service = () => {

    const transition = {duration : 1, type: 'spring'}

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    return(
        <div className="services" id="Services">
            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode ? 'white': ''}}>My Awesome</span>
                <span>services</span>
                <spane>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <br />
                    Dolorum eos provident earum cupiditate dolor, beatae ad labore optio repellat, 
                    <br />
                    obcaecati recusandae reprehenderit officiis ea vel, 
                    <br />
                    consequuntur tempore nulla minima numquam.
                </spane>

                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>

            {/* right side */}
            <div className="cards">

                <motion.div 
                whileInView={{left: '14rem'}}
                initial={{left: '25rem'}}
                transition={transition}


                style={{left: '14rem'}}>
                    <Card 
                        emoji = {HeartEmoji}
                        heading = {'Design'}
                        detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd, Adobe Illustrator, Video editing "}
                    />
                </motion.div>

                <motion.div 
                whileInView={{left: '-4rem'}}
                initial={{left: '-25rem'}}
                transition={transition}
                
                style={{left: '-4rem', top: '12rem'}}>
                    <Card 
                        emoji = {Glasses}
                        heading = {'Developer'}
                        detail = {"Html, Css, JavaScript, React, Python, Java, Kotlin, MySQL"}
                    />
                </motion.div>

                <motion.div 
                whileInView={{left: '12rem'}}
                initial={{left: '25rem'}}
                transition={transition}
                
                style={{left: '12rem', top: '19rem'}}>
                    <Card 
                        emoji = {Humble}
                        heading = {'UI/UX'}
                        detail = {"Good with designs of interface designs. Considering all the users of the system"}
                    />
                </motion.div>

                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Service