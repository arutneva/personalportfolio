import React from "react";

export default function Resume(props) {
    return (
        <>
            <div className="container my-3">
                <section class="hero is-warning is-small">
                    <div class="hero-body">
                        <div className="level">
                            <div class="level-item has-text-centered">
                                <div>
                                    <p className="heading is-size-5">Resume</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container my-5">
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child notification is-link">
                                    <p class="title">Work History</p>
                                    <p class="subtitle">Resume link...</p>
                                </article>
                                <article class="tile is-child notification is-warning">
                                    <p class="title">Extra Info</p>
                                    <p class="subtitle">List of work done previously</p>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-black">
                                    <p class="title">Examples?</p>
                                    <p class="subtitle">With an image</p>

                                </article>
                            </div>
                        </div>

                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-link">
                            <div class="content">
                                <p class="title">Skills</p>
                                <p class="subtitle">List of Skills</p>
                                <div class="content">

                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </>

    )

}