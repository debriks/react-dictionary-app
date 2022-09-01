import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return <img src={photo.src.landscape} alt="sunset" key={index} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
