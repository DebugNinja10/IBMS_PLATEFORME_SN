import { useState } from 'react';
import { Bot, Send, Sparkles, User } from 'lucide-react';

type Message = {
  role: 'bot' | 'user';
  text: string;
};

const suggestions = [
  'Quelles formations propose IBMS ?',
  'Quels sont vos services numériques ?',
  'Comment vous contacter ?',
];

function getReply(question: string): string {
  const q = question
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  if (q.includes('bonjour') || q.includes('salut') || q.includes('hello')) {
    return 'Bonjour et bienvenue chez IBMS ! 😊 Je suis votre assistant virtuel. Comment puis-je vous aider ?';
  }

  if (q.includes('formation') || q.includes('cours') || q.includes('apprendre')) {
    return 'IBMS accompagne les jeunes et les professionnels dans le développement de leurs compétences numériques. Consultez notre rubrique Formations pour découvrir nos programmes.';
  }

  if (q.includes('service') || q.includes('solution') || q.includes('site web') || q.includes('application')) {
    return 'IBMS propose un accompagnement dans la conception de solutions digitales, le développement web et mobile ainsi que la transformation numérique des organisations.';
  }

  if (q.includes('intelligence artificielle') || q.includes('ia') || q.includes('artificielle')) {
    return 'L’intelligence artificielle fait partie des domaines d’innovation d’IBMS. Nous accompagnons les organisations dans la découverte et l’utilisation des technologies numériques.';
  }

  if (q.includes('contact') || q.includes('joindre') || q.includes('adresse') || q.includes('telephone')) {
    return 'Pour contacter IBMS, rendez-vous dans la rubrique Contact de notre site. Vous pourrez y retrouver les informations officielles de notre équipe.';
  }

  if (q.includes('projet') || q.includes('entreprise') || q.includes('entrepreneur')) {
    return 'IBMS accompagne les entrepreneurs et les organisations dans leurs projets numériques, de l’idée à la conception de solutions adaptées à leurs besoins.';
  }

  if (q.includes('merci')) {
    return 'Avec plaisir ! 😊 Je reste disponible pour répondre à vos questions sur IBMS.';
  }

  return 'Merci pour votre question ! Je peux vous renseigner sur les formations, les services numériques, l’intelligence artificielle et les activités d’IBMS. Pouvez-vous préciser votre demande ?';
}

export function IBMSChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: 'Bonjour ! 👋 Bienvenue chez IBMS. Je suis votre assistant virtuel. Que souhaitez-vous découvrir ?',
    },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = (value: string) => {
    const question = value.trim();
    if (!question) return;

    setMessages((previous) => [
      ...previous,
      { role: 'user', text: question },
      { role: 'bot', text: getReply(question) },
    ]);
    setInput('');
  };

  return (
    <div className="mt-6 max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0c1b35]/90 shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ibms-cyan/15 text-ibms-cyan">
            <Bot size={24} />
          </div>
          <div>
            <h3 className="font-bold text-white">Assistant IBMS</h3>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Assistant disponible
            </div>
          </div>
        </div>
        <Sparkles className="text-ibms-cyan" size={20} />
      </div>

      <div className="max-h-56 space-y-4 overflow-y-auto p-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 ${
              message.role === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
              message.role === 'user'
                ? 'bg-ibms-blue text-white'
                : 'bg-ibms-cyan/15 text-ibms-cyan'
            }`}>
              {message.role === 'user' ? <User size={16} /> : <Bot size={17} />}
            </div>
            <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
              message.role === 'user'
                ? 'rounded-tr-sm bg-ibms-blue text-white'
                : 'rounded-tl-sm bg-white/[0.07] text-white/85'
            }`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {messages.length === 1 && (
        <div className="flex flex-wrap gap-2 px-4 pb-4">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => sendMessage(suggestion)}
              className="rounded-full border border-ibms-cyan/30 px-3 py-2 text-left text-xs text-ibms-cyan transition hover:bg-ibms-cyan/10"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage(input);
        }}
        className="flex items-center gap-2 border-t border-white/10 p-3"
      >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Posez votre question à IBMS..."
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-ibms-cyan"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          aria-label="Envoyer le message"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ibms-cyan text-[#07152b] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Send size={18} />
        </button>
      </form>

      <p className="px-4 pb-3 text-center text-[10px] text-white/35">
        Assistant virtuel IBMS · Réponses automatiques
      </p>
    </div>
  );
}