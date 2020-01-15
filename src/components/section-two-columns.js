import React from "react"
import sectionStyles from "./section-two-columns.module.scss"
import bgCurveDesktop from "../images/bg-curve-desktop.svg"
import bgCurveMobile from "../images/bg-curve-mobile.svg"

export default ({ title, img, children, withBg }) => (
  <section
    className={
      withBg == "true"
        ? `${sectionStyles.bgContainer} ${sectionStyles.container}`
        : `${sectionStyles.container}`
    }
  >
    <div className={sectionStyles.fixedContainer}>
      <div className={sectionStyles.textColumn}>
        <h2>{title}</h2>
        {children}
      </div>
      <div className={sectionStyles.imgColumn}>
        <img className={sectionStyles.imgFull} src={img} />
      </div>
    </div>
  </section>
)
