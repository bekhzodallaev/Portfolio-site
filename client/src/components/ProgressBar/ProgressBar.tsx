
import React, { useEffect, useState } from 'react'
import styles from "./ProgressBar.module.css";

function ProgressBar() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScroll(scrollPercent);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <progress
            value={scroll}
            max="100"
            style={
                {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "5px",
                    zIndex: 9999,
                    appearance: "none",
                }
            }
            className={styles.scroll_progress}
      >
          
     </progress>
  )


}

export default ProgressBar