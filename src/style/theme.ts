export const lightTheme = {
  background: '#fff',
  iceColorBg: '#F1F3F5',
  color: '#000',
  text: '#000000',
  borderBottom: '#000000',
  transparent: '#ffffffd6',
};

export const darkTheme = {
  background: '#121212',
  iceColorBg: '#1C1C1C',
  color: '#fff',
  text: '#ffffff',
  borderBottom: '#ffffff',
  transparent: '#000000cf',
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

// SideBar / TopBar
export const menuTheme = {
  // colors: {
  //   bg: '#0B0F14', // fundo app
  //   panel: '#121822', // painéis / sidebar
  //   panelAlt: '#0E141D',
  //   text: '#E7EDF5',
  //   textDim: '#A7B4C2',
  //   primary: '#4F8BFF',
  //   primaryHover: '#6AA2FF',
  //   border: '#1E2936',
  //   success: '#22C55E',
  //   warning: '#F59E0B',
  //   danger: '#EF4444',
  // },
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
