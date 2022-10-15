import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header
        className='select-none'
        herfFacebook='https://www.facebook.com/profile.php?id=100086806926973'
        herfGithub='https://github.com/Dragonsfu'
        HerfDash='#'
        Herfabout='/about'
        HerfService='/Team'
        herflogoLink={"/"}
        herflogo='/images/logo.png'
      />
      <Component {...pageProps} />
      <div id='wrap'>
        <div id='lightings'>
          <div id='one'>
            <div id='two'>
              <div id='three'>
                <div id='four'>
                  <div id='five'></div>
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
