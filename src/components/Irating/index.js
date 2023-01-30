import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function Irating(props) {
  let rating=props.rating;
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={rating} precision={0.5} />
    </Stack>
  );
}