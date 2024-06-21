export default function Home() {
  return (
    <>
    <div className="title">
      <h1 className="font-semibold text-4xl mt-4 mb-2">Move with joy</h1>
    </div>
    <div className="container-hero">
    <div className="hero-section">
      <p>
      Welcome to our website, where we are on a mission to provide exceptional moving services to customers in the <span style={{fontWeight:"bold"}}>JAKARTA. </span>  
      As a startup, we believe that moving doesn't have to be stressful or complicated, and we are passionate about making the process 
      as seamless and enjoyable as possible.
      </p>
      <div className="moving mt-5">
        <img className="moving-pic" src="/image/moving-van.jpg" />
      </div>
    </div>
    </div>

    <div className="our-service">
      <h1>Our Service</h1>
    </div>
    

    <div className="container-service">
      <div className="profesional ml-5">
        <img className="pl-3 pt-2 mb-2" src="/image/Professional-logo.png" />
        <h1 className="font-semibold text-3xl ml-1 mb-2">Profesional</h1>
        <p className="p-2">
        Our team of professional movers are trained to prioritize efficiency, organization, and attention to detail. 
        We understand that your possessions are more than just objects  they are a reflection of your life, memories, and 
        experiences. That's why we take extra care to ensure that everything is packed and transported with the utmost care and 
        attention.
        </p>
      </div>

      <div className="profesional ml-5">
        <img className="pl-3 pt-2 mb-2" src="/image/country.png" />
        <h1 className="font-semibold text-3xl ml-1 mb-2">Country Wide</h1>
        <p className="p-2">
        We offer a range of services to suit your individual needs, whether you're moving locally or across the country. Our team can handle everything from packing and loading to unloading and unpacking, so you can focus on settling into your new home. And with our transparent pricing and no hidden fees, you can trust that you're getting 
        a fair and competitive rate for our services.
        </p>
      </div>

      <div className="profesional ml-5">
        <img className="pl-3 pt-2 mb-2" src="/image/care.png" />
        <h1 className="font-semibold text-3xl ml-1 mb-2">Personal Touch</h1>
        <p className="p-2">
        At our core, we believe that moving should be an exciting and positive experience, not a stressful one. By providing exceptional moving services in the US, we hope to revolutionize the way people think about moving and provide a better, more personalized experience for our customers. Contact us today to 
        learn more about how we can help you with your next move.
        </p>
      </div>
    </div>

   

    <div className="testimonial-container">
      <div className="testi-card">
        <div className="card-top">
          <img src="/image/profile1.jpg" />
        </div>
        <div className="card-bottom">
          <h1 className="font-semibold text-center">Jenifer</h1>
          <p>
            I have to move from my old apartment to my new house,alot of stuff
            that i need to bring with me some of them are really important and fraggile
            but the service team did awesome job taking care of my stuff thankyou.
          </p>
        </div>
      </div>

  

      <div className="testi-card">
        <div className="card-top">
          <img src="/image/profile2.jpg" />
        </div>
        <div className="card-bottom">
          <h1 className="font-semibold text-center">Justin</h1>
          <p>
            I have to move from my old apartment to my new house,alot of stuff
            that i need to bring with me some of them are really important and fraggile
            but the service team did awesome job taking care of my stuff thankyou.
          </p>
        </div>
      </div>

      <div className="testi-card">
        <div className="card-top">
          <img src="/image/profile4.jpg" />
        </div>
        <div className="card-bottom">
          <h1 className="font-semibold text-center">Lucia</h1>
          <p>
            I have to move from my old apartment to my new house,alot of stuff
            that i need to bring with me some of them are really important and fraggile
            but the service team did awesome job taking care of my stuff thankyou.
          </p>
        </div>
      </div>
    </div>
    
    </>
  );
}
