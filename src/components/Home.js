import * as React from 'react'

class Home extends React.Component {

    render () {
        return (
            <div>
                <h1>Hello world</h1>
                <head>
                    <meta charset="utf-8">
                    <title>OGIHARA KOTARO</title>
                    <link rel='stylesheet' type='text/css' href='home.css'>
                </head>
                <body>
                    <div class="header">
                    <div class='header-logo'>
                    KOTARO OGIHARA
                    </div>
                    <div class='header-list'>
                    <ul>
                    <li>KOTARO OGIHARA</li>
                    <li>CAREER</li>
                    <li>HOBBY</li>
                    <li>ACCESS</li>
                    </ul>
                    </div>
                    </div>
                    <div class="main-visual">
                        <div class='copy-container'>
                        <h1>WHAT'S UP,MEN!</h1>
                        <h2>世界で最もCREATIVEな男</h2>
                        </div>
                    </div>
                    <div class='main'>
                    <div class='contents'>
                        <h3 class='section-title'>コンテンツ</h3>
                        <div class='contents-card-wapper'>
                        <div class='contents-card'>
                            <div class='contents-item'>
                            <img class='contents-image' src='images/judo.jpg'>
                            <p>JUDO</p>
                            </div>
                        </div>
                        <div class='contents-card'>
                            <div class='contents-item'>
                            <img class='contents-image' src='images/Straight_Outta_Compton_poster.jpg'>
                            <p>MUSIC</p>
                            </div>
                        </div>
                        <div class='contents-card'>
                            <div class='contents-item'>
                            <img class='contents-image' src='images/physics.jpg'>
                            <p>PHYSIC</p>
                            </div>
                        </div>
                        <div class='contents-card'>
                            <div class='contents-item'>
                            <img class='contents-image' src='images/new-york-stock-exchange.jpg'>
                            <p>BANK</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class='contact-form'>
                    </div>
                    </div>
                    <div class="footer">
                        <div class='footer-logo'>
                        KOTARO OGIHARA
                    </div>
                    <div class='footer-list'>
                    <ul>
                    <li>荻原昂太郎とは</li>
                    <li>恋人募集</li>
                    <li>お問い合わせ</li>
                    </ul>
                    </div>
                </div>
                </body>
                </html>
            </div>
        )
    }
}

export default Home