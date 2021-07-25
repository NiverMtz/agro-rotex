import React from 'react'
import '../components/footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src="/logo-original.png" alt="Logo" />
            </div>
            <div className="footer-info">
                <div className="footer-info-left">
                    <div className="footer-info__name">
                        Agro-Rotex S.A. de C.V.
                    </div>       
                </div>
                <div className="footer-info-center">
                    <div className="footer-info__email">
                        agro_rotex@gmail.com
                    </div>
                    <div className="footer-info__terms">
                        ©2021 Agro-Rotex | All rights reserved
                    </div>
                </div>
                <div className="footer-info-right">
                    <div className="footer-info__number">
                        99-99-99-99-99
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer


