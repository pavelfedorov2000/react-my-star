export const formatSrc = (src: string) => {
    console.log(src.split('.').filter((el) => el !== 'jpg' && el !== 'png').join(''));
    return src.split('.').filter((el) => el !== 'jpg' && el !== 'png').join('');
}