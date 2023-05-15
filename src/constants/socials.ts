import { FilterParam, SocialList } from '../enums/Social';
import { Social as SocialType } from '../interfaces/Social';
import { FacebookIcon, GoogleIcon, InstagramIcon, OdnoklassnikiIcon, VkIcon } from '../ui/icons';

export const SOCIALS: SocialType[] = [{
    name: SocialList.Google,
    svg: GoogleIcon,
    link: {
        href: 'https://www.google.com/'
    },
    place: FilterParam.Auth,
}, {
    name: SocialList.Instagram,
    svg: InstagramIcon,
    link: {
        href: 'https://www.instagram.com/mebpolus/'
    },
}, {
    name: SocialList.Facebook,
    svg: FacebookIcon,
    link: {
        href: 'https://www.facebook.com/'
    },
}, {
    name: SocialList.Odnoklassniki,
    svg: OdnoklassnikiIcon,
    link: {
        href: '#'
    },
    place: FilterParam.Footer,
}, {
    name: SocialList.Vk,
    svg: VkIcon,
    link: {
        href: 'https://vk.com/'
    },
}];

