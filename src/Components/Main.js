import Email from './Icon.png';
import Linkedin from './Vectoricon.png';
export default function Main(){
return (<div className="card--mid">
    <h2 className="Names">Vikas Kumar Singh</h2>
    <h4 className="Development">FrontEnd Developer</h4>
    <h5 className="link">vikaskumarsingh website</h5>
    <button className="email--button">
        <img src={Email} className="email--img"></img>
        <h3>Email</h3>
    </button>
    <button className="Linkedin--button">
        <img src={Linkedin} className="Linkedin--img"></img>
        <h3>Linkedin</h3>
    </button>
    <div className="About">
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and 
            automating daily tasks. I try to keep up with security and best practices, and
             am always looking for new things to learn.</p>
    </div>
    <div className="Intersts">
        <h3>Interests</h3>
        <p>Food expert. Music scholar. Reader. Internet fanatic.
             Entrepreneur. Travel geek.Gamer,
              Pop culture ninja. Coffee fanatic.</p>
    </div>
</div>);
}