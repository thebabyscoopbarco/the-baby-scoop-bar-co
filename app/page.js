export default function BabyScoopBarWebsite() {

  return (

    <div className="min-h-screen bg-pink-50 text-gray-800">

      {/* Header with Navigation */}

      <header className="bg-white shadow-md">

        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">

          <a href="/" className="text-3xl font-bold text-pink-700">

            The Baby Scoop Bar

          </a>

          <nav className="flex gap-6">

            <a href="/" className="text-lg text-pink-700 font-semibold">

              Home

            </a>

            <a href="/about" className="text-lg text-gray-700 hover:text-pink-700 transition">

              About the Scooper

            </a>

          </nav>

        </div>

      </header>

      {/* Hero */}

      <section className="bg-gradient-to-b from-pink-200 to-pink-50 py-16 px-6 text-center">

        <div className="max-w-5xl mx-auto">

          <div className="flex justify-center mb-6">

            <img

              src="/logo.png"

              alt="The Baby Scoop Bar Logo"

              className="w-52 h-52 rounded-full shadow-2xl border-4 border-white"

            />

          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pink-700">

            The Baby Scoop Bar

          </h1>

          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-700 mb-8">

            Adorable baby mystery scoops packed with surprises, essentials, and boutique-style goodies 💖

          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a href="https://the-baby-scoop-bar.myshopify.com/collections/shop-scoops" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition block">

              Shop Scoops

            </a>

            <a href="https://www.tiktok.com/@thebabyscoopbarco" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-pink-100 text-pink-700 border border-pink-300 px-8 py-4 rounded-2xl text-lg shadow transition block">

              Watch Packaging Videos

            </a>

          </div>

        </div>

      </section>

      {/* About */}

      <section className="py-16 px-6">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-4xl font-bold text-pink-700 mb-4">

              Every Scoop is a Sweet Surprise ✨

            </h2>

            <p className="text-lg leading-relaxed mb-4">

              At The Baby Scoop Bar, every mystery scoop is filled with carefully chosen baby goodies including bows, bibs, teethers, socks, toys, and more.

            </p>

            <p className="text-lg leading-relaxed">

              Whether you're shopping for your little one or the perfect baby shower gift, our scoops are designed to be fun, affordable, and exciting.

            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-pink-100">

            <h3 className="text-2xl font-semibold mb-6 text-pink-600">

              Why Customers Love Us 💕

            </h3>

            <ul className="space-y-4 text-lg">

              <li>🎀 Boutique-style baby accessories</li>

              <li>🍼 Surprise mystery experience</li>

              <li>💖 Great value in every scoop</li>

              <li>📦 Fast shipping & cute packaging</li>

              <li>🎥 Packaging videos on TikTok</li>

            </ul>

          </div>

        </div>

      </section>

      {/* Pricing - Scoops & BBB */}

      <section className="py-16 px-6 bg-white">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-pink-700 mb-12">

            Choose Your Products 🎁

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

            {/* Classic Scoop */}

            <div className="bg-pink-50 rounded-3xl shadow-lg p-8 border border-pink-200 hover:scale-105 transition">

              <h3 className="text-3xl font-bold text-pink-600 mb-4">

                Classic Scoop

              </h3>

              <div className="text-5xl font-bold mb-4">$50</div>

              <p className="text-lg mb-6">

                5-7 adorable baby surprise items

              </p>

              <ul className="space-y-3 text-left mb-8">

                <li>💖 Bows & accessories</li>

                <li>💖 Teethers & toys</li>

                <li>💖 Socks, bibs & essentials</li>

              </ul>

              <a href="https://the-baby-scoop-bar.myshopify.com/collections/shop-scoops" target="_blank" rel="noopener noreferrer" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-2xl text-lg shadow-lg transition block text-center">

                Order Now

              </a>

            </div>

            {/* Deluxe Scoop */}

            <div className="bg-gradient-to-b from-pink-200 to-pink-50 rounded-3xl shadow-xl p-8 border-2 border-pink-400 hover:scale-105 transition relative">

              <div className="absolute top-4 right-4 bg-pink-600 text-white px-4 py-1 rounded-full text-sm shadow">

                Best Seller

              </div>

              <h3 className="text-3xl font-bold text-pink-700 mb-4">

                Deluxe Scoop

              </h3>

              <div className="text-5xl font-bold mb-4">$95</div>

              <p className="text-lg mb-6">

                10-15 premium baby surprise items

              </p>

              <ul className="space-y-3 text-left mb-8">

                <li>💖 Boutique-style accessories</li>

                <li>💖 Mystery item</li>

                <li>💖 Bigger surprises & more variety</li>

              </ul>

              <a href="https://the-baby-scoop-bar.myshopify.com/collections/shop-scoops" target="_blank" rel="noopener noreferrer" className="w-full bg-pink-700 hover:bg-pink-800 text-white py-4 rounded-2xl text-lg shadow-lg transition block text-center">

                Grab a Deluxe Scoop

              </a>

            </div>

            {/* Baby Bottle Box */}

            <div className="bg-blue-50 rounded-3xl shadow-lg p-8 border border-blue-200 hover:scale-105 transition">

              <h3 className="text-3xl font-bold text-blue-600 mb-4">

                Baby Bottle Box (BBB) 🍼

              </h3>

              <div className="text-5xl font-bold mb-4">$45</div>

              <p className="text-lg mb-6">

                Find your baby's perfect bottle!

              </p>

              <ul className="space-y-3 text-left mb-8 text-sm">

                <li>💖 Multiple bottles to try</li>

                <li>💖 Thoughtfully curated variety</li>

                <li>💖 Perfect for new parents</li>

                <li>💖 Stress-free feeding support</li>

              </ul>

              <a href="https://the-baby-scoop-bar.myshopify.com/collections/shop-scoops" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg shadow-lg transition block text-center">

                Get Your BBB

              </a>

            </div>

            {/* Mystery Gift Add-On */}

            <div className="bg-purple-50 rounded-3xl shadow-lg p-8 border border-purple-200 hover:scale-105 transition">

              <h3 className="text-3xl font-bold text-purple-600 mb-4">

                Mystery Gift Add-On ✨

              </h3>

              <div className="text-5xl font-bold mb-4">$10</div>

              <p className="text-lg mb-6">

                Hand-selected surprise treasure

              </p>

              <ul className="space-y-3 text-left mb-8 text-sm">

                <li>🎁 Baby accessory or toy</li>

                <li>🍼 Feeding item</li>

                <li>📖 Book or keepsake</li>

                <li>💜 Special baby treasure</li>

              </ul>

              <a href="https://the-baby-scoop-bar.myshopify.com/collections/shop-scoops" target="_blank" rel="noopener noreferrer" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl text-lg shadow-lg transition block text-center">

                Add Extra Love

              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Social */}

      <section className="py-16 px-6 bg-pink-100">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-pink-700 mb-12">

            Follow Us 🎥

          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

            <a href="https://www.tiktok.com/@thebabyscoopbarco" target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl shadow-lg p-8 inline-block border border-pink-200 hover:shadow-xl transition">

              <p className="text-2xl font-bold text-pink-600 mb-2">

                @thebabyscoopbarco

              </p>

              <p className="text-lg text-gray-600">

                Follow us on TikTok for packaging videos, giveaways, and surprise drops 💖

              </p>

            </a>

            <a href="https://www.facebook.com/profile.php?id=61590614615568" target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl shadow-lg p-8 inline-block border border-blue-200 hover:shadow-xl transition">

              <p className="text-2xl font-bold text-blue-600 mb-2">

                The Baby Scoop Bar

              </p>

              <p className="text-lg text-gray-600">

                Follow us on Facebook for updates, special offers, and community love 💕

              </p>

            </a>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="py-16 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-pink-700 mb-8">

            Get In Touch 💌

          </h2>

          <p className="text-xl text-gray-700 mb-8">

            Have questions? We'd love to hear from you!

          </p>

          <a href="mailto:babyscoopbarco@gmail.com" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition inline-block">

            Contact Us

          </a>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-pink-700 text-white py-8 text-center px-6">

        <h3 className="text-2xl font-bold mb-2">The Baby Scoop Bar</h3>

        <p className="mb-2">Tiny treasures in every scoop ✨</p>

        <p className="text-sm opacity-80">

          © 2026 The Baby Scoop Bar. All rights reserved.

        </p>

      </footer>

    </div>

  )

}
