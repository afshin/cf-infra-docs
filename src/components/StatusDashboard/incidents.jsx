import { React, useEffect } from "react";
import styles from "./styles.module.css";

export default function Incidents({ onLoad }) {
  useEffect(() => void onLoad(), []);
  return (
    <>
      <div id="incidents" className={styles.toc_anchor}></div>
      <div className="card margin-top--xs">
        <div className="card__header">
          <h3>Incidents</h3>
        </div>
        <div className="card__body">Incidents information</div>
      </div>
    </>
  );
}
