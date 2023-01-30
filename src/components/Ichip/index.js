import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorChips(props) {
    let sellingStatus=props.sellingStatus
  return (

    <Stack spacing={1} alignItems="center">
<Stack spacing={1} alignItems='flex-end'>
        <Chip label={sellingStatus}  color="success" />
        </Stack>
        </Stack>
  )
}