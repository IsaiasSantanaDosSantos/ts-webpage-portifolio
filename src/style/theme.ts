export const lightTheme = {
  background: '#fff',
  iceColorBg: '#F1F3F5',
  color: '#000',
  text: '#000000',
  borderBottom: '#000000',
  transparent: '#ffffffd6',
  graphic: '#F5DF4E',
};

export const darkTheme = {
  background: '#121212',
  iceColorBg: '#1C1C1C',
  color: '#fff',
  text: '#ffffff',
  borderBottom: '#ffffff',
  transparent: '#000000cf',
  graphic: '#F5DF4E',
};

export const globalColor = {
  primaryColor: '#F5DF4E',
  secondaryColor: ' #000',
  whiteColor: '#ffffff',
  errorColor: '#ff0000',
  successColor: '#008000',
  transpColor: '#000000cc',
  width: '97%',
  maxWidth: '1200px',
  minWidth: '90%',
};

export const menuTheme = {
  layout: {
    sidebarWidth: 260,
    sidebarWidthCollapsed: 72,
    topbarHeight: 'auto',
    radius: 16,
    gap: 16,
  },
  z: {
    topbar: 20,
  },
};

// Tipo inferido automaticamente a partir do lightTheme
export type ThemeType = typeof lightTheme;
