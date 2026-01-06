import { useEffect, useState } from 'react';

import mobileSize from './mobileSize';

type DeviceInfo = {
  type: 'mobile' | 'desktop';
  width: number;
};

export function useDeviceInfo(breakpoint = mobileSize): DeviceInfo {
  const getInfo = (): DeviceInfo => {
    const width = window.innerWidth;

    const isMobileUA =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(
        navigator.userAgent
      );

    const type = isMobileUA || width < breakpoint ? 'mobile' : 'desktop';

    return { type, width };
  };

  const [device, setDevice] = useState<DeviceInfo>(() => getInfo());

  useEffect(() => {
    const onResize = () => setDevice(getInfo());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [breakpoint]);

  return device;
}
