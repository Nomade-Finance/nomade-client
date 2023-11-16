import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded'
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded'

export const SidebarData = [
  {
    title: 'Accueil',
    path: '/',
    icon: <HomeRoundedIcon/>,
    cName: 'side-link'
  },
  {
    title: 'Echanges',
    path: '/echanges',
    icon: <SwapHorizRoundedIcon/>,
    cName: 'side-link'
  },
  {
    title: 'Compte',
    path: '/dashboard',
    icon: <PersonRoundedIcon/>,
    cName: 'side-link'
  },

  {
    title: 'Support',
    path: '/support',
    icon: <SupportAgentRoundedIcon/>,
    cName: 'side-link'
  }
]
