import { useEffect } from "react";

const SITE_NAME = "Oncologia no SUS";
const DEFAULT_DESCRIPTION =
  "Site documental que compara políticas públicas de oncologia no SUS em diferentes períodos de governo federal no Brasil, com fontes e datas.";

function setMetaDescription(description: string) {
  let tag = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", description);
}

/**
 * Atualiza document.title e a meta description a cada rota.
 */
export function useSeo(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME;
    const desc = description ?? DEFAULT_DESCRIPTION;
    document.title = fullTitle;
    setMetaDescription(desc);
  }, [title, description]);
}

export { SITE_NAME, DEFAULT_DESCRIPTION };
