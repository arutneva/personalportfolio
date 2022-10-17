import React from "react";
//array of objects, with the information for each item in portfolio
//includes: name, description(short), github link/+live link(if available), image(SS link, URL)
//separate react component for portfolio item (JS file)
//container element to house each portfolio item
//use array.map method on portfolio objects, pass through portfolio item through react container
export default function Portfolio(props) {
    return (
        <>
            <div class="container">
                <section class="hero is-warning is-small">
                    <div class="hero-body">
                        <div class="level">
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading is-size-5">Portfolio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="container">
                <div class="card">
                    <div class="card-image">
                        <figure class="image">
                            <img src="images/music.jpg" alt="music notes black background" />
                        </figure>
                        <div class="card-content">
                            <div class="content">
                                Music Finder: 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <figure class="image">
                        <img src="images/storylines2.png" alt="storylines homepage" />
                    </figure>
                    <div class="card-content">
                        <div class="content">
                            Storylines: A place to write and contribute to other written stories.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <figure class="image">
                        <img src="images/travel.jpg" alt="plane in sky" />
                    </figure>
                    <div class="card-content">
                        <div class="content">
                            TBA
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}