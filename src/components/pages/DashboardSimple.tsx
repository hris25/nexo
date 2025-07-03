import {
  Calendar,
  Clock,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Settings,
  Target,
  User,
} from "lucide-react";
import React from "react";
import { mockProperties, mockStats, mockUser } from "../../data/mockData";

const Dashboard: React.FC = () => {
  const recentProperties = mockProperties.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-10">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Nexo
            </span>
          </div>

          <nav className="space-y-2">
            {[
              { icon: Home, label: "Dashboard", active: true },
              { icon: Search, label: "Recherches", count: 3 },
              { icon: Target, label: "Mes Annonces", count: 12 },
              { icon: Calendar, label: "Planning Visites", count: 2 },
              { icon: MessageCircle, label: "Messages", count: 5 },
              { icon: Settings, label: "Paramètres" },
              { icon: User, label: "Profil" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                  item.active
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.count && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {item.count}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Bienvenue, {mockUser.name.split(" ")[0]} ! 👋
            </h1>
            <p className="text-gray-600">
              Voici un aperçu de votre recherche d'appartement
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => (window.location.hash = "")}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex items-center"
            >
              ← Retour accueil
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
              <span className="text-white font-medium">
                {mockUser.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 font-medium mb-1">Matchs trouvés</p>
                <p className="text-3xl font-bold text-blue-900">
                  {mockStats.totalMatches}
                </p>
              </div>
              <Target className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 font-medium mb-1">
                  Messages envoyés
                </p>
                <p className="text-3xl font-bold text-green-900">
                  {mockStats.messagesSent}
                </p>
              </div>
              <Phone className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 font-medium mb-1">
                  Réponses reçues
                </p>
                <p className="text-3xl font-bold text-yellow-900">
                  {mockStats.responses}
                </p>
              </div>
              <MessageCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 font-medium mb-1">
                  Visites prévues
                </p>
                <p className="text-3xl font-bold text-purple-900">
                  {mockStats.visitsScheduled}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Recent Properties */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Properties List */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                🔥 Annonces récentes
              </h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Voir tout
              </button>
            </div>

            <div className="space-y-4">
              {recentProperties.map((property) => (
                <div
                  key={property.id}
                  className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {property.title}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            property.matchScore >= 90
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {property.matchScore}% match
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="font-medium text-blue-600">
                          {property.price}€/mois
                        </span>
                        <span>{property.surface}m²</span>
                        <span className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {property.location}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {property.status === "contacted" && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              En attente
                            </span>
                          )}
                          {property.status === "visited" && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              Visité
                            </span>
                          )}
                        </div>

                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                            Voir détails
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Actions rapides
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-start px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <Search className="w-4 h-4 mr-3" />
                  Nouvelle recherche IA
                </button>
                <button className="w-full flex items-center justify-start px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <Calendar className="w-4 h-4 mr-3" />
                  Programmer une visite
                </button>
                <button className="w-full flex items-center justify-start px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <MessageCircle className="w-4 h-4 mr-3" />
                  Voir mes messages
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Activité récente
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">
                      Message envoyé pour l'appartement République
                    </p>
                    <p className="text-xs text-gray-500">Il y a 2 heures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">
                      Visite programmée pour demain 18h30
                    </p>
                    <p className="text-xs text-gray-500">Il y a 4 heures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">
                      5 nouveaux matchs trouvés
                    </p>
                    <p className="text-xs text-gray-500">Hier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
