import mixpanel from 'mixpanel-browser';

export const track = (e: string, props?: Record<string, string>) => {
  if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
    mixpanel.track(e, props);
  }
};
