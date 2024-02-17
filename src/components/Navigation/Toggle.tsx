'use client'

const Path = (props: any) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="#22d3ee"
    strokeLinecap="round"
    {...props}
  />
)

export const Toggle = ({ toggle }: any) => (
  <button
    onClick={toggle}
    className="fixed right-6 top-8 z-20 rounded-full bg-sky-100 p-4 focus:outline-none md:hidden dark:bg-gray-900"
  >
    <svg className="h-6 w-6" viewBox="0 0 20 19">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
)
