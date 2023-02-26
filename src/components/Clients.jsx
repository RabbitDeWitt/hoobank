import React from 'react'
import { clients } from '../constants'
import styles from '../style'


const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`w-full flex-wrap ${styles.flexCenter}`}>
      {clients.map((client)=>(
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt="Client" className='sm:w-[192px] w-[100px] object-contain grayscale hover:grayscale-0 duration-300 cursor-pointer'/>
        </div>
      ))}
    </div>
  </section>
)

export default Clients