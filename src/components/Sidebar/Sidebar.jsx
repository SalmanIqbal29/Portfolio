"use client"
import Link  from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "@/context/DataProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoon,
    faSun,
    faCog,
    faHome,
    faUser,
    faList,
    faBriefcase,
    faComment,
    faPeopleGroup
} from "@fortawesome/free-solid-svg-icons";

import Logo from "@/components/Logo";
import NavToggler from "@/components/NavToggler";


export const Sidebar = () => {
    const { setColor, color, changeFontSize, theme, toggleTheme } =
    useContext(DataContext);

    const [activeSection, setActiveSection] = useState("home");
    const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

    const handleNavClick = (target) => {
        setActiveSection(target);
    };

    const toggleSwitcher = () => {
        setIsSwitcherOpen(!isSwitcherOpen);
    };

    const handleStyleChange = (color) => {
        const newColor = color.replace(/[[\]']+/g, "");
        setColor(newColor);


        document.documentElement.style.setProperty('--skin-color', newColor);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isSwitcherOpen) {
                setIsSwitcherOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isSwitcherOpen]);

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [color, theme]);

    return (
        <div className="main-container">
            <div className={`style-switcher ${isSwitcherOpen ? "open" : ""}`}>
                <div className="style-switcher-toggle s-icon" onClick={toggleSwitcher}>
                    <FontAwesomeIcon icon={faCog} className="fas fa-cog fa-spin" />
                </div>

                <div className="day-night s-icon" onClick={toggleTheme}>
                    {theme === "light" ? 
                    <FontAwesomeIcon icon={faMoon} /> :
                    <FontAwesomeIcon icon={faSun} />
                }
                </div>

                <h4>Theme Colors</h4>
                <div className="colors">
                    <span
                        className="bg-[#ec1839]"
                        onClick={() => handleStyleChange("#ec1839")}
                        style={{ cursor: "pointer" }}
                    ></span>
                    <span
                        className="bg-[#fa5b0f]"
                        onClick={() => handleStyleChange("#fa5b0f")}
                        style={{ cursor: "pointer" }}
                    ></span>
                    <span
                        className="bg-[#2dac7b]"
                        onClick={() => handleStyleChange("#2dac7b")}
                        style={{ cursor: "pointer" }}
                    ></span>
                    <span
                        className="bg-[#1854b4]"
                        onClick={() => handleStyleChange("#1854b4")}
                        style={{ cursor: "pointer" }}
                    ></span>
                    <span
                        className="bg-[#f021b2]"
                        onClick={() => handleStyleChange("#f021b2")}
                        style={{ cursor: "pointer" }}
                    ></span>
                </div>
                <div>
                    <button
                        className="button-increase"
                        onClick={() => changeFontSize("increase")}
                    >
                        A+
                    </button>
                    <button
                        className="button-decrease"
                        onClick={() => changeFontSize("decrease")}
                    >
                        A-
                    </button>
                </div>
            </div>

            <div className="main-content">
                <div className="aside">
                    <Logo />
                    <NavToggler />
                    <ul className='nav'>
                        <li>
                            <Link
                                href="/"
                                style={{ color: `${activeSection === "home" ? color : ""}` }}
                                onClick={() => handleNavClick("home")}
                            >
                                <FontAwesomeIcon icon={faHome} className="fa fa-home" /> Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/about"
                                style={{ color: `${activeSection === "about" ? color : ""}` }}
                                onClick={() => handleNavClick("about")}
                            >
                                <FontAwesomeIcon icon={faUser} className="fa fa-user" /> About
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/services"
                                style={{
                                    color: `${activeSection === "services" ? color : ""}`,
                                }}
                                onClick={() => handleNavClick("services")}
                            >
                                <FontAwesomeIcon icon={faList} className="fa fa-user" /> Services
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/portfolio"
                                style={{
                                    color: `${activeSection === "portfolio" ? color : ""}`,
                                }}
                                onClick={() => handleNavClick("portfolio")}
                            >
                                <FontAwesomeIcon icon={faBriefcase} className="fa fa-user" /> Portfolio
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/team"
                                style={{ color: `${activeSection === "team" ? color : ""}` }}
                                onClick={() => handleNavClick("team")}
                            >
                                <FontAwesomeIcon icon={faPeopleGroup} className="fa fa-user" /> Team
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                style={{ color: `${activeSection === "contact" ? color : ""}` }}
                                onClick={() => handleNavClick("contact")}
                            >
                                <FontAwesomeIcon icon={faComment} className="fa fa-user" /> Contact
                            </Link>
                        </li>

                        {/* <li>
                            <Link
                                href="/theme"
                                style={{ color: `${activeSection === "theme" ? color : ""}` }}
                                onClick={() => handleNavClick("theme")}
                            >
                                <i className="fa fa-user" /> Themes
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
