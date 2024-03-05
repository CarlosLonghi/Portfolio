'use client'

import React, { useState, useEffect } from 'react'

import { useAnimate, stagger } from 'framer-motion'
import { Nav } from './Nav'
import { Toggle } from './Toggle'

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],

      [
        'nav',
        { transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)' },
        { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.3 },
      ],
      [
        'li',
        {
          transform: isOpen ? 'scale(1)' : 'scale(0.8)',
          opacity: isOpen ? 1 : 0,
          filter: isOpen ? 'blur(0px)' : 'blur(10px)',
        },
        { delay: stagger(0.08), at: '0.1' },
      ],
    ])
    // eslint-disable-next-line
  }, [isOpen])

  return scope
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false) // Set the initial state to false

  const scope = useMenuAnimation(isOpen)

  useEffect(() => {
    const handleResize = () => {
      // Check the window width and update isOpen accordingly
      setIsOpen(window.innerWidth >= 768)
    }

    // Initial check
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array means this effect runs once after initial render

  return (
    <div ref={scope} className="dark:from-gray-900 dark:to-gray-950">
      <Nav toggle={() => setIsOpen(!isOpen)} />
      <Toggle toggle={() => setIsOpen(!isOpen)} />
    </div>
  )
}
