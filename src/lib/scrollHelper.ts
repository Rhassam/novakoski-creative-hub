
/**
 * Rola a página para uma seção específica, centralizando-a na viewport
 * @param sectionId - ID da seção para rolagem
 */
export const scrollToSectionCentered = (sectionId: string): void => {
  // Encontra o elemento alvo pelo ID
  const section = document.getElementById(sectionId);
  
  if (!section) return;
  
  // Calculamos a posição para centralizar o elemento na viewport
  const viewportHeight = window.innerHeight;
  const elementHeight = section.offsetHeight;
  const elementRect = section.getBoundingClientRect();
  const scrollY = window.scrollY;
  const elementTop = scrollY + elementRect.top;
  
  // Se o elemento for maior que a viewport, rola para o topo do elemento
  // Caso contrário, centraliza o elemento na viewport
  const scrollPosition = elementHeight >= viewportHeight
    ? elementTop
    : elementTop - ((viewportHeight - elementHeight) / 2);
  
  // Utiliza requestAnimationFrame para uma animação mais suave
  const startPosition = window.scrollY;
  const change = scrollPosition - startPosition;
  const duration = 600; // ms
  let startTime: number | null = null;
  
  function animateScroll(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Função de easing para suavizar o movimento
    const easeInOutCubic = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    
    window.scrollTo(0, startPosition + change * easeInOutCubic);
    
    if (progress < 1) {
      window.requestAnimationFrame(animateScroll);
    }
  }
  
  window.requestAnimationFrame(animateScroll);
};

/**
 * Verifica se um elemento está visível na viewport
 * @param element - Elemento para verificação
 * @returns Booleano indicando se está visível
 */
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Consideramos que um elemento está na viewport se seu centro está na parte visível da tela
  const elementCenter = rect.top + rect.height / 2;
  return elementCenter >= 0 && elementCenter <= windowHeight;
};

/**
 * Usa Intersection Observer para detectar elementos visíveis - mais eficiente que onScroll
 * @param elementId - ID do elemento a observar
 * @param callback - Função callback quando elemento se torna visível
 * @param options - Opções do Intersection Observer
 */
export const createVisibilityObserver = (
  elementId: string,
  callback: (isVisible: boolean) => void,
  options = { threshold: 0.2 }
) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      callback(entry.isIntersecting);
    });
  }, options);
  
  observer.observe(element);
  
  // Retorna função para limpar o observer
  return () => observer.disconnect();
};
