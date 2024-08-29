import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1 className="h2 text-accent text-center text-[45px] lg:text-[55px] mb-20">
          Experience
        </h1>
        <VerticalTimeline className="vertical-timeline">
          {/* Technology Consultant */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2022 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className="vertical-timeline-element-title text-[26px] font-bold text-[rgb(39,40,34)]">
              Technology Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-bold text-[rgb(39,40,34)]">
              Dallas, TX
            </h4>
            <p className="text-[rgb(39,40,34)]">
              Full-stack Web Development, GenAI/LLM, Project Management,
              Business Development
            </p>
          </VerticalTimelineElement>

          {/* Full Stack Engineer */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className="vertical-timeline-element-title text-[26px] font-bold text-[rgb(39,40,34)]">
              Full Stack Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-bold text-[rgb(39,40,34)]">
              Laie, HI
            </h4>
            <p className="text-[rgb(39,40,34)]">
              Frontend Development, Backend Development, User Experience, Team
              Leading
            </p>
          </VerticalTimelineElement>

          {/* Staff Engineer Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className="vertical-timeline-element-title text-[26px] font-bold text-[rgb(39,40,34)]">
              Staff Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-bold text-[rgb(39,40,34)]">
              Laie, HI
            </h4>
            <p className="text-[rgb(39,40,34)]">
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
