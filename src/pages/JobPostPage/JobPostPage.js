import React from "react";
import JobPost from "../../components/JobPost/JobPost";
import JobImage from "../../assets/images/job.png";

export default function JobPostPage() {
    return (
        <div style={{ display: "flex" }}>
            <JobPost />
            <img style={{ maxHeight: "130vh", width: "50vw" }} src={JobImage} />
        </div>
    );
}