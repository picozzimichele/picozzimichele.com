import React, { useState } from "react";
import ImgurGrid from "./ImgurGrid"
import Modal from "./Modal"


const HomePage = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div>
        <ImgurGrid setSelectedImg={setSelectedImg} />
        { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
    </div>
  );
}

export { HomePage as default }
