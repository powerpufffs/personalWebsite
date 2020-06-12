import React from "react"
import { css } from "@emotion/core"
import { motion } from "framer-motion"
import projectConfig from "../../config/projects-config"
import { Title } from "../Titles"
import { Link } from "gatsby"

const ProjectDescription = (props) => {
  const id = props.id
  const projectInfo = projectConfig.find((project) => project["id"] === id)
  console.log(projectInfo)
  return (
    <div
      css={css`
        min-height: 100vh;
        display: grid;
        grid-template-columns:
          minmax(1rem, 1fr)
          minmax(auto, 1200px)
          minmax(1rem, 1fr);
        grid-template-rows:
          minmax(auto, 100px)
          1fr;
        background-color: black;
        @media only screen and (min-width: 1224px) {
          /* Styles */
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          grid-column-start: 2;
        `}
      >
        <Title
          size={1}
          css={css`
            margin-top: 120px;
            color: white;
          `}
        >
          {projectInfo.title}
        </Title>
        <Link
          to="../"
          css={css`
            color: white;
          `}
        >
          back
        </Link>
        <Title
          size={2}
          css={css`
            margin-top: 120px;
            color: white;
          `}
        >
          This part is coming soon. Eventually.
        </Title>
      </div>
    </div>
  )
}

export default ProjectDescription
