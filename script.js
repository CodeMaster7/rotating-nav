"use strict"
const open = document.getElementById('open');
console.log("🚀 ~ file: script.js ~ line 3 ~ open", open)
const close = document.getElementById('close');
console.log("🚀 ~ file: script.js ~ line 5 ~ close", close)

const container = document.querySelector('.container')
console.log("🚀 ~ file: script.js ~ line 7 ~ container", container)

open.addEventListener("click", () => container.classList.add('show-nav'))
close.addEventListener("click", () => container.classList.remove('show-nav'))