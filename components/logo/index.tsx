import { useTheme } from 'next-themes'

const Logo = () => {
  const { theme } = useTheme()
  return (
    !!theme && (
      <svg
        width="45px"
        height="58px"
        viewBox="0 0 45 58"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>logo</title>
        <g
          id="页面-1"
          stroke="none"
          fill={theme === 'dark' ? '#fff' : '#1f2026'}
        >
          <path
            d="M1.12313669,22.7542311 L1.12313669,22.7542311 L1.12313669,22.7542311 C10.5582423,23.088766 13.4699005,32.3813146 13.742103,38.7904724 L13.7504376,45.5556867 C13.7504376,51.9402799 21.1876333,57.1299102 30.427398,57.2483685 L30.7504376,57.2504377 C11.9727562,57.2504377 0.750437648,46.7786009 0.750437648,33.8609357 L0.749591786,23.1252008 C0.749575644,22.920331 0.915642306,22.7542382 1.12051206,22.7542221 C1.12138694,22.754222 1.12226183,22.754225 1.12313669,22.7542311 Z M44.3794879,19.7542221 C44.5843577,19.7542382 44.7504244,19.920331 44.7504082,20.1252008 L44.7504082,20.1252008 L44.7495624,30.8609357 C44.7495624,43.7786009 38.5272438,54.2504377 19.7495624,54.2504377 L19.7495624,54.2504377 L20.072602,54.2483685 C29.3123667,54.1299102 36.7495624,48.9402799 36.7495624,42.5556867 L36.7495624,42.5556867 L36.757897,35.7904724 C37.0300995,29.3813146 38,20 44.3768633,19.7542311 L44.3768633,19.7542311 Z M0.750437648,0.751617304 L1.31268982,0.754750829 C19.8310433,0.961298622 29.7504376,11.3526307 29.7504376,24.1411193 L29.7504376,24.1411193 L29.7504286,48.8794498 C29.7489951,49.0843307 29.5817442,49.2492574 29.3768633,49.2478239 C18.7504376,48.9064744 18,34.002055 17.7495624,27.5702629 L17.7495624,27.5702629 L17.7504376,12.4463683 L17.7474298,12.2241408 C17.5752336,5.8678615 10.0313607,0.751617304 0.750437648,0.751617304 L0.750437648,0.751617304 Z"
            id="形状备份"
          ></path>
        </g>
      </svg>
    )
  )
}

export default Logo
