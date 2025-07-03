import React from 'react';
import { 
  Home, Search, Calendar, MessageCircle, Settings, User, 
  Target, Phone, Clock, TrendingUp, MapPin, Heart
} from 'lucide-react';
import { Button, Card, Badge } from '../ui';
import { mockUser, mockProperties, mockStats } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const recentProperties = mockProperties.slice(0, 3);

  return (
    <div className="min-h-screen bg-surface-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-neutral-200 z-10">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Nexo</span>
          </div>

          <nav className="space-y-2">
            {[
              { icon: Home, label: 'Dashboard', active: true },
              { icon: Search, label: 'Recherches', count: 3 },
              { icon: Target, label: 'Mes Annonces', count: 12 },
              { icon: Calendar, label: 'Planning Visites', count: 2 },
              { icon: MessageCircle, label: 'Messages', count: 5 },
              { icon: Settings, label: 'Paramètres' },
              { icon: User, label: 'Profil' }
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                  item.active 
                    ? 'bg-primary-50 text-primary-700 border border-primary-200' 
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.count && (
                  <Badge variant="info" size="sm">
                    {item.count}
                  </Badge>
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
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              Bienvenue, {mockUser.name.split(' ')[0]} ! 👋
            </h1>
            <p className="text-neutral-600">
              Voici un aperçu de votre recherche d'appartement
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </Button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
              <span className="text-white font-medium">
                {mockUser.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-600 font-medium mb-1">Matchs trouvés</p>
                <p className="text-3xl font-bold text-primary-900">{mockStats.totalMatches}</p>
              </div>
              <Target className="w-8 h-8 text-primary-600" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 border-accent-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-accent-600 font-medium mb-1">Messages envoyés</p>
                <p className="text-3xl font-bold text-accent-900">{mockStats.messagesSent}</p>
              </div>
              <Phone className="w-8 h-8 text-accent-600" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 font-medium mb-1">Réponses reçues</p>
                <p className="text-3xl font-bold text-yellow-900">{mockStats.responses}</p>
              </div>
              <MessageCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 font-medium mb-1">Visites prévues</p>
                <p className="text-3xl font-bold text-purple-900">{mockStats.visitsScheduled}</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </Card>
        </div>

        {/* Recent Properties */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Properties List */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-neutral-900">
                🔥 Annonces récentes
              </h2>
              <Button variant="ghost" size="sm">
                Voir tout
              </Button>
            </div>

            <div className="space-y-4">
              {recentProperties.map((property) => (
                <Card key={property.id} className="p-6 hover:shadow-medium transition-all duration-200">
                  <div className="flex items-start space-x-4">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-neutral-900 text-lg">
                          {property.title}
                        </h3>
                        <Badge 
                          variant={property.matchScore >= 90 ? 'success' : 'info'}
                          size="sm"
                        >
                          {property.matchScore}% match
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-3">
                        <span className="font-medium text-primary-600">
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
                          {property.status === 'contacted' && (
                            <Badge variant="warning" size="sm">
                              <Clock className="w-3 h-3 mr-1" />
                              En attente
                            </Badge>
                          )}
                          {property.status === 'visited' && (
                            <Badge variant="success" size="sm">
                              Visité
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button size="sm">
                            Voir détails
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Activity & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Actions rapides
              </h3>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Search className="w-4 h-4 mr-3" />
                  Nouvelle recherche IA
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-3" />
                  Programmer une visite
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageCircle className="w-4 h-4 mr-3" />
                  Voir mes messages
                </Button>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Activité récente
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-neutral-900">
                      Message envoyé pour l'appartement République
                    </p>
                    <p className="text-xs text-neutral-500">Il y a 2 heures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-neutral-900">
                      Visite programmée pour demain 18h30
                    </p>
                    <p className="text-xs text-neutral-500">Il y a 4 heures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-neutral-900">
                      5 nouveaux matchs trouvés
                    </p>
                    <p className="text-xs text-neutral-500">Hier</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
