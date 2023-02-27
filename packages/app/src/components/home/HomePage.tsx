import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HomePageCompanyLogo } from '@backstage/plugin-home';
import { HomePageStackOverflowQuestions } from '@backstage/plugin-stack-overflow'
import {
  HomePageRandomJoke,
  ComponentAccordion,
  ComponentTabs,
  ComponentTab,
  WelcomeTitle,
  HeaderWorldClock,
  ClockConfig,
  HomePageStarredEntities,
} from '@backstage/plugin-home';
import { Content, Header, Page } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
// import { HomePageCalendar } from '@backstage/plugin-gcalendar';

export const HomePage =  (
  /* We will shortly compose a pretty homepage here. */
  // return <h1>Welcome to Backstage!</h1>;
  
  <Page themeId="home">
  <Content>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <HomePageCompanyLogo />
      </Grid>
      <Grid item xs={12} md={6}>
    <HomePageStackOverflowQuestions
      requestParams={{
        tagged: 'backstage',
        site: 'stackoverflow',
        pagesize: 5,
      }}
    />
  </Grid>
    </Grid>
  </Content>
  </Page> 
    
  

);