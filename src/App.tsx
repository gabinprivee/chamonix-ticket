/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Bot, Settings, Terminal, BarChart2, Ticket, CheckCircle2, User, Shield, FileText } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('tickets');

  return (
    <div className="flex h-screen w-full bg-[#F8F9FA] text-[#1A1A1A] font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              B
            </div>
            <span className="font-semibold tracking-tight text-lg">BotManager</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <div className="text-[11px] uppercase tracking-widest text-gray-400 font-bold px-3 mb-2 mt-2">
            Général
          </div>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-md transition-colors">
            <Settings className="w-4 h-4" />
            Configuration
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-md transition-colors">
            <Terminal className="w-4 h-4" />
            Commandes
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-md transition-colors">
            <BarChart2 className="w-4 h-4" />
            Statistiques
          </a>

          <div className="mt-8 text-[11px] uppercase tracking-widest text-gray-400 font-bold px-3 mb-2">
            Modules
          </div>
          <button 
            onClick={() => setActiveTab('tickets')}
            className={`flex w-full items-center justify-between px-3 py-2 rounded-md font-medium transition-colors ${activeTab === 'tickets' ? 'bg-gray-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <span className="flex items-center gap-3">
              <Ticket className={`w-4 h-4 ${activeTab === 'tickets' ? 'text-indigo-600' : 'text-gray-500'}`} />
              Système Tickets
            </span>
            <span className="text-[10px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded border border-green-200 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              ACTIF
            </span>
          </button>

          <div className="mt-8 text-[11px] uppercase tracking-widest text-gray-400 font-bold px-3 mb-2">
            Informations
          </div>
          <button 
            onClick={() => setActiveTab('privacy')}
            className={`flex w-full items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${activeTab === 'privacy' ? 'bg-gray-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <Shield className={`w-4 h-4 ${activeTab === 'privacy' ? 'text-indigo-600' : 'text-gray-500'}`} />
            Confidentialité
          </button>
          <button 
            onClick={() => setActiveTab('terms')}
            className={`flex w-full items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${activeTab === 'terms' ? 'bg-gray-50 text-indigo-600' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <FileText className={`w-4 h-4 ${activeTab === 'terms' ? 'text-indigo-600' : 'text-gray-500'}`} />
            Conditions
          </button>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold truncate">Admin#0001</p>
              <p className="text-[10px] text-green-500 truncate flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                En ligne
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {activeTab === 'tickets' && (
          <>
            <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between shrink-0">
              <h1 className="text-xl font-bold text-gray-800">Mise à jour du Module Tickets</h1>
              <div className="flex gap-3">
                <button className="px-4 py-1.5 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Annuler
                </button>
                <button className="px-4 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm shadow-indigo-100 hover:bg-indigo-700 transition-colors">
                  Sauvegarder
                </button>
              </div>
            </header>

            <div className="p-8 flex-1 overflow-y-auto space-y-6">
              <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Nouvelle Fonctionnalité : Réponse Automatique</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-3xl">
                  Ce code s'exécute immédiatement après la création d'un salon de ticket. Il cible uniquement les nouveaux salons créés pour envoyer un message d'accueil personnalisé, sans perturber votre système existant.
                </p>
                
                <div className="bg-gray-900 rounded-lg p-5 font-mono text-[13px] leading-relaxed relative overflow-x-auto">
                  <div className="absolute top-3 right-3 text-[10px] text-gray-500 font-bold tracking-widest select-none">
                    JAVASCRIPT
                  </div>
                  <div className="text-gray-400 select-none">{'// Détection de la création du salon de ticket'}</div>
                  <div>
                    <span className="text-pink-400">client</span>.
                    <span className="text-blue-400">on</span>(
                    <span className="text-yellow-200">'channelCreate'</span>,{' '}
                    <span className="text-blue-400">async</span> (
                    <span className="text-orange-300">channel</span>) =&gt; {'{'}
                  </div>
                  <div className="pl-4 text-gray-400 select-none">
                    {'// Vérifier s\'il s\'agit d\'un ticket (votre logique existante)'}
                  </div>
                  <div className="pl-4 text-gray-400 select-none">
                    {'// Adapter cette condition selon comment vous nommez vos tickets'}
                  </div>
                  <div className="pl-4">
                    <span className="text-pink-400">if</span> (!
                    <span className="text-orange-300">channel</span>.
                    <span className="text-blue-400">name</span>.
                    <span className="text-blue-400">startsWith</span>(
                    <span className="text-yellow-200">'ticket-'</span>)){' '}
                    <span className="text-pink-400">return</span>;
                  </div>
                  <br />
                  <div className="pl-4 text-gray-400 select-none">
                    {'// Extraire l\'ID de l\'utilisateur si stocké dans le topic (ou le nom du salon)'}
                  </div>
                  <div className="pl-4 text-gray-400 select-none">
                    {'// Modifiez selon votre système actuel pour récupérer le bon ID.'}
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">const</span>{' '}
                    <span className="text-orange-300">userMention</span> ={' '}
                    <span className="text-yellow-200">`&lt;@${'{channel.topic}'}&gt;`</span>;
                  </div>
                  <br />
                  <div className="pl-4 text-gray-400 select-none">
                    {'// Envoi du message d\'accueil'}
                  </div>
                  <div className="pl-4">
                    <span className="text-orange-300">channel</span>.
                    <span className="text-blue-400">send</span>({'{ '}
                    <span className="text-blue-400">content</span>:{' '}
                    <span className="text-yellow-200">
                      `👋 Bonjour ${'{userMention}'},\n\nMerci d'avoir ouvert un ticket.\n\nVeuillez expliquer votre demande en donnant le plus de détails possible.\n\nUn membre du staff vous répondra dès que possible. @hvk_gabi`
                    </span>
                    {" }"});
                  </div>
                  <div>{'});'}</div>
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gray-400" />
                    Instructions d'installation
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="w-6 h-6 shrink-0 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">
                        1
                      </div>
                      <p className="text-sm text-gray-700 pt-0.5">
                        Ajoutez cet événement dans votre fichier principal <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 text-[13px]">index.js</span> ou là où vous gérez les événements.
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-6 h-6 shrink-0 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">
                        2
                      </div>
                      <p className="text-sm text-gray-700 pt-0.5">
                        Assurez-vous que l'intent <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 text-[13px]">Guilds</span> est activé dans la configuration de votre client.
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-6 h-6 shrink-0 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">
                        3
                      </div>
                      <p className="text-sm text-gray-700 pt-0.5">
                        Ajustez la méthode de récupération de la mention <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 text-[13px]">{'{userMention}'}</span> selon la façon dont votre bot existant stocke l'ID du créateur (dans le topic, le nom du salon ou la base de données).
                      </p>
                    </li>
                  </ul>
                </section>

                <section className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Aperçu du Message
                  </h2>
                  <div className="bg-white rounded-lg p-5 shadow-sm border border-indigo-200 text-[15px] space-y-3 font-sans">
                    <p className="text-gray-500 text-[11px] uppercase tracking-wider font-bold mb-3">
                      BOT — Aujourd'hui à 14:20
                    </p>
                    <p>👋 Bonjour <span className="bg-indigo-100 text-indigo-700 px-1 rounded font-medium">@Utilisateur</span>,</p>
                    <p>Merci d'avoir ouvert un ticket.</p>
                    <p>Veuillez expliquer votre demande en donnant le plus de détails possible.</p>
                    <p>Un membre du staff vous répondra dès que possible. <span className="bg-indigo-100 text-indigo-700 px-1 rounded font-medium">@hvk_gabi</span></p>
                  </div>
                </section>
              </div>
            </div>
          </>
        )}

        {activeTab === 'privacy' && (
          <>
            <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center shrink-0">
              <h1 className="text-xl font-bold text-gray-800">Politique de confidentialité</h1>
            </header>
            <div className="p-8 flex-1 overflow-y-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Politique de Confidentialité</h2>
                <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                  <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
                  <p>Cette politique de confidentialité décrit la façon dont notre bot Discord collecte, utilise et protège vos informations personnelles lorsque vous utilisez nos services.</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">1. Données collectées</h3>
                  <p>Nous pouvons collecter les informations suivantes :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Votre identifiant Discord (ID unique)</li>
                    <li>Votre nom d'utilisateur</li>
                    <li>Le contenu des messages envoyés dans les salons de tickets (strictement utilisés pour le support)</li>
                    <li>Les identifiants des serveurs (Guild IDs) où le bot est présent</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">2. Utilisation des données</h3>
                  <p>Les données collectées sont utilisées dans le but exclusif de :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Fournir et maintenir le service de tickets de support</li>
                    <li>Personnaliser l'expérience utilisateur (ex: mentions automatiques)</li>
                    <li>Prévenir les abus et maintenir la sécurité du bot</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">3. Conservation des données</h3>
                  <p>Les informations relatives aux tickets sont conservées uniquement pendant la durée de résolution du problème. Une fois le ticket fermé, les transcriptions peuvent être conservées pour l'historique du serveur selon la configuration de l'administrateur, mais nous ne les utilisons pas à d'autres fins externes.</p>

                  <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">4. Contact</h3>
                  <p>Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter en ouvrant un ticket sur notre serveur de support Discord.</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'terms' && (
          <>
            <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center shrink-0">
              <h1 className="text-xl font-bold text-gray-800">Conditions d'utilisation</h1>
            </header>
            <div className="p-8 flex-1 overflow-y-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Conditions Générales d'Utilisation</h2>
                <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                  <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
                  <p>En invitant ou en utilisant notre bot Discord, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le bot ou l'expulser de votre serveur.</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">1. Utilisation acceptable</h3>
                  <p>Vous vous engagez à ne pas utiliser le bot pour :</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Enfreindre les Conditions d'Utilisation de Discord (TOS) ou la Charte de la Communauté</li>
                    <li>Spammer, harceler ou envoyer du contenu malveillant via les fonctionnalités de tickets</li>
                    <li>Tenter de contourner les limites de sécurité, trouver des failles ou causer des pannes (DDoS)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">2. Disponibilité du service</h3>
                  <p>Le bot est fourni "tel quel" et "selon la disponibilité". Nous ne garantissons pas que le service sera ininterrompu, sécurisé ou totalement exempt d'erreurs. Nous nous réservons le droit de suspendre ou d'interrompre le service à tout moment sans préavis pour maintenance ou toute autre raison.</p>

                  <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">3. Responsabilité</h3>
                  <p>L'équipe de développement du bot ne peut être tenue responsable des dommages directs, indirects, accessoires ou consécutifs résultant de l'utilisation ou de l'incapacité d'utiliser le service, y compris la perte de données, de membres ou les problèmes liés au serveur Discord.</p>

                  <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">4. Modifications</h3>
                  <p>Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet dès leur publication sur ce panneau ou sur le serveur de support. Votre utilisation continue du bot après de telles modifications constitue votre acceptation des nouvelles conditions.</p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

