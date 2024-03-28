import React from 'react';
import UserReviewCard from './UserReviewCard';
import Marquee from 'react-fast-marquee';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledMarquee = styled(Marquee)({
  paddingLeft: '24px', 
  width: '100%', 
  height: '250px', 
});

const Title = styled(Typography)({
  color: '#800080', 
  fontWeight: 'bold', 
});

const ReviewsMarquee = () => {
  const reviews = [
    { name: 'John Doe', rating: 4, review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Jane Smith', rating: 5, review: 'Sed ultrices est ut magna iaculis, in sodales elit viverra.' },
    { name: 'John Doe', rating: 4, review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Jane Smith', rating: 5, review: 'Sed ultrices est ut magna iaculis, in sodales elit viverra.' },
    { name: 'John Doe', rating: 4, review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Jane Smith', rating: 5, review: 'Sed ultrices est ut magna iaculis, in sodales elit viverra.' },
    { name: 'John Doe', rating: 4, review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <div>
      <Title variant="h4" gutterBottom>
          TESTIMONIAL
      </Title>
      <StyledMarquee speed={50}>
        {reviews.map((review, index) => (
          <UserReviewCard
            key={index}
            name={review.name}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </StyledMarquee>
    </div>
  );
};

export default ReviewsMarquee;
