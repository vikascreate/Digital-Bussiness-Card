import Twitter from './Twitter Icon.png';
import Github from './GitHub Icon.png';
import Facebook from './Facebook Icon.png';
import Instagram from './Instagram Icon.png';
export default function Footer(){
return(
<div className="Footer">
<img src={Twitter} className="Twitter"></img>
<img src={Github} className="Github"></img>
<img src={Facebook} className="Facebook"></img>
<img src={Instagram} className="Instagram"></img>
</div>
);
}