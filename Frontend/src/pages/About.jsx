/** @format */

import Coaches from '../components/Text/Coaches';
import JamieCard from '../components/Cards/JamieCard';
import RyanCard from '../components/Cards/RyanCard';
import Timetable from '../components/Tables/Timetable';
import JudoVideo from '../services/JudoVideo';
import { Grid } from '@mui/material';
import { StyledCardContainer } from '../components/Cards/CardStyles';
import { PageContainer, StyledPageArea } from '../themes/styles/default';

const About = () => {
  return (
    <PageContainer>
      <div>
        <Coaches />
      </div>
      <StyledCardContainer>
        <Grid
          container
          spacing={2}
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: '2.5vh ', // Center horizontally
            width: '100%',
            height: 'auto',
          }}
        >
          <Grid item xs={12} sm={6}>
            <JamieCard />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RyanCard />
          </Grid>
        </Grid>
      </StyledCardContainer>
      <StyledPageArea>
        <Timetable />
      </StyledPageArea>
      <br />
      <StyledPageArea>
        <JudoVideo />
      </StyledPageArea>
    </PageContainer>
  );
};

export default About;
