function Footer()
{
    return(
        <div className="footer">
            <hr className="hrline"></hr>
            <h1 className="foot-logo"><i class="bi bi-window-dock"></i><br/>V-MEET</h1>
            <p className="foot-para"><i>Build your meet with trust.</i></p>
            <div className="foot-links">
                <div className="foot-card">
                    <h2>Resources</h2>
                    <h4>Security</h4>
                    <h4>Download</h4>
                    <h4>Privacy Policy</h4>
                </div>

                <div className="foot-card">
                    <h2>Company</h2>
                    <h4>Blog</h4>
                    <h4>Careers</h4>
                    <h4>Contact Us</h4>
                </div>

                <div className="foot-card">
                    <h2>Find Us</h2>
                    <h4>Twitter</h4>
                    <h4>Discord</h4>
                    <h4>LinkedIn</h4>
                </div>
            </div>
            <h2 className="developer">Made with <span className="developer-inside"><i class="bi bi-heart"></i></span>  by <span className="developer-inside">Siddesh Jaiswal</span></h2>
        </div>
        
    );
}

export default Footer;