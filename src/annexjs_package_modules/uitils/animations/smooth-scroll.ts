const smoothScroll = (event, scrollTo='ID') => {
  event.preventDefault()

  const targetIDScrollOffset = 100;

  if (scrollTo === 'TOP') {
    // console.log("I will scroll TO_TOP");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else if (scrollTo === 'BOTTOM') {
    // console.log("I will scroll TO_BOT");
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  } else {
    // DEFAULT: scrollTo === 'ID'
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(anchorId);

    // console.log("I will scroll TO ID:", anchorId);
    window.scrollTo({
      top: anchor.offsetTop - targetIDScrollOffset,
      behavior: 'smooth'
    });
  }
};

export default smoothScroll;