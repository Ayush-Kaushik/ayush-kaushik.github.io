export const sendGAEvent = (eventCategory, eventAction, eventLabel = null, eventValue = null) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventAction, {
      'event_category': eventCategory,
      ...(eventLabel && { 'event_label': eventLabel }),
      ...(eventValue && { 'value': eventValue })
    });
  }
};