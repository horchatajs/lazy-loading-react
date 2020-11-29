import React, { useRef, useState, useEffect } from "react";
import { ObserverImage } from "../functions/ObserverImages";

export default function Image({ src }) {
  const [showImage, setshowImage] = useState(false);
  const placeHolderRef = useRef(null);

  useEffect(() => {
    ObserverImage(placeHolderRef.current, setshowImage);
  }, []);

  if (showImage) {
    return <img src={src} alt="" className="img-card" />;
  }
  return (
    <div>
      <p ref={placeHolderRef} align="center">
        CARGANDO..
      </p>
    </div>
  );
}
