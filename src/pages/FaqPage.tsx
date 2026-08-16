import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { Plus } from 'lucide-react';
import { faqItems } from '@/data/site';

export function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageLayout
      num="11"
      label="FAQ"
      title={<>Questions <span className="text-ibms-cyan">fréquentes.</span></>}
      intro="Les réponses aux questions les plus posées sur nos formations, nos services et notre fonctionnement."
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="mx-auto max-w-3xl">
            {faqItems.map((item, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="border-b border-ibms-veil">
                  <button
                    className="flex w-full items-center justify-between py-5 text-left"
                    onClick={() => setOpen(open === idx ? null : idx)}
                    aria-expanded={open === idx}
                  >
                    <span className={`text-lg font-bold transition-colors duration-300 ${open === idx ? 'text-ibms-blue' : 'text-ibms-ink'}`}>
                      {item.question}
                    </span>
                    <Plus className={`h-5 w-5 shrink-0 text-ibms-slate transition-transform duration-300 ${open === idx ? 'rotate-45 text-ibms-blue' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-ibms ${open === idx ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                    <p className="text-base leading-relaxed text-ibms-slateDark">{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
