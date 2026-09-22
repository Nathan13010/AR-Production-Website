import './PartnerLogos.css';
import { partnerLogos } from '../content/mediaData';

export default function PartnerLogos({ ariaLabel }: { ariaLabel: string }) {
  return (
    <div className="partner-logos" aria-label={ariaLabel}>
      <div className="partner-logos__track">
        {[...partnerLogos, ...partnerLogos].map((partner, index) => {
          const duplicate = index >= partnerLogos.length;
          return (
            <span className="partner-logos__item" key={`${partner.name}-${index}`} aria-hidden={duplicate || undefined}>
              <img src={partner.src} alt={duplicate ? '' : partner.name} loading="lazy" />
            </span>
          );
        })}
      </div>
    </div>
  );
}
