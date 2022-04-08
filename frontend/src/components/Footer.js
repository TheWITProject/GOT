function Footer() {
    return (
      <div style={{display:"flex", margin:"20px", justifyContent: "space-evenly"}}>
          <div style={{alignSelf: "flex-start",textAlign:"left"}}>
              <h3>NOT QUITE READY FOR &lt;GOT/&gt; ?</h3>
              <p>Join our mailing list to receive monthly professional stories:</p>
              <form>
                  <input type="text" id="fname" name="fname"size="50"placeholder="Your Email Here"/>
              </form>
          </div>
          <div style={{alignSelf: "flex-start",textAlign:"left"}}>
              <h3>WHO ARE WE?</h3>
              <a style={{textDecoration:"none", color:"inherit"}}href=""><p>Meet the Team</p></a>
              <a style={{textDecoration:"none", color:"inherit"}}href=""><p>Contact Us</p></a>
              <a style={{textDecoration:"none", color:"inherit"}}href=""><p>FAQ</p></a>
  
          </div>
          <div style={{alignSelf: "flex-start",textAlign:"left"}}>
              <h3>OUR MISSION</h3>
              <a style={{textDecoration:"none", color:"inherit"}}href=""><p>Career Map</p></a>
              <a style={{textDecoration:"none", color:"inherit"}}href=""><p>Discussion</p></a>
              <a style={{textDecoration:"none", color:"inherit"}}href=""><p>Stories</p></a>
          </div>
         
      </div>
    );
  }
  
  export default Footer;