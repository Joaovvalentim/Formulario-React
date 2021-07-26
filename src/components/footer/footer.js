import './footer.css';

export default function FooterModel({ }) {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='fila'>
                    <div className='footerCol'>
                        <h4>Languages</h4>
                        <ul>
                            <li><a href='#'>Javascript</a></li>
                            <li><a href='#'>HTML</a></li>
                            <li><a href='#'>CSS</a></li>
                            <li><a href='#'>Ruby</a></li>
                        </ul>
                    </div>
                    <div className='footerCol'>
                        <h4>NetGlobe</h4>
                        <ul>
                            <li><a href='#'>Setups</a></li>
                            <li><a href='#'>Web Videos</a></li>
                            <li><a href='#'>Speeches</a></li>
                            <li><a href='#'>Web Videos</a></li>
                        </ul>
                    </div>
                    <div className='footerCol'>
                        <ul>
                            <h4>Contact</h4>
                            <li><a href='#'>contact to Email</a></li>
                        </ul>
                    </div>
                    <div className='footerCol'>
                        <h4>Social</h4>
                        <div className='socialLinks'>
                            <a href='#'><i className="fab fa-facebook-f"></i></a>
                            <a href='#'><i className="fab fa-twitter"></i></a>
                            <a href='#'><i className="fab fa-instagram"></i></a>
                            <a href='#'><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer >
    )
}