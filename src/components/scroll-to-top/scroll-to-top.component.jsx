import { useEffect, useState, Fragment } from "react";

import { BackToTopButton } from "./scroll-to-top.styles";

const ScrollToTop = () => {
const [showButton, setShowButton] = useState(false);

    useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
        setShowButton(true);
        } else {
        setShowButton(false);
        }
    });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };
    return (
        <Fragment>
        {showButton && (
            <BackToTopButton onClick={scrollToTop} className="back-to-top">
                &#8682;
            </BackToTopButton>
          )}
        </Fragment>
    )
}

export default ScrollToTop;