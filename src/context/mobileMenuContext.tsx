import { createContext, useContext, useState, type ReactNode } from 'react';

import mobileSize from '../utils/mobileSize';

interface MobileMenuContextProps {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < mobileSize;
};

const MobileMenuContext = createContext<MobileMenuContextProps | undefined>(
  undefined
);

export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(() => !isMobileDevice());

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = (): MobileMenuContextProps => {
  const context = useContext(MobileMenuContext);
  if (!context)
    throw new Error('useMobileMenu must be used within a MobileMenuProvider');
  return context;
};
