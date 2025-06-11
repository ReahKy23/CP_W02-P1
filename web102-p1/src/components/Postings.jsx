import React from "react"
import Images from './Images'
import Type from './Type'

const Postings = () => {
    return (

        <div className="post-container">
            <div className="post">
                <Type type='Movie' />
                <Images
                    src="../src/assets/imgs/sinners.jpg"
                    alt="Sinners poster"
                    className="post-img"
                />
                <br></br>
                <div>Sinners Movie</div>
                <a href="https://www.imdb.com/title/tt31193180/" target="_blank" className="read-more">
                    Learn More
                </a>
            </div>

            <div className="post">
                <Type type='Show' />
                <Images
                    src="../src/assets/imgs/newgirl.jpg"
                    alt="New Girl poster"
                    className="post-img"
                />
                <br></br>
                <div>New Girl</div>
                <a href="https://www.imdb.com/title/tt1826940/" target="_blank" className="read-more">
                    Learn More
                </a>
            </div>

            <div className="post">
                <Type type='Song' />
                <Images
                    src="../src/assets/imgs/capegod.jpg"
                    alt="Cape God album cover"
                    className="post-img"
                />
                <br></br>
                <div>"Susie Save Your Love" -Allie X </div>
                <a href="https://open.spotify.com/track/1ZXStdBGeU15Ozw3Tk2oeG?si=acc162decdcf4b16" target="_blank" className="read-more">
                    Learn More
                </a>
            </div>

            <div className="post">
                <Type type='Book' />
                <Images
                    src="../src/assets/imgs/ringshout.jpg"
                    alt="Ring Shout book cover"
                    className="post-img"
                />
                <br></br>
                <div>Ring Shout - P. Djèlí Clark</div>
                <a href="https://en.wikipedia.org/wiki/Ring_Shout" target="_blank" className="read-more">
                    Learn More
                </a>
            </div>

            <div className="post">
                <Type type="Album" />
                <Images
                    src="../src/assets/imgs/Timeless.jpg"
                    alt="Katrynada Timeless albumn cover"
                    className="post-img"
                />
                <br></br>
                <div>"Timeless" - Kaytranada</div>
                <a href="https://open.spotify.com/album/3C3t2bKhwEL3wdKioqWUDh?si=CWjbA-JsSVSCueiGWleb9A" target="_blank" className="read-more">
                    Learn More
                </a>
            </div>

            <div className="post">
                <Type type="Song" />
                <Images
                    src="../src/assets/imgs/sinners.jpg"
                    alt="Sinners poster"
                    className="post-img"
                />
                <br></br>
                <div>"I Lied to You" - Miles Canton</div>
                <a href="https://open.spotify.com/track/0XfwXFXOI7oys9rsZ2sjrt?si=f57d2bd2f3244144" target="_blank" className="read-more">
                    Learn More
                </a>
            </div>
        </div>
    )
}

export default Postings