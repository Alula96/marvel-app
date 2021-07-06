import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';

import Banner from "@features/home/organisms/Banner/Banner";
import ComicsListWrapper from '@features/comics/templates/ComicsListWrapper/ComicsListWrapper';
import { formatDateToDefault } from "@utils/date.utils";
import { setFilter } from '../redux/actions';

const firstBannerLeft = {
  backgroundImage: 'banner-background-2.jpeg'
};

const firstBannerRight = {
  emphasizedTitle: 'Marvel comics',
  title: 'Can\'t find a comic?',
  description: 'Search it in the next section'
};

const ComicsPage = () => {  
  const dispatch = useDispatch();

  useEffect(() => {
    const secondDate = new Date(); 
    const firstDate = new Date(secondDate);
    firstDate.setFullYear(firstDate.getFullYear() - 1);
    const dateRange = `${formatDateToDefault(firstDate).replaceAll('/', '-')},${formatDateToDefault(secondDate).replaceAll('/', '-')}`;
    dispatch(setFilter({ dateRange, orderBy: '-focDate' }));
  }, []);

  return <main>
      <Banner key={1} left={firstBannerLeft} right={firstBannerRight}></Banner>
      <ComicsListWrapper></ComicsListWrapper>
    </main>;
};

export default ComicsPage;