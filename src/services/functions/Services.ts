export function getImageFromStore(name: string, token: string) {
    return `https://firebasestorage.googleapis.com/v0/b/my-portfolio-v2.appspot.com/o/${name}.png?alt=media&token=${token}`
}
