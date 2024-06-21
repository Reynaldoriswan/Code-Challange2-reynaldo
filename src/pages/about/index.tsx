const aboutPage = () => {
    return(
        <>
        <div className="about-container">
            <div className="main-section">
                <img src="/image/moving-van.jpg" style={{width:"70vh", marginLeft:"20px"}} />
            </div>
            <div className="main-text">
                <h1 className="font-semibold text-3lg">About Us</h1>
                <p>
                    we are the professional that give goods moving service since 2023,
                    if you need us to take your stuff to a new place feel free to contact us.
                    No need to worries,we are professional we handle your stuff very carefully.
                </p>
            </div>

            <div className="team-container">
                <div className="team-1">
                    <img src="/image/Team1.jpg" />
                 <div className="team-info">
                    <h1 className="font-semibold text-3lg text-center">Ali</h1>
                    <p className="text-center">Hello everyone my is Ali, im working 
                    as company administration at Move with Joy
                    </p>
                 </div>
                </div>

                <div className="team-1">
                    <img src="/image/Team2.jpg" />
                 <div className="team-info">
                    <h1 className="font-semibold text-3lg text-center">Jeff</h1>
                    <p className="text-center">Hello everyone my is Jeff, im working 
                        as company Customer Relation at Move with Joy
                    </p>
                 </div>
                </div>

                <div className="team-1">
                    <img src="/image/Team3.jpg" />
                 <div className="team-info">
                    <h1 className="font-semibold text-3lg text-center">Andrew</h1>
                    <p className="text-center">Hello everyone my is Andrew, im working 
                        as company Logistic Cordinator at Move with Joy
                    </p>
                 </div>
                </div>
            </div>
        </div>

        <p className="font-semibold mt-6 text-center">We are the team,in our team we treat each other like a family,
            for we believe a good environment really helpfull in work situation <br/>
            
        </p>
        </>
    )
}

export default aboutPage;