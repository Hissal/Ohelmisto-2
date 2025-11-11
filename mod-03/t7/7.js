'use strict'

const picA = 'img/picA.jpg'
const picB = 'img/picB.jpg'

const img = document.getElementById('target')
const trigger = document.getElementById('trigger')

trigger.addEventListener('mouseover', () => {
  img.src = picB
})

trigger.addEventListener('mouseout', () => {
  img.src = picA
})