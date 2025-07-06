import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ServiceHub
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Marketplace de Serviços - Conectando prestadores e clientes
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Bem-vindo ao ServiceHub
            </h2>
            <p className="text-gray-600 mb-6">
              Plataforma brasileira que conecta prestadores de serviços com clientes 
              em busca de diversos tipos de serviços, desde limpeza doméstica até 
              reparos técnicos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🔍</div>
                <h3 className="font-semibold text-gray-800">Encontre Serviços</h3>
                <p className="text-sm text-gray-600">Descubra prestadores qualificados na sua região</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold text-gray-800">Comunicação</h3>
                <p className="text-sm text-gray-600">Chat em tempo real com prestadores</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">⭐</div>
                <h3 className="font-semibold text-gray-800">Avaliações</h3>
                <p className="text-sm text-gray-600">Sistema de reviews e feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;