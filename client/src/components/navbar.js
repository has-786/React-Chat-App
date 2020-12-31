import '../css/navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar(props)
{
  return <div id='mainI'>


  <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
    <div class="container d-flex">
      <div class="contact-info mr-auto">
        <i class="icofont-envelope"></i> <a href="#">deanbjmcpune@gmail.com</a>
        <i class="icofont-phone"></i> +91 20 26128000
        <i class="icofont-google-map"></i> Jai Prakash Narayan Road, Near Pune Railway Station, Pune - 411001
      </div>
      <div class="social-links">
        <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
        <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
        <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
        <a href="#" class="skype"><i class="icofont-skype"></i></a>
        <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
      </div>
    </div>
  </div>

  <div class="window">
    <div class="header-new">
      <img src="./assets/img/gallery/slogo.png" />
      <div class="textcontent">
        <div class="text"> BYRAMJEE JEEJEEBHOY GOVERNMENT MEDICAL COLLEGE </div>
        <div class="text">AND SASSOON GENERAL HOSPITALS, PUNE </div>
      </div>
    </div>
  </div>


  <div id="imgBack"></div>

  <div id="marqueeTag">
    <marquee>“It is health that is the real wealth, and not pieces of gold and silver.” – Mahatma Gandhi</marquee>
  </div>

  <nav>
    <label for="drop" class="toggle" style={{marginTop:'0px'}}>Menu</label>
    <input type="checkbox" id="drop" />
    <ul class="menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/hospital">Hospital</Link></li>
      <li><Link to="/department">Departments</Link></li>
      <li>
      <label for="drop-2" class="toggle">Academics +</label>
      <Link to="/academicActivities">Academics</Link>
      <input type="checkbox" id="drop-2"/>
      <ul>
        <li><Link to="/university">University</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/result">Results</Link></li>
        <li><Link to="/academicActivities">Academic Activities</Link></li>
      </ul>
      </li>
      <li><Link to="/research">Research & Resources</Link></li>
      <li>
      <label for="drop-4" class="toggle">Achievements +</label>
      <Link to="#">Achievements</Link>
      <input type="checkbox" id="drop-4"/>
      <ul>
        <li><Link to="#">Recognition</Link></li>
        <li><Link to="#">Awards & Achievements</Link></li>
      </ul>
      </li>
      <li>
      <label for="drop-5" class="toggle">Staffs +</label>
      <Link to="/teaching_staff">Staffs</Link>
      <input type="checkbox" id="drop-5"/>
      <ul>
        <li><Link to="/cdean">Dean</Link></li>
        <li><Link to="/superintendent">Superintendent</Link></li>
        <li><Link to="/teaching_staff">Teaching Staff</Link></li>
        <li><Link to="/nonTeaching_staff">Non-Teaching Staff</Link></li>
      </ul>
      </li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/archives">Archives</Link></li>
    </ul>
  </nav>
  <div class="chat_on" style={{position:'fixed',bottom:0,right:20,zIndex:1}}>
         <div id='chat' style={{display:'none'}}>
            <iframe
            allow="microphone;"
            width="350"
            height="350"
            src="https://console.dialogflow.com/api-client/demo/embedded/950e1d1f-af06-4760-abd1-fbec695161b5">
            </iframe>
         </div>
         <span class="chat_on_icon"><i id='chat_icon' style={{float:'right',color:'green',fontSize:'40px'}} class="fa fa-comments" aria-hidden="true" onClick={(evt)=>chatbot()}></i></span>
  </div>
</div>
}


function chatbot(){

  if(document.getElementById('chat').style.display==='none'){
    document.getElementById('chat').style.display='block';
    document.getElementById('chat_icon').className='fa fa-close';

    document.getElementById('chat_icon').style.float='left';
    document.getElementById('chat_icon').style.color='black';
    document.getElementById('chat_icon').style.fontSize='25px';


  }
  else {
    document.getElementById('chat').style.display='none';
    document.getElementById('chat_icon').className='fa fa-comments';

    document.getElementById('chat_icon').style.float='right';
    document.getElementById('chat_icon').style.color='green';
    document.getElementById('chat_icon').style.fontSize='40px';


  }


}
