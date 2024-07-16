const nodesNavButtons = document.querySelectorAll('.button')
const iframe = document.querySelector('iframe')

let arrayNavLinks = []

nodesNavButtons.forEach((node) => {
  let iframeInfo = {}
  iframeInfo.href = node.getAttribute('data-href')
  iframeInfo.title = node.getAttribute('data-title')
  arrayNavLinks.push(iframeInfo)
})

// console.log(nodesNavButtons)

// console.log(arrayNavLinks)

//change the background color of matching nav button of current iframe when page is loaded. This part is not neccessary if you already add "current-iframe" class to appropriate button manually beforehand. Because when iframe is changed, the entire page is NOT reloaded, so you're basically going to the same iframe link you set in the HTML document when visiting the same SITE URL. You can always expect the same iframe url to load when you go to the site, so you can just manually add the class to that default iframe.

for (let i = 0; i <= arrayNavLinks.length - 1; i++) {
  const currentIframeSRC = iframe.getAttribute('src')
  if (currentIframeSRC === arrayNavLinks[i].href) {
    nodesNavButtons[i].classList.add('current-iframe')
  }
}

// When button is clicked, change iframe src, unhighlight all buttons, then highlight the appropriate button:
nodesNavButtons.forEach((node) => {
  node.addEventListener('click', (event) => {
    const href = event.target.getAttribute('data-href')
    const title = event.target.getAttribute('data-title')
    iframe.setAttribute('src', href)
    iframe.setAttribute('title', title)

    nodesNavButtons.forEach((node) => {
      if (node.getAttribute('class').includes('current-iframe')) {
        node.classList.remove('current-iframe')
      }
    })

    event.target.classList.add('current-iframe')
  })
})

// Note to self: Becareful when adding a "click" event listener to an element and using event.target. The event.target in this scenario IS NOT the element you addEventListener to, but event.target will be the element that you click.

// So in the case of having a click listener in a parent button with nested child elements, because the button you try to click on has child element inside it. You add the neccessary attribute in the parent button element instead, so if you accidentally click on the child element inside it (example: text element), it will return nothing because you didn't add the attribute you're trying to get through JS to the child element in HTML document.

// Solution: just make the content child elements of a button (example: text elements, etc...) have pointer-event: none in it's CSS style.
