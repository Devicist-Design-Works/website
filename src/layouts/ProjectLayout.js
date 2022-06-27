import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ProjectLayout = ({ children }) => (
  <>
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default ProjectLayout;  