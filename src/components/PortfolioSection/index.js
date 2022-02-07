import React from 'react';
import { PortfolioContainer, PortfolioBottomLine, PortfolioTopLine, PortfolioItem } from './PortfolioElements';

const PortfolioSection = () => {
  return <>
  <PortfolioContainer>
  <PortfolioTopLine>We've developed</PortfolioTopLine>
  <PortfolioItem>huge sculptures</PortfolioItem>
  <PortfolioItem>robotic ceilings</PortfolioItem>
  <PortfolioItem>game controllers</PortfolioItem>
  <PortfolioBottomLine>and things like that.</PortfolioBottomLine>
  </PortfolioContainer>
  </>;
};

export default PortfolioSection;
