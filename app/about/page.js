export default function AboutScooper() {

  return (

    <div className="min-h-screen bg-pink-50 text-gray-800">

      {/* Header with Navigation */}

      <header className="bg-white shadow-md">

        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">

          <a href="/" className="text-3xl font-bold text-pink-700">

            The Baby Scoop Bar

          </a>

          <nav className="flex gap-6">

            <a href="/" className="text-lg text-gray-700 hover:text-pink-700 transition">

              Home

            </a>

            <a href="/about" className="text-lg text-pink-700 font-semibold">

              About the Scooper

            </a>

          </nav>

        </div>

      </header>

      {/* About Section */}

      <section className="py-16 px-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold text-pink-700 mb-12 text-center">

            💖 About the Scooper

          </h1>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Photo */}

            <div className="flex justify-center">

              <img

                src="/scooper.jpg"

                alt="Melissa - The Scooper"

                className="w-full max-w-sm rounded-3xl shadow-xl border-4 border-pink-200"

              />

            </div>

            {/* Bio */}

            <div className="bg-white rounded-3xl shadow-xl p-10 border border-pink-200">

              <p className="text-lg leading-relaxed mb-6">

                Hi and welcome to The Baby Scoop Bar ✨

              </p>

              <p className="text-lg leading-relaxed mb-6">

                I started this little business because I've always loved finding cute baby items and creating fun experiences that bring joy to parents and little ones. As a mom of four, I know how exciting — and sometimes overwhelming — it can be trying to find products your baby will actually love. I wanted to create something that felt fun, affordable, personal, and exciting all at the same time.

              </p>

              <p className="text-lg leading-relaxed mb-6">

                The Baby Scoop Bar was created to be more than just shopping — I wanted every order to feel like opening a sweet surprise package made with love 💕

              </p>

              <p className="text-lg leading-relaxed mb-6">

                From mystery scoops filled with adorable baby goodies to our feeding and bottle boxes, every item is carefully chosen with quality, value, and real parents in mind. I truly put so much care into every scoop, package, and live sale because I want customers to feel appreciated and excited every single time they order.

              </p>

              <p className="text-lg leading-relaxed font-semibold text-pink-700">

                Thank you so much for supporting my small business and being part of this journey. It truly means the world to me and my family 💖✨

              </p>

              <p className="text-xl leading-relaxed font-bold text-pink-700 mt-8">

                -Melissa

              </p>

            </div>

          </div>

          <div className="text-center mt-12">

            <a href="/" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition inline-block">

              Back to Home

            </a>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-pink-700 text-white py-8 text-center px-6 mt-16">

        <h3 className="text-2xl font-bold mb-2">The Baby Scoop Bar</h3>

        <p className="mb-2">Tiny treasures in every scoop ✨</p>

        <p className="text-sm opacity-80">

          © 2026 The Baby Scoop Bar. All rights reserved.

        </p>

      </footer>

    </div>

  )

}
