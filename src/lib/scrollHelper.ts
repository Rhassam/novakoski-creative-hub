
/**
 * Rola a página para uma seção específica, centralizando-a na viewport
 * @param sectionId - ID da seção para rolagem
 */
export const scrollToSectionCentered = (sectionId: string): void => {
  // Encontra o elemento alvo pelo ID
  const section = document.getElementById(sectionId);
  
  if (!section) return;
  
  // Calcula a posição para centralizar o elemento na viewport
  const viewportHeight = window.innerHeight;
  const elementHeight = section.offsetHeight;
  const offsetTop = section.offsetTop;
  
  // Se o elemento for maior que a viewport, rola para o topo do elemento
  // Caso contrário, centraliza o elemento na viewport
  const scrollPosition = elementHeight >= viewportHeight
    ? offsetTop
    : offsetTop - ((viewportHeight - elementHeight) / 2);
  
  // Rola para a posição calculada
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
};

/**
 * Verifica se um elemento está visível na viewport
 * @param element - Elemento para verificação
 * @returns Booleano indicando se está visível
 */
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return (
    rect.top <= windowHeight / 2 &&
    rect.bottom >= windowHeight / 2
  );
};
