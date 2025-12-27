/**
 * Retorna o tipo de dispositivo e a largura da tela.
 *
 * @returns {{ type: string, width: number }} Um objeto com o tipo de dispositivo ("mobile" ou "desktop") e a largura da tela.
 *
 * @example
 * const device = getDeviceInfo();
 * console.log("Tipo:", device.type); // "mobile" ou "desktop"
 * console.log("Largura:", device.width);
 */
export default function getDeviceInfo() {
  const width = window.innerWidth;

  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(
    navigator.userAgent
  );

  const type = isMobile || width < 768 ? 'mobile' : 'desktop';

  return {
    type, // "mobile" ou "desktop"
    width, // ex: 1024
  };
}
