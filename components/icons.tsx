import { LucideProps, Moon, SunMedium } from 'lucide-react'

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' {...props}>
      <path
        d='M 28.961344 16.94441 C 28.646535 16.417186 28.251565 15.940837 27.79427 15.533053 C 27.856023 15.218092 27.896283 14.880001 27.896283 14.517091 C 27.896283 10.926477 25.110515 8.005471 21.686353 8.005471 C 21.213274 8.005471 20.742478 8.071582 20.26682 8.206065 C 19.872708 7.496823 19.356953 6.8720495 18.737276 6.359291 C 17.662467 5.4700584 16.369929 5 14.999003 5 C 13.628807 5 12.336645 5.469986 11.26215 6.359394 C 10.642513 6.872208 10.12692 7.496877 9.732559 8.206162 C 9.257074 8.071844 8.786227 8.005496 8.313477 8.005496 C 4.888421 8.005496 2.102113 10.926686 2.102113 14.517115 C 2.102113 14.874197 2.1418997 15.211568 2.2051623 15.532741 C 1.7476456 15.940762 1.3525468 16.417266 1.0378426 16.944853 C .4851212 17.871596 .19294844 18.937529 .19294844 20.027566 C .19294844 23.342066 2.7641526 26.038323 5.924557 26.038323 L 24.075168 26.038323 L 24.075494 26.03807 C 27.2359 26.03807 29.80705 23.34152 29.80705 20.027274 C 29.807045 18.93717 29.51458 17.871158 28.961345 16.944409 Z M 24.075422 23.032805 L 5.924782 23.032805 C 4.3449837 23.032805 3.0598517 21.684741 3.0598517 20.02754 C 3.0598517 18.971405 3.622791 18.010056 4.5654246 17.45582 L 5.002629 17.198769 C 5.762859 17.796064 6.505513 18.059663 6.53743 18.07066 L 9.407119 19.072912 L 9.407072 19.07284 L 6.971202 17.191753 C 6.9523464 17.177295 5.0898384 15.718459 5.098672 13.96567 L 5.1008186 13.542522 C 5.504654 12.082056 6.791959 11.011173 8.313649 11.011173 L 8.313947 11.010915 C 8.783093 11.010915 9.26339 11.154992 9.825371 11.464647 L 11.374359 12.317757 L 11.86732 10.557772 C 12.29493 9.031251 13.553676 8.005574 14.999418 8.005574 C 16.446369 8.005574 17.705317 9.031013 18.132127 10.557132 L 18.6245 12.31822 L 20.174137 11.464701 C 20.736113 11.155071 21.21666 11.010996 21.686395 11.010996 C 23.5299 11.010996 25.0296 12.583739 25.0296 14.517166 C 25.0296 14.841956 24.934776 15.1909 24.782032 15.648643 L 24.384662 16.838968 L 25.433853 17.45579 C 26.37716 18.010318 26.9403 18.971763 26.9403 20.027508 C 26.940315 21.684558 25.655165 23.032806 24.075422 23.032806 Z'
        fill='currentColor'
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox='0 0 438.549 438.549' {...props}>
      <path
        fill='currentColor'
        d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'
      ></path>
    </svg>
  )
}
