import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Requirement from "../../Assets/Icons/requriement.png";
import UI from "../../Assets/Icons/UIdesign.png";
import Development from "../../Assets/Icons/development.png";
import Testing from "../../Assets/Icons/maintanace.png";
import Maintanance from "../../Assets/Icons/web.png";
export default function TimeLine() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            variant="outlined"
            sx={{ borderColor: "#5271ff !important" }}
          >
            <img src={Requirement} alt="img" className="timeline-icon" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" className="timeline-title">
            Requirement Gathering
          </Typography>
          <Typography className="timeline-description">
            We ensure that we gather comprehensive information about the
            project's domain and requirements before beginning any work. We
            expect clear communication from our clients to effectively manage
            expectations throughout every step of the process.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            variant="outlined"
            sx={{ borderColor: "#5271ff !important" }}
          >
            <img src={UI} alt="img" className="timeline-icon" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h3 className="timeline-title">UI Design</h3>
          <p className="timeline-description alternate-content">
            We design visually appealing, clear, efficient, and responsive
            layouts that capture public interest. Our design expertise spans
            mobile apps, websites, e-commerce platforms, and more.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            variant="outlined"
            sx={{ borderColor: "#5271ff !important" }}
          >
            <img src={Development} alt="img" className="timeline-icon" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" className="timeline-title">
            Development & Implementation
          </Typography>
          <Typography className="timeline-description">
            We take a comprehensive, efficient, and structured approach to
            development by transforming design requirements and UI into
            functional code. By carefully implementing the user interface and
            rigorously testing our work, we ensure a superior user experience.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            variant="outlined"
            sx={{ borderColor: "#5271ff !important" }}
          >
            <img src={Testing} alt="img" className="timeline-icon" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h3 variant="h6" component="span" className="timeline-title">
            Testing
          </h3>
          <p className="timeline-description alternate-content">
            Our testing process is thorough and meticulous, ensuring that every
            aspect of the application functions seamlessly. We rigorously test
            each feature, identify and fix issues, and optimize performance to
            deliver a flawless user experience.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            variant="outlined"
            sx={{ borderColor: "#5271ff !important" }}
          >
            <img src={Maintanance} alt="img" className="timeline-icon" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" className="timeline-title">
            Maintanence
          </Typography>
          <Typography className="timeline-description">
            Our maintenance services ensure your project remains up-to-date and
            performs optimally. We provide regular updates, monitor system
            performance, and swiftly address any issues, ensuring long-term
            reliability and efficiency.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
