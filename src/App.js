import "./App.css";

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
              <img className="headShot" src="WFhs2.png" alt="This is me" />
              <div>
                <h2>Carl Zettergren</h2>
                <p>
                  +46 76 112 32 33 <br />
                  carl.a.zettergren@gmail.com <br />
                  Stockholm
                </p>
                <p>
                  Last year of the Media Technology program at KTH, with a focus
                  on visual media technology.
                  <br /> <br/> Writing my Degree Project in Computer Science and
                  Engineering, specializing in Interactive Media Technology, at
                  the Swedish National Forensic Centre (NFC) where I am
                  investigating whether 360-degree video is suitable for use in
                  emotionally preparatory scenario training for scenarios of
                  undue influence.
                  <br /> <br/> Outgoing and kind.
                  <br /> <br/> Can pop industrial quantities of popcorn.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="projects" className="contentContainer flex3">
          <h1>Projects</h1>
          <div className="scrollIntermediate">
            <div id="synth" className="contentItem videoItem">
              <div className="flex3">
                <video controls>
                  <source src="/Syntheseyeser_final.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="flex2">
                The SynthesEyser is an exploration in multimodal interactions.
                The gaze and gesture based instrument uses a Tobii eye-tracker
                to understand where on the custom-built UI the player is
                looking, changing the pitch and amount of effect applied to the
                sound. The volume is controlled through gestures in front of a
                proximity sensor. All of which is controlled via a Bela
                micro-controller.
              </p>
            </div>
            <div id="synth" className="contentItem videoItem">
              <div className="flex3">
                <video controls>
                  <source src="/Syntheseyeser_final.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="flex2">
                The SynthesEyser is an exploration in multimodal interactions.
                The gaze and gesture based instrument uses a Tobii eye-tracker
                to understand where on the custom-built UI the player is
                looking, changing the pitch and amount of effect applied to the
                sound. The volume is controlled through gestures in front of a
                proximity sensor. All of which is controlled via a Bela
                micro-controller.
              </p>
            </div>
            <div id="synth" className="contentItem videoItem">
              <div className="flex3">
                <video controls>
                  <source src="/Syntheseyeser_final.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="flex2">
                The SynthesEyser is an exploration in multimodal interactions.
                The gaze and gesture based instrument uses a Tobii eye-tracker
                to understand where on the custom-built UI the player is
                looking, changing the pitch and amount of effect applied to the
                sound. The volume is controlled through gestures in front of a
                proximity sensor. All of which is controlled via a Bela
                micro-controller.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
