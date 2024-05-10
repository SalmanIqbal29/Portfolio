import Home from "./Home";

export const Section = () => {
    
    return (
        <>
         <section
          className={`home ${activeSection === "home" ? "active" : ""}`}
          id="home"
        >
          {activeSection === "home" && (
            <div className="container">
             <Home />
            </div>
          )}
        </section>
        </>
        
    )
}
