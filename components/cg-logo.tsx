import RotatingLogo from '@/components/RotatingLogo'

export function CgLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-primary`}>
      <RotatingLogo
        style={{
          height: 30,
          width: 30,
          display: 'inline-block'
        }}
        logoUrl='/logo.svg'
        // logoUrl='https://i.thecloudseminar.com/logo.svg'
        // logoUrl='https://i.thecloudseminar.com/logo-white.svg'
        // logoUrl='https://i.thecloudseminar.com/logo-black.svg'
      />

      {/* <p className='text-[40px] bold hidden sm:block'>Cloud Genius</p> */}
    </div>
  )
}
