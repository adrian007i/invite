import Typewriter from "typewriter-effect";

function App() {

  const showNote = () => {
    document.getElementById("bg_audio").play();
    document.getElementById("landing_content").classList.add("hide");
    document.getElementById("letter_content").classList.remove("hide");
  }

  const seeYou = () => { 
    document.getElementById("letter_content").classList.add("hide");
    document.getElementById("confirmation").classList.remove("hide");
  }



  let name = window.location.href.replace("http://localhost:3000/", "");
  if (name !== "") {
    name = "to - " + name
  }




  return (
    <div id="app" style={{ "backgroundImage": "url('/lady.gif')" }}>

      <audio id="bg_audio" loop >
        <source src="spooky.mp3" type="audio/mp3" />
      </audio>

      <div id="landing_content" onClick={showNote}>
        <img src="/letter.png" alt="" id="letter" />
        <div>{name}</div>
        <p>OPEN IF YOU DARE</p>
      </div>

      <div id="letter_content" class="hide">

        <div id="typed">
          <Typewriter 
            id="typed_id" 
            onInit={(typewriter) => {
              document.getElementById("landing_content").addEventListener("click", ()=>{
                typewriter 
                .changeDelay(100)
                .typeString("<p>You're invited to</p>")  
                .pauseFor(2000)
                .typeString(`<p><b style="color:red;font-size:30px;">"The Awakening"</b></p>`) 
                .pauseFor(2000)
                .typeString("<p>on All Hallow's Eve</p>") 
                .pauseFor(2000)
                .typeString("<p>at dusk until the witching hour</p>") 
                .pauseFor(2000)
                .typeString("<p>Private Location</p>") 
                .pauseFor(2000)
                .typeString("<p>A Masked Event- Costume Required</p>")  
                .start() 
 
              }); 
            }}
          />
        </div>

        <div id="accept">
          <button onClick={seeYou}>Accept</button>
        </div>
      </div>


      <div id="confirmation" className="hide">
        I'll be waiting {name.replace("to - ", "")}
        <br />
        <small style={{ "color": "White", "fontSize": "18px" }}>Don't Look Behind You!</small>
      </div>




    </div>
  );
}

export default App;
