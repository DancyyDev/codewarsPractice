// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  //your code here
  //includes- https: // http: // www. // or ://
  const http = "http://"
  const https = "https://"
  let web = url
  
  console.log("url", url)
  
  if(url.includes("https://www.")){
    web = url.replace("https://www.", "www.")
  } else if(url.includes("http://www.")){
    web = url.replace("http://www.", "www.")
  } else if(url.includes("http://")){
    web = url.replace(http, "www.")
  } else if(url.includes("https://")){
    web = url.replace(https, "www.")
  } else if(url.includes("www.")){
    return web.split('.')[1]
  } else if(!url.includes("http://") || !url.includes("www.") || !url.includes("https://")){
    return url.split('.')[0]
  } 
  console.log("web", web)
  return web.split('.')[1]
}