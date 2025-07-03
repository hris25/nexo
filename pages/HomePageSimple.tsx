import React, { useState } from 'react';
import { Search, Sparkles, MessageCircle, Calendar, ArrowRight, Home } from 'lucide-react';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/20">
      {/* Header Navigation */}
      <header className="relative z-10 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Nexo
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Fonctionnalités
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              Comment ça marche
            </a>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              Connexion
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">IA + Immobilier = Révolution</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Trouvez votre
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              appart parfait
            </span>
            <span className="block text-4xl md:text-5xl font-normal text-gray-600">
              en 2 clics
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            L'IA cherche, contacte et organise vos visites automatiquement. 
            Vous n'avez qu'à choisir votre futur chez-vous.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="p-2 bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Décrivez votre appartement idéal..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-lg border-0 bg-transparent focus:outline-none px-4 py-3"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Chercher avec l'IA
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center">
              Commencer maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 text-gray-600 hover:text-gray-900 transition-colors">
              Voir la démo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trois fonctionnalités, zéro stress
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fini les heures passées à chercher et contacter. L'IA fait tout pour vous.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Recherche Automatique
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Décrivez vos critères en langage naturel. L'IA analyse et trouve les meilleures annonces pour vous.
              </p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Automatique
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Messages personnalisés envoyés instantanément aux propriétaires. Plus besoin de copier-coller.
              </p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Planning Intelligent
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Visites organisées selon vos disponibilités. Optimisation automatique des trajets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Comment ça marche ?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Définissez', desc: 'vos critères' },
              { step: '2', title: 'L\'IA cherche', desc: 'pour vous' },
              { step: '3', title: 'Contacts', desc: 'automatiques' },
              { step: '4', title: 'Visites', desc: 'organisées' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-4 w-6 h-6 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-white/90 backdrop-blur-sm rounded-2xl">
            <blockquote className="text-2xl font-medium text-gray-900 mb-6">
              "J'ai trouvé mon appartement en 3 jours ! Incroyable."
            </blockquote>
            <cite className="text-gray-600">
              — Sarah, 24 ans, Paris 11ème
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à révolutionner votre recherche ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez les centaines de personnes qui ont déjà trouvé leur bonheur.
          </p>
          <button className="px-12 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center mx-auto">
            Commencer gratuitement
            <ArrowRight className="w-6 h-6 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
