export const formatSrc = (src: string) => {
    return src.split('.').filter((el) => el !== 'jpg' && el !== 'png').join('');
}