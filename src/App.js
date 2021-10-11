import './App.css'
import PreNavbar from './Components/PreNavbar'
import Navbar from './Components/Navbar.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Slider from './Components/Slider.js'
import Data from './Data/data.json'
import Offers from './Components/Offers.js'
import Heading from './Components/Heading.js'
import StarProduct from './Components/StarProduct.js'
import HotAccessoriesMenu from './Components/HotAccessoriesMenu.js'
import HotAccessories from './Components/HotAccessories.js'
import ProductReviews from './Components/ProductReviews.js'
import Videos from './Components/Videos.js'
import Banner from './Components/Banner.js'
import Footer from './Components/Footer.js'
import NavOptions from './Components/NavOptions.js'

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
        miPhones={Data.miPhones}
        redmiPhones={Data.redmiPhones}
        tv={Data.tv}
        laptop={Data.laptop}
        fitnessAndLifeStyle={Data.fitnessAndLifeStyle}
        home={Data.home}
        audio={Data.audio}
        accessories={Data.accessories}
      /> 
      <Slider start={Data.banner.start} />
      <Offers offer={Data.offer} />
      <Heading text='STAR PRODUCTS' />
      <StarProduct starProduct={Data.starProduct} />
      <Heading text='HOT ACCESSORIES' />
      <HotAccessoriesMenu />
      <Route exact path='/music'>
        <HotAccessories
          music={Data.hotAccessories.music}
          musicCover={Data.hotAccessoriesCover.music}
        />
      </Route>
      <Route exact path='/smartDevice'>
        <HotAccessories
          smartDevice={Data.hotAccessories.smartDevice}
          smartDeviceCover={Data.hotAccessoriesCover.smartDevice}
        />
      </Route>
      <Route exact path='/home'>
        <HotAccessories
          home={Data.hotAccessories.home}
          homeCover={Data.hotAccessoriesCover.home}
        />
      </Route>
      <Route exact path='/lifeStyle'>
        <HotAccessories
          lifeStyle={Data.hotAccessories.lifeStyle}
          lifeStyleCover={Data.hotAccessoriesCover.lifeStyle}
        />
      </Route>
      <Route exact path='/mobileAccessories'>
        <HotAccessories
          mobileAccessories={Data.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={Data.hotAccessoriesCover.mobileAccessories}
        />
      </Route>
      <Heading text='PRODUCT REVIEWS' />
      <ProductReviews productReviews={Data.productReviews} />
      <Heading text='VIDEOS' />
      <Videos videos={Data.videos} />
      <Heading text='IN THE PRESS' />
      <Banner banner={Data.banner} />
      <Footer footer={Data.footer} />
    </Router>
  )
}

export default App
