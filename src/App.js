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
                <img src="WFhs2.png" alt="This is me" />
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
                "StellAR is about creating your own stellar system which you can view in AR.This includes creating and customizing your own planets and to set them out in the star system on unique orbits. In the customization the user can choose between making a solid or a gas planet. The user can then change the look and size of the planets. In the stellar system part the user gets to try to set a stable orbit for a planet. But there is also the option of just goofing around and making planets crash into each other. It's possible to save multiple star systems and also to change the gravity settings for different orbit speeds."
              }
              mediaSrc={"/DemoReel.mp4"}
              externalSite={"https://stellar-devs.github.io/website"}
            />
            <Project
              projectTitle={"SynthesEyeser"}
              projectDesc={
                "The SynthesEyeser is an exploration in multimodal interactions. The gaze and gesture based instrument uses a Tobii eye-tracker to understand where on the custom-built UI the player is looking, changing the pitch and amount of effect applied to the sound. The volume is controlled through gestures in front of a proximity sensor. All of which is controlled via a Bela micro-controller."
              }
              mediaSrc={"/Syntheseyeser_final.mp4"}
            />
            <Project
              projectTitle={"Brushi"}
              projectDesc={
                "An interaction design project on the theme 'Media@Home'. A common household rutine involves brushing your teeth, we wanted to create a design that incentivises dental care for young children. My role in this project revolved around producing physical prototypes by modeling in Autodesk Fusion 360 and 3d-printing via Cura on an Ultimaker s5 and an Ultimaker s3 extended."
              }
              mediaSrc={"/Brushi_presentation.mp4"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
