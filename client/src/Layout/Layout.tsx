import { Box } from '@mui/material';
import { FC } from 'react';
import { Navbar } from '../components';

interface ILayout {
  children: React.ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <Box mt="4rem">
        {children}
      </Box>
    </div>
  );
};

export default Layout;