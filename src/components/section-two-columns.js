import React from "react"
import sectionStyles from "./section-two-columns.module.scss"

export default ({ title, img, children, withBg }) => (
  <section
    className={
      withBg === "true"
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
        <img className={sectionStyles.imgFull} src={img} alt="gray background curve" />
      </div>
    </div>
  </section>
)
