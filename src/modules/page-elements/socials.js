import instaPicSrc from '../../assets/icons/instagram-icon.png'
import fbPicSrc from '../../assets/icons/facebook-icon.png'
import twtPicSrc from '../../assets/icons/twitter-icon.png'

const createSocials = () => {
    const container = document.createElement('div');
    container.setAttribute('class', 'socials');

    const instaLink = document.createElement('a');
    instaLink.setAttribute('href', '');
    const instaPic = document.createElement('img');
    instaPic.src = instaPicSrc;
    instaPic.alt = 'Instagram logo';
    instaLink.appendChild(instaPic);

    const fbLink = document.createElement('a');
    fbLink.setAttribute('href', '');
    const fbPic = document.createElement('img');
    fbPic.src = fbPicSrc;
    fbPic.alt = 'Facebook logo';
    fbLink.appendChild(fbPic);

    const twtLink = document.createElement('a');
    twtLink.setAttribute('href', '');
    const twtPic = document.createElement('img');
    twtPic.src = twtPicSrc;
    twtPic.alt = 'Twitter logo';
    twtLink.appendChild(twtPic);


    container.append(
        instaLink,
        fbLink,
        twtLink
    )
    return container;
};

export {
    createSocials
};