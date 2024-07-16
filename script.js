const nodesNavButtons = document.querySelectorAll('.button')
const iframe = document.querySelector('iframe')

let arrayNavLinks = []

nodesNavButtons.forEach((node) => {
  const href = node.getAttribute('data-href')
  arrayNavLinks.push(href)
})

console.log(nodesNavButtons)

console.log(arrayNavLinks)

nodesNavButtons.forEach((node) => {
  node.addEventListener('click', (event) => {
    const href = event.target.getAttribute('data-href')
    iframe.setAttribute('src', href)
  })
})

// Becareful when adding a "click" event listener to an element and using event.target. The event.target in this scenario IS NOT the element you addEventListener to, but event.target will be the element that you click.

// So in the case of having a click listener in a parent button with nested child elements, because the button you try to click on has child element inside it. You add the neccessary attribute in the parent button element instead, so if you accidentally click on the child element inside it (example: text element), it will return nothing because you didn't add the attribute you're trying to get through JS to the child element in HTML document.

// Solution: just make the content child elements of a button (example: text elements, etc...) have pointer-event: none in it's CSS style.
