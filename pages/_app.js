import "../styles/globals.css";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div id="wrap">
 <div id="lightings">
     <div id="one">
           <div id="two">
               <div id="three">
                   <div id="four">
                       <div id="five">
                           
                       </div>
                   </div>
               </div>
           </div>
   </div>
   </div>
</div>
      <Footer />
    </>
  );
}

export default MyApp;
