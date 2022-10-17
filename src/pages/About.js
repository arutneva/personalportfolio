import React from "react";

export default function About(props) {
    return (

        <>



            <div class="container">
                <section class="hero is-link is-small">
                    <div class="hero-body">
                        <div class="level">
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading is-size-5">Introduction</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



            <div class="container">
                <div class="columns is-variable is-0 grid-xl is-mobile">
                    <div class="column">
                        <figure class="image">
                        <img src="images/cat.png" alt="pic of nyx" />
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image">
                            <img src="images/picofme.png" alt="avatar of me" />
                        </figure>
                    </div>
                    <div class="column">
                        <figure class="image">
                        <img src="images/tea.jpg" alt="pic of teacup" />
                        </figure>
                    </div>
                </div>
            </div>

            <div class="container">

                <div class="notification is-link is-light">
                    <p>Welcome, my name is Marilyn Ventura (she/her/hers). I play mostly single player video games. Drinking tea, knitting, reading and looking after plants are other things I enjoy. I also love to take walks with my cat, Nyx. This upcoming year some of my personal goals are to learn how to rollerskate and swim.</p>
                    <br></br>
                    <p> I'm learning programming because I enjoy acquiring different skills and knowledge, specifically when it comes to technology.</p>


                </div>
            </div>


            <div class="container">
                <section class="hero is-link is-small">
                    <div class="hero-body">
                        <div class="level">
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading is-size-5">Technology Skills</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="container">
                <div class="notification is-link is-light">
                    <div class="columns grid-xl is-mobile">
                        <div class="column mx-5">
                            <p>Javascript</p>
                            <p>Node.js</p>
                            <p>MySQL</p>
                            <p>React</p>
                        </div>
                        <div class="column">
                            <p>Bootstrap</p>
                            <p>Bulma</p>
                            <p>Chakra</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <section class="hero is-link is-small">
                    <div class="hero-body">
                        <div class="level">
                            <div class="level-item has-text-centered">
                                <div>
                                    <p class="heading is-size-5">Future</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="container">
                <div class="notification is-link is-light">
                    <p>Working on UI/UX design</p>
                </div>
            </div>
        </>
    )

}