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
              projectCont={
                "My role in this project was general AR-Scene management and implementation in Unity3d using ARFoundation, data-gathering about exoplanets and stellar systems, development of a customizable and multi-instantiatable procedural material for gas planets using Shadergraph and development of a UI for gas planet customization"
              }
              mediaSrc={"media/DemoReel.mp4"}
              mediaPoster={"media/StellarPoster.png"}
              externalSite={"https://stellar-devs.github.io/website"}
            />
            <Project
              projectTitle={"Extending the Akkaplatta Movement Experience"}
              projectDesc={
                "This was a project where I used the principles of somaesthetic design and first person design to design sensory experiences for the 'Centrum för sinnesstimulering' in Stockholm. The design revolved around enhancing the experience of riding the Akkaplatta, a device built to give a sense of autonomy to the user"
              }
              projectCont={
                "This was a solo project so I did everything. This project was conducted during spring 2020 and due to the ongoing pandemic it became a challenge in designing for users that are unable to meet you directly. I believe that somaesthetic principles has potential but as they exist currently they are not the best for designing for severe disability, as they makes assumptions about lived sensory experiences."
              }
              projectArticle={"media/PictorialFinal.pdf"}
              mediaSrc={"media/designcarlzettergren.mp4"}
            />
            <Project
              projectTitle={"SynthesEyeser"}
              projectDesc={
                "In this project we explored multimodal interfaces. We examined whether gaze is a viable modality for multimodal musical production and if musical experience has an impact on learning instruments that use novel interaction modalities. An instrument prototype dubbed the “SynthesEyeser” was developed with consideration to previous research of gaze interfaces and gaze in music.  The instrument was evaluated in an experimental test setting through participants’ self assessment and qualitative experience."
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
              mediaPoster={"media/BruhsiPoster.png"}
              mediaSrc={"media/Brushi_presentation.mp4"}
            />
            <Project
              projectTitle={
                "Perception of Authentic and Pretended Laughter in Virtual Reality"
              }
              projectDesc={
                "This study investigates how laughter is perceived through virtual reality and 360 video, more specifically how people perceive authentic laughter and pretended laughter in 360 video. In this study participants watched authentic and pretended laughter in 360-video on a VR-headset. The participants rated the experience and their reactions were analyzed."
              }
              projectCont={
                "In this project, apart from general background research and data analysis, I edited the 360-degree videos and co-designed and co-ran the user study."
              }
              projectArticle={"media/DT2350_Poster-Layout_LF1B.pdf"}
              mediaSrc={"media/skrattaivr.png"}
            />
            <Project
              projectTitle={"DNDSpellbook"}
              projectDesc={
                "A tool that helps a player of the RPG Dungeons And Dragons 5th edition keep track of all their spells. The main goal and focus of this project was to learn more about using web and Vue-specific design patterns (Vuex) and make a well structured project. It saves user data trough the Firebase API and it uses the dnd5eapi-API for data. This site has not been managed since the project completion so some API calls might be broken, although Bard-related calls seems to still work."
              }
              projectCont={
                "This project made me learn web-development the hard way. During this project I mostly handled the vue-related backend development and the integration of the DND API. I think we learned a lot about the dangers of feature creep and the importance of a good API. Today I think we would have focused more on the UX which was rudimentary at best, but we just wanted to have as many working functions as possible."
              }
              mediaSrc={"media/DNDspellbook.mp4"}
              externalSite={"https://inprogdndproject.netlify.app/#/"}
            />
            <Project
              projectTitle={"Manifest"}
              projectDesc={
                "A design project in a introductory human-computer interaction course. The general goal was to try out and learn various prototyping and design tools and skills such as SOTA, personas, think aloud exercises and interviews. The design was produced with the Marvel app from marvelapp.com"
              }
              projectCont={
                "This is one of those projects were everyone did a little bit of everything, but I was very involved in designing the prototype using Marvel as well as general ideation and state of the art analysis."
              }
              projectArticle={"media/Design Documentation L06 DH1620.pdf"}
              mediaSrc={"media/manifestprototype.png"}
              externalSite={"https://marvelapp.com/89jfhbe"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
