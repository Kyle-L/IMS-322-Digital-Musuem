import BasePageTemplate from '../templates/BasePageTemplate';

function Sculptures() {
    return (
        <BasePageTemplate title={'About'}>
            <div className="row col"><h1 className='heading'>About</h1></div>
            <div className="row">
                <div className="col">
                    <p>Admittedly, this project has a few things going that might be surprisingly interesting. 
                        First and foremost, while the site might look like a multipage website, it is actually a 
                        Single Page Application; in other words, there is actually only one HTML page. This is because 
                        the site is built using React.js. React is a free and open-source front-end JavaScript library for 
                        building user interfaces based on UI components; this allows us to create easy dynamic SPA web 
                        applications. React is maintained by Meta and a community of individual developers and companies.
                    </p>
                </div>
            </div>
            <div className="row col"><h1 className='heading'>The Tech Stack</h1></div>
            <div className="row">
                <div className="col">
                    <p>The site makes use of all of the following tools.</p>
                    <ul>
                        <li><a href="https://reactjs.org/">React.js</a></li>
                        <li><a href="https://www.framer.com/motion/">Framer Motion</a></li>
                        <li><a href="https://reactrouter.com/">React Router</a></li>
                        <li><a href="https://github.com/pmndrs/react-three-fiber">React Three Fiber</a></li>
                    </ul>
                </div>
            </div>
        </BasePageTemplate>
    );
}

export default Sculptures;
