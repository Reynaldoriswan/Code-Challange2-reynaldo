const product = ()=> {
    return(
        <>
         <h1 className="font-semibold text-4xl text-center mt-10">Our Service </h1>

        <div className="service-container">
            <div className="service-img">
                <img src="image/family.jpg" />
                
            </div>
            <div className="service-img">
                <img src="image/dog.jpg" />
            </div>
            <div className="service-img">
                <img src="image/couple.jpg" />
            </div>
        </div>

        <p className="text-center mt-6">We take care your precious stuff in order to keep your
            life and your family harmony cause we believe each item
            have their own precious memory, we provide delivery services for 10$ anywhere
        </p>

        <div className="button-selection">
            <h1 className="font-semibold text-2xl mt-6 text-center">Contact Us</h1>
            <div className="btn-menu">
            <div className="btn-selextion">
                <div className="btn1">
                <p>Whatsapp</p>
                    <img className="wa" src="/image/wa.png" />
                </div>
            </div>
            <div className="btn-selextion">
                <div className="btn2">
                <p>Linkedin</p>
                    <img className="wa" src="/image/linkedin.png" />
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default product;