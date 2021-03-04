import img from './../img/articles/22.jpg'
function Home() {
    return (
        <>
            <div className="intro">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-4">
                            <a className="intro-block" href="post-image.html" style={{
                                backgroundImage: "url(" + "img/articles/5.jpg" + ")"
                            }}>
                                <div className="intro-block-inner">
                                    <time className="timeago" dateTime="2019-10-26 20:00">26 october 2019</time>
                                    <h2>Sing about love</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a className="intro-block active" href="post-image.html" style={{
                                backgroundImage: "url(" + "img/articles/5.jpg" + ")"
                            }}>
                                <div className="intro-block-inner">
                                    <time className="timeago" dateTime="2019-10-26 20:00">26 october 2019</time>
                                    <h2>Made of paper</h2>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a className="intro-block" href="post-image.html" style={{
                                backgroundImage: "url(" + "img/articles/22.jpg" + ")"
                            }}>
                                <div className="intro-block-inner">
                                    <time className="timeago" dateTime="2019-10-26 20:00">26 october 2019</time>
                                    <h2>The blind man</h2>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">

                <hr/>

                <div className="row">
                    <div className="col-md-9">

                        <div className="row">
                            <div className="col-md-6">

                                <article className="card mb-4">
                                    <header className="card-header">
                                        <div className="card-meta">
                                            <a href="#">
                                                <time className="timeago" dateTime="2019-10-26 20:00">26 october 2019
                                                </time>
                                            </a> in <a href="page-category.html">Journey</a>
                                        </div>
                                        <a href="post-image.html">
                                            <h4 className="card-title">How can we sing about love?</h4>
                                        </a>
                                    </header>
                                    <a href="post-image.html">
                                        <img className="card-img" src={img} alt=""/>
                                    </a>
                                    <div className="card-body">
                                        <p className="card-text">Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                            rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
                                            ipsum. </p>
                                    </div>
                                </article>

                                <article className="card mb-4">
                                    <header className="card-header">
                                        <div className="card-meta">
                                            <a href="#">
                                                <time className="timeago" dateTime="2019-10-03 20:00">3 october 2019
                                                </time>
                                            </a> in <a href="page-category.html">Lifestyle</a>
                                        </div>
                                        <a href="post-image.html">
                                            <h4 className="card-title">Oh, I guess they have the blues</h4>
                                        </a>
                                    </header>
                                    <a href="post-image.html">
                                        <img className="card-img" src="img/articles/18.jpg" alt=""/>
                                    </a>
                                    <div className="card-body">
                                        <p className="card-text">Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                            rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
                                            ipsum. </p>
                                    </div>
                                </article>

                                <article className="card mb-4">
                                    <header className="card-header">
                                        <div className="card-meta">
                                            <a href="#">
                                                <time className="timeago" dateTime="2019-07-16 20:00">16 july 2019
                                                </time>
                                            </a> in <a href="page-category.html">Work</a>
                                        </div>
                                        <a href="post-image.html">
                                            <h4 className="card-title">How can we, how can we sing about ourselves?</h4>
                                        </a>
                                    </header>
                                    <a href="post-image.html">
                                        <img className="card-img" src="img/articles/12.jpg" alt=""/>
                                    </a>
                                    <div className="card-body">
                                        <p className="card-text">Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                            rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
                                            ipsum. </p>
                                    </div>
                                </article>

                            </div>
                            <div className="col-md-6">

                                <article className="card mb-4">
                                    <header className="card-header">
                                        <div className="card-meta">
                                            <a href="#">
                                                <time className="timeago" dateTime="2019-10-15 20:00">15 october 2019
                                                </time>
                                            </a> in <a href="page-category.html">Lifestyle</a>
                                        </div>
                                        <a href="post-image.html">
                                            <h4 className="card-title">The king is made of paper</h4>
                                        </a>
                                    </header>
                                    <a href="post-image.html">
                                        <img className="card-img" src="img/articles/21.jpg" alt=""/>
                                    </a>
                                    <div className="card-body">
                                        <p className="card-text">Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                            rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
                                            ipsum. </p>
                                    </div>
                                </article>

                                <article className="card mb-4">
                                    <header className="card-header">
                                        <div className="card-meta">
                                            <a href="#">
                                                <time className="timeago" dateTime="2019-08-24 20:00">24 august 2019
                                                </time>
                                            </a> in <a href="page-category.html">Work</a>
                                        </div>
                                        <a href="post-image.html">
                                            <h4 className="card-title">Crying on the news</h4>
                                        </a>
                                    </header>
                                    <a href="post-image.html">
                                        <img className="card-img" src="img/articles/13.jpg" alt=""/>
                                    </a>
                                    <div className="card-body">
                                        <p className="card-text">Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                            rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
                                            ipsum. </p>
                                    </div>
                                </article>

                                <article className="card mb-4">
                                    <header className="card-header">
                                        <div className="card-meta">
                                            <a href="#">
                                                <time className="timeago" dateTime="2019-05-08 20:00">8 may 2019</time>
                                            </a> in <a href="page-category.html">Journey</a>
                                        </div>
                                        <a href="post-image.html">
                                            <h4 className="card-title">How can you not sing about love?</h4>
                                        </a>
                                    </header>
                                    <a href="post-image.html">
                                        <img className="card-img" src="img/articles/1.jpg" alt=""/>
                                    </a>
                                    <div className="card-body">
                                        <p className="card-text">Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                            rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
                                            ipsum. </p>
                                    </div>
                                </article>
                                

                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 ml-auto">

                        <aside className="sidebar">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4 className="card-title">About</h4>
                                    <p className="card-text">Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                        rhoncus, sem quam <a href="#">semper libero</a>, sit amet adipiscing sem neque
                                        sed ipsum. </p>
                                </div>
                            </div>
                            
                        </aside>

                        <aside className="sidebar sidebar-sticky">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4 className="card-title">Tags</h4>
                                    <a className="btn btn-light btn-sm mb-1" href="page-category.html">Journey</a>
                                    <a className="btn btn-light btn-sm mb-1" href="page-category.html">Work</a>
                                    <a className="btn btn-light btn-sm mb-1" href="page-category.html">Lifestype</a>
                                    <a className="btn btn-light btn-sm mb-1" href="page-category.html">Photography</a>
                                    <a className="btn btn-light btn-sm mb-1" href="page-category.html">Food & Drinks</a>
                                </div>
                            </div>
                            
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h4 className="card-title">Popular stories</h4>

                                    <a href="post-image.html" className="d-inline-block">
                                        <h4 className="h6">The blind man</h4>
                                        <img className="card-img" src="img/articles/2.jpg" alt=""/>
                                    </a>
                                    <time className="timeago" dateTime="2019-10-03 20:00">3 october 2019</time>
                                    in Lifestyle

                                    <a href="post-image.html" className="d-inline-block mt-3">
                                        <h4 className="h6">Crying on the news</h4>
                                        <img className="card-img" src="img/articles/3.jpg" alt=""/>
                                    </a>
                                    <time className="timeago" dateTime="2019-07-16 20:00">16 july 2019</time>
                                    in Work

                                </div>
                            </div>
                            
                        </aside>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
