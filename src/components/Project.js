import React from "react";

function Project(props) {
  const fileTypes = {};
  fileTypes.allowedVideoTypes = ["mp4", "webm", "ogg"];
  fileTypes.allowedImgTypes = [
    "apng",
    "avif",
    "gif",
    "jpg",
    "jpeg",
    "jfif",
    "pjpeg",
    "pjp",
    "png",
    "svg",
    "webp",
  ];
  const mediaElement = FileCheck(props.mediaSrc, fileTypes);

  return (
    <div>
    <h2>{props.projectTitle}</h2>
    <div id={props.projectTitle} className="contentItem mediaItem">
      
      <div className="flex3">
        {mediaElement}
       
      </div>
      <div className="projectText flex2">
        
        <p>{props.projectDesc}</p>
        <hr/>
        <p>{props.projectCont}</p>
        {pdfCheck(props.projectArticle)}
        {websiteCheck(props.externalSite, props.projectTitle)}
      </div>
    </div>
    </div>
  );
}

function FileCheck(fileSrc, types) {
  if (types.allowedImgTypes.indexOf(fileSrc.split(".").pop()) > -1) {
    return (
      <img
        src={fileSrc}
        alt={fileSrc.split(".").slice(-2, -1)[0].split("/").pop()}
      />
    );
  } else if (types.allowedVideoTypes.indexOf(fileSrc.split(".").pop()) > -1) {
    return (
      <video controls>
        <source src={fileSrc} type={"video/" + fileSrc.split(".").pop()} />
        Your browser does not support the video tag.
      </video>
    );
  }
  else return <h1>Filetype not supported</h1>;
}
function pdfCheck(link){
  if (link){
    return (
      <div className="linkHelper">
       <a href={link}>PDF article. Opens in the same window.</a>
      </div>
      
       
    );
  }

}

function websiteCheck(link, title) {
  if (link) {
    return (
      <div className="linkHelper">
        <a href={link}>{title + " website. Opens in the same window."}</a>
      </div>
    );
  }
}

export default Project;
