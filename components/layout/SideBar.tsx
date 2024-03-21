import { BsBellFill, BsHouseFill,  } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa6';

import SideBarLogo from './SideBarLogo';
import SideBarItem from './SideBarItem';
import { BiLogOut } from 'react-icons/bi';
import SideBarTweetBut from './SideBarTweetBut';

const SideBar = () => {
  //Creacion de objetos para nuesta barra lateral
  const items = [
    {
      label: 'Inicio',
      href: '/',
      icon: BsHouseFill

    },
    {
      label: 'Notificaciones',
      href: '/notificaciones',
      icon: BsBellFill
    },
    {
      label: 'Perfil',
      href: '/users/123',
      icon: FaUser
    }
    
  ]
  return ( 
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SideBarLogo />
          {items.map(item => (
            <SideBarItem 
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SideBarItem onclick={ () => {} } icon={BiLogOut} label='Cerrar Sesión' href='' />
          <SideBarTweetBut />
        </div>
      </div>
    </div>
   );
}
 
export default SideBar;