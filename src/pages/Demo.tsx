import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { demoContent } from '../content/pageContent';
import { demos, type DemoId } from '../content/mediaData';
import { useLanguage } from '../context/LanguageContext';
import './Demo.css';

export default function Demo() {
  const { locale } = useLanguage();
  const content = demoContent[locale];
  const [selectedId, setSelectedId] = useState<DemoId>('calisson');
  const [fallbackFullscreen, setFallbackFullscreen] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);
  const selectedDemo = demos.find((demo) => demo.id === selectedId) ?? demos[0];

  useEffect(() => {
    if (!fallbackFullscreen) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setFallbackFullscreen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown); };
  }, [fallbackFullscreen]);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (viewerRef.current?.requestFullscreen) {
      try { await viewerRef.current.requestFullscreen(); return; } catch { /* iOS fallback below */ }
    }
    setFallbackFullscreen((value) => !value);
  };

  const scrollSelector = (direction: -1 | 1) => {
    const selector = selectorRef.current;
    if (!selector) return;
    selector.scrollBy({ left: direction * Math.min(selector.clientWidth * .78, 420), behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>{content.seo.title}</title><meta name="description" content={content.seo.description} />
        <meta property="og:title" content={content.seo.title} /><meta property="og:description" content={content.seo.description} />
        <meta property="og:url" content="https://ardittiproduction.com/demo" /><meta property="og:image" content="https://ardittiproduction.com/og.png" />
      </Helmet>

      <section className="demo-page site-container">
        <div className="demo-page__heading"><h1>{content.title}</h1><p>{content.subtitle}</p></div>

        <div className="demo-selector-shell">
          <button className="demo-selector__arrow demo-selector__arrow--previous" type="button" onClick={() => scrollSelector(-1)} aria-label={content.previous}><ChevronLeft aria-hidden="true" /></button>
          <div className="demo-selector" ref={selectorRef} aria-label="Choisir une démonstration">
            {demos.map((demo) => (
              <button className={demo.id === selectedId ? 'is-active' : ''} type="button" key={demo.id} onClick={() => setSelectedId(demo.id)} aria-pressed={demo.id === selectedId} data-analytics-event="demo_select" data-analytics-label={demo.id}>
                <img src={demo.thumbnail} alt="" /><span>{demo.name}</span>
              </button>
            ))}
          </div>
          <button className="demo-selector__arrow demo-selector__arrow--next" type="button" onClick={() => scrollSelector(1)} aria-label={content.next}><ChevronRight aria-hidden="true" /></button>
        </div>
        <p className="demo-selector__hint">{content.swipeHint}<ChevronRight size={15} aria-hidden="true" /></p>

        <div className={`demo-viewer ${fallbackFullscreen ? 'is-fallback-fullscreen' : ''}`} ref={viewerRef}>
          <iframe key={selectedDemo.url} src={selectedDemo.url} title={`${selectedDemo.name} — démonstration 3D`} allow="fullscreen; xr-spatial-tracking; camera; gyroscope; accelerometer" allowFullScreen />
          <button className="demo-viewer__fullscreen" type="button" onClick={toggleFullscreen} aria-label={fallbackFullscreen ? content.exitFullscreen : content.fullscreen}>
            {fallbackFullscreen ? <X size={20} /> : <Expand size={20} />}<span>{fallbackFullscreen ? content.exitFullscreen : content.fullscreen}</span>
          </button>
        </div>
      </section>
    </>
  );
}
