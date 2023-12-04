import Dashboard from '@mui/icons-material/DashboardRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
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
    path: '/exchange',
    icon: <SwapHorizRoundedIcon/>,
    cName: 'side-link'
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Dashboard/>,
    cName: 'side-link'
  },

  {
    title: 'Support',
    path: '/exchange/support',
    icon: <SupportAgentRoundedIcon/>,
    cName: 'side-link'
  }
]
