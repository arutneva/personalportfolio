import React from "react";

export default function Contact(props) {
    return (
        <>

            <div className="container">
                <section className="hero is-link is-small">
                    <div className="hero-body">
                        <div className="level">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading is-size-5">Contact</p>
                                    <p className="subtitle is-size-6">marilynventura@outlook.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div className="container">
                <div className="notification is-link is-light">
                    <div className="field my-3">
                        <label className="label">Name</label>
                        <div className="control">
                            <input class="input" type="text" placeholder="Enter name here" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input class="input" type="email" placeholder="Enter email here" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea class="textarea" placeholder="Enter message here"></textarea>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button class="button is-fullwidth is-link">Submit</button>
                        </div>

                    </div>
                </div>

            </div>


        </>

    )

}