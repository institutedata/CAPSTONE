/** @format */

import Hero from '../components/Hero';
import JudoCard from '../components/Cards/JudoCard';
import AboutCard from '../components/Cards/AboutCard';
import BenefitsCard from '../components/Cards/BenefitsCard';
import ContactForm from '../components/Forms/ContactForm';
import Map from '../services/Maps';
import { StyledPageArea, PageContainer } from '../themes/styles/default';
import { Grid } from '@mui/material';

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <Grid
        container
        spacing={1}
        style={{
          margin: '2.5vh auto',
          width: '100%',
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <AboutCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <JudoCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BenefitsCard />
        </Grid>
      </Grid>

      <StyledPageArea id="contact">
        <ContactForm />
        <Map />
      </StyledPageArea>
      <div style={{ textAlign: 'center' }}>
        Phone : 022 645 2627 Email : hajamejudo@gmail.com
      </div>
    </PageContainer>
  );
};

export default Home;
