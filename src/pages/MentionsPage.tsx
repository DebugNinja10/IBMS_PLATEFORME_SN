import { PageLayout } from '@/components/layout/PageLayout';
import { Reveal } from '@/components/ui/Reveal';
import { legalMentions } from '@/data/site';

export function MentionsPage() {
  return (
    <PageLayout
      num="13"
      label="Mentions légales"
      title={<>Mentions <span className="text-ibms-cyan">légales.</span></>}
      intro="Informations légales relatives à l'utilisation du site ibms.sn et aux services proposés par IBMS."
    >
      <section className="section-pad bg-white">
        <div className="container-ibms">
          <div className="mx-auto max-w-3xl space-y-8">
            {legalMentions.map((section, idx) => (
              <Reveal key={section.title} delay={idx * 60}>
                <div className="border-b border-ibms-veil pb-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl font-extrabold text-ibms-veil">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="h-px flex-1 bg-ibms-veil" />
                  </div>
                  <h2 className="mb-3 text-xl font-extrabold text-ibms-ink">{section.title}</h2>
                  <p className="text-base leading-relaxed text-ibms-slateDark">{section.content}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
