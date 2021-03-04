function Contact() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">

                        <article className="card mb-4">
                            <header className="card-header text-center">
                                <h1 className="card-title">Get in touch</h1>
                            </header>
                            <div className="card-body">

                                <p><strong>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                    viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                                    ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                                    rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
                                    sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
                                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</strong>
                                </p>

                                <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                    vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                                    justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                                    Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
                                    porttitor eu, consequat vitae, eleifend ac, enim.</p>

                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">Company</label>
                                        <input type="text" className="form-control" id="company" placeholder="Company"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email"
                                               placeholder="Email address"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="question">Message</label>
                                        <textarea className="form-control" id="message" rows="4"
                                                  placeholder="Message"></textarea>
                                    </div>

                                    <button type="button" className="btn btn-success">Send</button>
                                </form>

                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
