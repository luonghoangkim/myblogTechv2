// // pages/_app.tsx
// import { AppProps } from 'next/app';
// import {
//     Hydrate,
//     QueryClient,
//     QueryClientProvider,
//   } from '@tanstack/react-query'
// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from '@/redux/store';
  
//   export default function MyApp({ Component, pageProps }: AppProps) {
//     const [queryClient] = React.useState(() => new QueryClient())
  
//     return (
//     <Provider store={store} >
//       <QueryClientProvider client={queryClient}>
//         <Hydrate state={pageProps.dehydratedState}>
//           <Component {...pageProps} />
//         </Hydrate>
//       </QueryClientProvider>
//       </Provider>
//     )
//   }