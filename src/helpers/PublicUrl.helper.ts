export const publicUrl = (url: string) => {
  return `${process.env.PUBLIC_URL||''}/${url}`.replace(/(\/+)/g,'/')

}