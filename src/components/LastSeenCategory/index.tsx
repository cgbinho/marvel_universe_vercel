import { Typography } from '@mui/material';
import * as React from 'react';

type LastSeenItemData = {
  name: string;
  resourceURI: string;
}

interface LastSeenCategoryData {
  categoryName: string;
  data: {
    items: LastSeenItemData[]
  }
}

export const LastSeenCategory = ({ categoryName, data }: LastSeenCategoryData) => {

  return (
    <>
      < Typography
        variant="subtitle1"
        fontWeight="700"
        color="grey.200"
      >
        {categoryName}
      </Typography >
      <ul>
        {data.items.slice(0, 3).map((item: LastSeenItemData) => {
          return (
            <li key={item.resourceURI}>
              <Typography
                variant="body2"
                fontWeight="400"
                color="grey.200"
              >
                {item.name}
              </Typography>
            </li>
          )
        }
        )}
      </ul>
    </>
  )
}