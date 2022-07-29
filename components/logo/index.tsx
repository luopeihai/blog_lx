import { useTheme } from 'next-themes'

const Logo = () => {
  const { theme } = useTheme()
  return (
    <>
      {typeof window !== undefined && (
        <svg
          width="35px"
          height="29px"
          viewBox="0 0 260 210"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" fill={theme === 'dark' ? '#fff' : '#1f2026'}>
            <path d="M193,0 L260,165 L223,212 L70,212 L0,38 L43,0 L193,0 Z M111.486486,32 L32,32 L91.8648649,180 L118.621622,180 L133.716,132.739 L152.513514,180 L231,180 L171.243243,32 L148.054054,32 L131.767,82.992 L111.486486,32 Z M99.27,47.65 L122.823,106.866 L103.755,166.563 L55.459,47.65 L99.27,47.65 Z M159.33,47.411 L204.28,160.425 L162.361,160.425 L140.66,105.865 L159.33,47.411 Z" id="bolg" ></path>
          </g>
        </svg>
      )}
    </>
  )
}

export default Logo
