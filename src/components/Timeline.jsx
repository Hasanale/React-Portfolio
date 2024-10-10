import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "@mui/material/styles";

function Timeline() {
  const theme = useTheme();

  // Set the styles based on the theme mode
  const isDarkMode = theme.palette.mode === "dark";
  const contentBackground = isDarkMode ? "white" : "black";
  const contentColor = isDarkMode ? "black" : "white";
  const arrowBorderColor = isDarkMode ? "white" : "black";
  const iconBackgroundColor = isDarkMode ? theme.palette.primary.main : "black";

  return (
    <div id="history">
      <div className="items-container">
        <h1 className="h2 mt-10 text-accent text-center text-[45px] lg:text-[55px] mb-20">
          Experience
        </h1>
        <style>
          {`
            .vertical-timeline::before {
              background-color: ${isDarkMode ? "white" : "black"} !important;
            }
          `}
        </style>
        <VerticalTimeline className="vertical-timeline">
          {/* Wistech */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: contentBackground,
              color: contentColor,
              border: `1px solid ${theme.palette.divider}`,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${arrowBorderColor}`,
            }}
            date="2022 - present"
            iconStyle={{
              background: iconBackgroundColor,
              color: "white",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className="vertical-timeline-element-title text-[26px] font-bold">
              Wisdom IT Solutions
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              On-site
            </h4>
            <p>
              Frontend Developer. HTML, CSS, Bootstrap, JavaScript, React JS,
              Tailwind CSS, Git
            </p>
          </VerticalTimelineElement>

          {/* Full Stack Engineer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: contentBackground,
              color: contentColor,
              border: `1px solid ${theme.palette.divider}`,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${arrowBorderColor}`,
            }}
            date="2020 - 2022"
            iconStyle={{
              background: iconBackgroundColor,
              color: "white",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className="vertical-timeline-element-title text-[26px] font-bold">
              Wordpress Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              Freelancing
            </h4>
            <p>Elementor, Elementor Pro, Woo Commerce, Theme Customization</p>
          </VerticalTimelineElement>

          {/* Staff Engineer Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: contentBackground,
              color: contentColor,
              border: `1px solid ${theme.palette.divider}`,
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${arrowBorderColor}`,
            }}
            date="2021 - 2021"
            iconStyle={{
              background: iconBackgroundColor,
              color: "white",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className="vertical-timeline-element-title text-[26px] font-bold">
              UI/UX Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-bold">
              Freelancing
            </h4>
            <p>Figma, Adobe xd, PhotoShop</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
