export const sendGAEvent = (eventCategory, eventAction, eventLabel = null, eventValue = null) => {

    console.log(window.gtag);

  if (typeof window !== 'undefined' && window.gtag) {

    console.log("Sending GA Event:", eventCategory, eventAction, eventLabel, eventValue);

    window.gtag('event', eventAction, {
      'event_category': eventCategory,
      ...(eventLabel && { 'event_label': eventLabel }),
      ...(eventValue && { 'value': eventValue })
    });
  }
};