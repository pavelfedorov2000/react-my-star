export const formatPhone = (phone: string) => {
    let hrefPhone = '';
    const phoneArr = phone.split(' ');
    phoneArr.forEach((el) => {
        hrefPhone += el.split('').filter((elem) => elem !== '(' && elem !== ')' && elem !== '-').join('');
    });
    return hrefPhone;
}