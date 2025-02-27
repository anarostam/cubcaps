import React from "react";
import "./App.css";

const HomePage = () => {
   
    return(
        <div className = "homepage">

                <h1 className = "logo">CUPCAPS</h1>
            
             <main className = "grid-container">
                <div className = "left-column">
               <div className = "calendar-card">
                <div className = "icon">
                🗓️
                </div>
                <div className = "title">
                Event Calendar
                </div>
                <span className = "arrow-right">➔</span>
               </div>
               </div>
               <div className = "right-column">
               <div className = "card">
               <span className = "arrow-right">➔</span>
                <div className = "icon">
                🔩
                </div>
                <div className = "title">
            Physics Journal
            </div>
            
               </div>
               <div className = "card">
               <span className = "arrow-right">➔</span>
                <div className = "icon">
                🖥️
                </div>
                <div className = "title">
                Resources
                </div>
               </div>
               <div className = "card">
               <span className = "arrow-right">➔</span>
                <div className = "icon">
                🚀
                </div>
                <div className = "title">
                Get involved
                </div>
               </div>
               <div className = "card">
               <span className = "arrow-right">➔</span>
                <div className = "icon">
                🎮
                </div>
                <div className = "title">
                    I want to play a game
                </div>
               </div>
               <div className = "card">
               <span className = "arrow-right">➔</span>
                <div className = "icon">
                ℹ️
                </div>
                <div className = "title">
                    About Us
                </div>
               </div>
               <div className = "card">
               <span className = "arrow-right">➔</span>
                <div className = "icon">
                📂
                </div>
                <div className = "title">
                    Archive
                </div>
               </div>
               </div>
            </main>
        </div>
    )
}
export default HomePage;