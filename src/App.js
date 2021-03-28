import "./App.css";
import Project from "./components/Project";
function App() {
  return (
    <>
      <div className="navContainer" id="navBar">
        <a href="#about" className="navItem">
          <h2>About</h2>
        </a>
        <a href="#projects" className="navItem">
          <h2>Projects</h2>
        </a>
      </div>
      <div className="contentWrapper" id="contentWrap">
        <div id="about" className="contentContainer flex1">
          <h1>About</h1>
          <div className="scrollIntermediate">
            <div className="contentItem">
              <div id="Image" className="headShot">
                <img src="media/WFhs2.png" alt="This is me" />
              </div>
              <div>
                <h2>Carl Zettergren</h2>
                <p>
                  carl.a.zettergren@gmail.com <br />
                  +46 76 112 32 33 <br />
                  Stockholm
                </p>
                <p>
                  Last year of the Media Technology program at KTH, with a focus
                  on visual media technology.
                  <br /> <br /> Writing my Degree Project in Computer Science
                  and Engineering, specializing in Interactive Media Technology,
                  at the Swedish National Forensic Centre (NFC) where I am
                  investigating whether 360-degree video is suitable for use in
                  emotionally preparatory scenario training for scenarios of
                  undue influence.
                  <br /> <br /> Outgoing and kind.
                  <br /> <br /> Can pop industrial quantities of popcorn.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="projects" className="contentContainer flex3">
          <h1>Projects</h1>
          <div className="scrollIntermediate">
            <Project
              projectTitle={"StellAR"}
              projectDesc={
                "StellAR is about creating your own stellar system which you can view in AR.This includes creating and customizing your own planets and to set them out in the star system on unique orbits. It's possible to save multiple star systems and also to change the gravity settings for different orbit speeds."
              }
              projectCont={"My role in this project was general AR-Scene management and implementation in Unity3d using ARFoundation, data-gathering about exoplanets and stellar systems, development of a customizable and multi-instantiatable procedural material for gas planets using Shadergraph and development of a UI for gas planet customization"}
              mediaSrc={"media/DemoReel.mp4"}
              externalSite={"https://stellar-devs.github.io/website"}
            />
            <Project
              projectTitle={"SynthesEyeser"}
              projectDesc={
                "In this project we explored multimodal interfaces. We examined whether gaze is a viable modality for multimodal musical production and if musical experience has an impact on learning instruments that use novel interaction modalities. An instrument prototype dubbed the “SynthesEyeser” was developed with consideration to previous research of gaze interfaces and gaze in music. A low-latency micro-controller, Bela, powers the instrument and utilizes a Tobii eye-tracker for gaze control as well as an ultrasonic sensor for gesture control. The instrument was evaluated in an experimental test setting through participants’ self assessment and qualitative experience."
              }
              projectCont={
                "During this project I co-developed the user interface with p5.js, I wired parts of the electronics and I co-designed and ran the qualitative tests."
              }
              mediaSrc={"media/Syntheseyeser_final.mp4"}
            />
            <Project
              projectTitle={"Brushi"}
              projectDesc={
                "An interaction design project on the theme 'Media@Home'. A common household rutine involves brushing your teeth, we wanted to create a design that incentivises dental care for young children."
              }
              projectCont={
                "My role in this project revolved around producing physical prototypes by modeling in Autodesk Fusion 360 and 3d-printing via Cura on an Ultimaker s5 and an Ultimaker s3 extended."
              }
              mediaSrc={"media/Brushi_presentation.mp4"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
