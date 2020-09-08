import React from 'react'

import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MDEyMjRkYzYt/MDEyMjRkYzYt-YWE2OTJhNzEt-w1500._CB406839139_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="123456789"
          title="20% off on TaoTronics Tower Fans"
          price={59.59}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/refurb-ipad-pro-12-wifi-spacegray-2019?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1581985543977"
        />

        <Product
          id="123456789"
          title="20% off on TaoTronics Tower Fans"
          price={59.59}
          rating={5}
          image="https://images.indulgexpress.com/uploads/user/imagelibrary/2020/5/29/original/Apple_HomePod_pic.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456789"
          title="20% off on TaoTronics Tower Fans"
          price={59.59}
          rating={5}
          image="https://cdn.pocket-lint.com/r/s/1200x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg"
        />

        <Product
          id="123456789"
          title="20% off on TaoTronics Tower Fans"
          price={59.59}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71fVpfx5oiL._AC_SX466_.jpg"
        />

        <Product
          id="123456789"
          title="20% off on TaoTronics Tower Fans"
          price={59.59}
          rating={5}
          image="https://cdn.vox-cdn.com/thumbor/PxLHGWWJgtCbxcwPflQL2Fel3PE=/0x0:1200x675/1200x800/filters:focal(504x242:696x434)/cdn.vox-cdn.com/uploads/chorus_image/image/64988188/download.5.jpeg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456789"
          title="20% off on TaoTronics Tower Fans"
          price={59.59}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/915stddOkUL._AC_SX355_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123456789"
          title="20% off on TaoTronics Tower Fans"
          price={59.59}
          rating={5}
          image="https://images.mobilefun.co.uk/graphics/450pixelp/70801.jpg"
        />

        <Product
          id="123456789"
          title="AmazonBasics Mini DisplayPort Thunderbolt to HDMI Adapter"
          price={59.59}
          rating={5}
          image="https://target.scene7.com/is/image/Target/GUEST_1387380c-9ff0-48e7-82aa-03fa1a52eb9b?wid=488&hei=488&fmt=pjpeg"
        />

        <Product
          id="123456789"
          title="20% off on TaoTronics Tower Fans"
          price={59.59}
          rating={5}
          image="https://6b4a7f08f82ba7876008-57c1dad84f512a669a65443da3ec026c.ssl.cf3.rackcdn.com/dreamworks-shrek-soft-toy-un1803186-front.jpg"
        />

        <Product
          id="123456789"
          title="20% off on TaoTronics Tower Fans"
          price={59.59}
          rating={5}
          image="https://images.jdmagicbox.com/quickquotes/images_main/butterfly_spectra_3_jar_mixer_grinder_ruby_red_24600210_0.jpg"
        />
      </div>
    </div>
  )
}

export default Home
