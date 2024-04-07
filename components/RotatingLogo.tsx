import * as React from 'react'

import '@/components/rotating.css'

// Define the props interface
interface MyComponentProps {
  style: {}
  className?: string
  logoUrl: string
}

const RotatingLogo: React.FunctionComponent<MyComponentProps> = props => {
  return (
    <div style={{ ...props.style }} className={props.className}>
      <div className='contei'>
        <div className='obert'>
          <div className='thokla thokla1'>
            <div
              className='coin coin1'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
            <div
              className='coin coin2'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
            <div
              className='coin coin3'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
          </div>
          <div className='thokla thokla2'>
            <div
              className='coin coin1'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
            <div
              className='coin coin2'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
            <div
              className='coin coin3'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
          </div>
          <div className='thokla thokla3'>
            <div
              className='coin coin1'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
            <div
              className='coin coin2'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
            <div
              className='coin coin3'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
          </div>
          <div className='thokla thokla4'>
            <div
              className='coin coin1'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
            <div
              className='coin coin2'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
            <div
              className='coin coin3'
              style={{ backgroundImage: 'url(' + props.logoUrl + ')' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RotatingLogo
