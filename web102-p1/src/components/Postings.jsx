import React from "react"
import Images from './Images'

const Postings = () => {
    return (

        <div className="post-container">
            <div className="post">
                <div className="post-type">Movie</div>
                <Images
                    src="../src/assets/movies/sinners.jpg"
                    alt="Sinners poster"
                    className="post-img"
                />
                <div>Name of type</div>
                <div className="read-more">Read More Button</div>
            </div>
            <div className="post">
                <div className="post-type">Post Type</div>
                <Images
                    src="../src/assets/movies/sinners.jpg"
                    alt="Sinners poster"
                    className="post-img"
                />
                <div>Name of type</div>
                <div className="read-more">Read More Button</div>
            </div>
            <div className="post">
                <div className="post-type">Post Type</div>
                <Images
                    src="../src/assets/movies/sinners.jpg"
                    alt="Sinners poster"
                    className="post-img"
                />
                <div>Name of type</div>
                <div className="read-more">Read More Button</div>
            </div>
            <div className="post">
                <div className="post-type">Post Type</div>
                <Images
                    src="../src/assets/movies/sinners.jpg"
                    alt="Sinners poster"
                    className="post-img"
                />
                <div>Name of type</div>
                <div className="read-more">Read More Button</div>
            </div>
            <div className="post">
                <div className="post-type">Post Type</div>
                <Images
                    src="../src/assets/movies/sinners.jpg"
                    alt="Sinners poster"
                    className="post-img"
                />
                <div>Name of type</div>
                <div className="read-more">Read More Button</div>
            </div>
            <div className="post">
                <div className="post-type">Post Type</div>
                <Images
                    src="../src/assets/movies/sinners.jpg"
                    alt="Sinners poster"
                    className="post-img"
                />
                <div>Name of type</div>
                <div className="read-more">Read More Button</div>
            </div>

        </div>



    )
}

export default Postings