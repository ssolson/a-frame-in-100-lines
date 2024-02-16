// app/index.ts

import { GetServerSideProps } from 'next';
import { checkEnv } from './utils/checkEnv';

export const getServerSideProps: GetServerSideProps = async (context) => {
  checkEnv();
  
  return {
    props: {}, 
  };
};


