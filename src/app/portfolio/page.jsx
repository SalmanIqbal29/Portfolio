"use client"


const Portfolio = () => {

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2> PortFolio </h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2> My Last Projects : </h2>
          </div>
        </div>
        <div className="row">
          {/* ===== Portfolio Item Start ===== */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
            
                <img src="assets/images/Ecommerce.png" alt="" />
              </div>
            </div>
          </div>
          {/* ===== Portfolio Item End ===== */}
          {/* ===== Portfolio Item Start ===== */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
              <img src="assets/images/Food Ordering.png" alt="" />
              </div>
            </div>
          </div>
          {/* ===== Portfolio Item End ===== */}
          {/* ===== Portfolio Item Start ===== */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
              <img src="assets/images/ChatApp.png" alt="" />
              </div>
            </div>
          </div>
          {/* ===== Portfolio Item End ===== */}
          {/* ===== Portfolio Item Start ===== */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
              <img src="assets/images/Colorful Modern Social Media.png" alt="" />
              </div>
            </div>
          </div>
          {/* ===== Portfolio Item End ===== */}
          {/* ===== Portfolio Item Start ===== */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src="Images/Projects/5.jpg" alt="" />
              </div>
            </div>
          </div>
          {/* ===== Portfolio Item End ===== */}
          {/* ===== Portfolio Item Start ===== */}
          <div className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src="Images/Projects/6.jpg" alt="" />
              </div>
            </div>
          </div>
          {/* ===== Portfolio Item End ===== */}
        </div>
      </div>
    </section>
  )

}

export default Portfolio;